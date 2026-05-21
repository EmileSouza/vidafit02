import { doc, getDoc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { getFlowId } from '../utils/getFluxoId';
import { db } from './firebase';

const USERS_COL = 'users';

export const userService = {
  createProfile: async (uid, data) => {
    const age = parseInt(data.idade);
    let level = data.nivel;
    if (age < 18 && level === 'avancado') level = 'intermediario';

    const flowId = getFlowId({ nivel: level, objetivo: data.objetivo, alimentacao: data.alimentacao });

    await setDoc(doc(db, USERS_COL, uid), {
      nome: data.nome,
      idade: age,
      peso: parseFloat(data.peso),
      objetivo: data.objetivo,
      nivel: level,
      alimentacao: data.alimentacao,
      flowId,
      createdAt: serverTimestamp(),
      lastPlanChange: Date.now()
    });
    return flowId;
  },

  getProfile: async (uid) => {
    const snap = await getDoc(doc(db, USERS_COL, uid));
    return snap.exists() ? { id: snap.id, ...snap.data() } : null;
  },

  updateProfile: async (uid, updates) => {
    const ref = doc(db, USERS_COL, uid);
    const current = await userService.getProfile(uid);
    if (!current) throw new Error('Perfil não encontrado.');

    const planFields = ['objetivo', 'nivel', 'alimentacao'];
    const hasPlanChange = planFields.some(f => updates[f] !== undefined);

    // 🔧 REGRA DESATIVADA TEMPORARIAMENTE PARA TESTES
    // const now = Date.now();
    // const diffDays = (now - (current.lastPlanChange ?? now)) / (1000 * 60 * 60 * 24);
    // if (hasPlanChange && diffDays < 90) {
    //   throw new Error(`Aguarde ${Math.ceil(90 - diffDays)} dias para alterar objetivo ou nível.`);
    // }

    if (updates.idade && updates.nivel === 'avancado' && parseInt(updates.idade) < 18) {
      updates.nivel = 'intermediario';
    }

    const mergedNivel = updates.nivel ?? current.nivel;
    const mergedObjetivo = updates.objetivo ?? current.objetivo;
    const mergedAlimentacao = updates.alimentacao ?? current.alimentacao ?? 'vegetariano';

    if (hasPlanChange) {
      updates.flowId = getFlowId({
        nivel: mergedNivel,
        objetivo: mergedObjetivo,
        alimentacao: mergedAlimentacao
      });
      updates.lastPlanChange = Date.now();
    }

    await updateDoc(ref, updates);

    if (hasPlanChange) {
      return {
        needsReset: true,
        newFlowId: updates.flowId
      };
    }
    return { needsReset: false };
  }
};