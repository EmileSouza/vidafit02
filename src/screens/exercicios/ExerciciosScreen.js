import { Check, Dumbbell, Play } from 'lucide-react-native';
import { MotiView } from 'moti';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Vibration,
  View
} from 'react-native';
import GlassCard from '../../components/ui/GlassCard';
import GradientButton from '../../components/ui/GradientButton';
import { useApp } from '../../context/AppContext';
import { useVidaFitPlan } from '../../hooks/useVidaFitPlan';
import { getDiaAtual } from '../../utils/dateHelpers';
import { workoutService } from '../../services/workout';
import { COLORS, SPACING, TYPOGRAPHY } from '../../theme';

/** ✅ CORREÇÃO: normaliza `exercicios` do fluxo (objetos, strings ou arrays mistos). */
function exercisesFromDay(dados) {
  if (!dados || dados.tipo === 'descanso_ativo' || dados.tipo === 'descanso') return [];
  const raw = dados.exercicios;
  if (!raw) return [];
  if (typeof raw === 'string') {
    return [{ id: 1, nome: raw, series: 1, reps: '—', musculo: 'Plano' }];
  }
  if (!Array.isArray(raw)) return [];
  return raw.map((ex, i) => {
    if (typeof ex === 'string') {
      return { id: i + 1, nome: ex, series: 3, reps: '10–12', musculo: 'Corpo' };
    }
    return {
      id: i + 1,
      nome: ex.nome || `Exercício ${i + 1}`,
      series: ex.series ?? 3,
      reps: ex.reps ?? ex.tempo ?? '—',
      time: ex.tempo,
      musculo: ex.musculos || ex.musculo || 'Corpo',
      done: false
    };
  });
}

const DIA_LABEL = {
  domingo: 'Domingo',
  segunda: 'Segunda-feira',
  terca: 'Terça-feira',
  quarta: 'Quarta-feira',
  quinta: 'Quinta-feira',
  sexta: 'Sexta-feira',
  sabado: 'Sábado'
};

export default function ExerciciosScreen({ navigation, route }) {
  const { user, profile, refreshData } = useApp();
  const [exs, setExs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [completedExercises, setCompletedExercises] = useState({});

  const profileIncomplete =
    !profile || !profile.objetivo || !profile.nivel || !profile.peso;

  const alimentacao = profile?.alimentacao ?? 'vegetariano';
  const plano = useVidaFitPlan(profile?.nivel, profile?.objetivo, alimentacao);

  const diaSemana = route.params?.day || getDiaAtual();

  const dadosDoDia = useMemo(() => plano?.semana?.[diaSemana], [plano, diaSemana]);
  const isDescanso =
    dadosDoDia?.tipo === 'descanso_ativo' || dadosDoDia?.tipo === 'descanso';

  const prevDiaRef = useRef(diaSemana);

  useEffect(() => {
    const id = route.params?.completedExerciseId;
    if (id == null) return;
    setCompletedExercises(prev => ({ ...prev, [id]: true }));
    navigation.setParams({ completedExerciseId: undefined });
  }, [route.params?.completedExerciseId, navigation]);

  useEffect(() => {
    if (prevDiaRef.current !== diaSemana) {
      prevDiaRef.current = diaSemana;
      setCompletedExercises({});
    }
    if (!plano || !dadosDoDia) {
      setExs([]);
      return;
    }
    if (isDescanso) {
      setExs([]);
      return;
    }
    setExs(exercisesFromDay(dadosDoDia));
  }, [plano, dadosDoDia, isDescanso, diaSemana]);

  const toggleDone = id => {
    setCompletedExercises(prev => ({ ...prev, [id]: !prev[id] }));
    Vibration.vibrate(10);
  };

  const finishWorkout = async () => {
    const allDone = isDescanso || exs.length === 0 || exs.every(ex => completedExercises[ex.id]);
    if (!allDone) {
      return Alert.alert('Atenção', 'Complete todos os exercícios antes de finalizar.');
    }

    setLoading(true);
    try {
      await workoutService.completeWorkout(user.uid);
      await refreshData();
      Alert.alert('🎉 Treino concluído!', 'Progresso semanal atualizado.', [
        { text: 'OK', onPress: () => navigation.navigate('Home') }
      ]);
    } catch (e) {
      Alert.alert('Erro', e.message);
    } finally {
      setLoading(false);
    }
  };

  if (profileIncomplete) {
    return (
      <View style={styles.emptyContainer}>
        <GlassCard style={styles.emptyCard}>
          <Text style={styles.emptyIcon}>🎯</Text>
          <Text style={styles.emptyTitle}>Quase lá! 🚀</Text>
          <Text style={styles.emptyText}>
            Insira suas informações no Perfil para liberar seu plano personalizado de treino e alimentação.
          </Text>
          <GradientButton
            title="Ir para Perfil"
            onPress={() => navigation.navigate('Perfil')}
            style={{ marginTop: 20 }}
          />
        </GlassCard>
      </View>
    );
  }

  if (!plano) {
    return (
      <View style={styles.loadingBox}>
        <ActivityIndicator size="large" color={COLORS.primary} />
        <Text style={[TYPOGRAPHY.caption, { marginTop: SPACING.sm }]}>Carregando plano…</Text>
      </View>
    );
  }

  // ✅ CORREÇÃO: dia sem entrada em `semana` (evita lista vazia silenciosa)
  if (!isDescanso && !dadosDoDia) {
    return (
      <View style={{ flex: 1, backgroundColor: COLORS.bg, justifyContent: 'center', padding: SPACING.lg }}>
        <Text style={[TYPOGRAPHY.body, { textAlign: 'center', marginBottom: SPACING.md }]}>
          Não há treino cadastrado para {DIA_LABEL[diaSemana] || diaSemana} neste plano.
        </Text>
        <GradientButton title="Abrir plano semanal" onPress={() => navigation.navigate('Plano')} />
      </View>
    );
  }

  if (isDescanso) {
    const atividades = Array.isArray(dadosDoDia?.atividades)
      ? dadosDoDia.atividades.join(' • ')
      : dadosDoDia?.sugestao || 'Recuperação leve e hidratação.';

    return (
      <View style={{ flex: 1, backgroundColor: COLORS.bg }}>
        <View style={styles.topBar}>
          <Text style={TYPOGRAPHY.h2}>{DIA_LABEL[diaSemana] || diaSemana}</Text>
          <Text style={TYPOGRAPHY.caption}>Dia de recuperação</Text>
        </View>
        {/* ✅ CORREÇÃO: quarta / descanso — sem lista de musculação */}
        <ScrollView contentContainerStyle={styles.restContainer}>
          <Text style={styles.restIcon}>🧘</Text>
          <Text style={styles.restTitle}>Dia de Recuperação Ativa</Text>
          <Text style={styles.restText}>{atividades}</Text>
          <GlassCard style={{ marginTop: SPACING.md }}>
            <Text style={TYPOGRAPHY.body}>✅ Faça alongamentos leves</Text>
            <Text style={TYPOGRAPHY.body}>✅ Hidrate-se</Text>
            <Text style={TYPOGRAPHY.body}>✅ Durma 7–8h</Text>
          </GlassCard>
          <GradientButton
            title="Registrar descanso"
            onPress={finishWorkout}
            loading={loading}
            style={{ marginTop: SPACING.lg }}
          />
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.bg }}>
      <View style={styles.topBar}>
        <Text style={TYPOGRAPHY.h2}>Treino — {DIA_LABEL[diaSemana] || diaSemana}</Text>
        <Text style={TYPOGRAPHY.caption}>
          {dadosDoDia?.tipo?.replace(/_/g, ' ') || 'Plano'} • {plano?.duracao_treino || '40 min'}
        </Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: SPACING.md, paddingBottom: 100 }}>
        {exs.map((ex, i) => {
          const done = !!completedExercises[ex.id];
          return (
            <MotiView key={ex.id} from={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 80 }}>
              <GlassCard style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => toggleDone(ex.id)} style={styles.checkWrap}>
                  {done ? (
                    <Check size={22} color={COLORS.accent} />
                  ) : (
                    <View style={styles.checkEmpty} />
                  )}
                </TouchableOpacity>
                <View style={{ width: 48, height: 48, borderRadius: 12, backgroundColor: '#F1F5F9', justifyContent: 'center', alignItems: 'center', marginRight: 12 }}>
                  <Dumbbell size={20} color={COLORS.primary} />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={[TYPOGRAPHY.h3, done && styles.doneText]}>{ex.nome}</Text>
                  <Text style={TYPOGRAPHY.caption}>
                    {ex.series}x {ex.reps || ex.time} • {ex.musculo}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ExecucaoExercicio', {
                      exercise: ex,
                      day: diaSemana,
                      exerciseId: ex.id
                    })
                  }
                  style={{ padding: 8 }}
                >
                  <Play size={24} color={COLORS.primary} />
                </TouchableOpacity>
              </GlassCard>
            </MotiView>
          );
        })}

        <GradientButton title="Concluir Treino" onPress={finishWorkout} loading={loading} style={{ marginTop: SPACING.sm }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.bg
  },
  topBar: {
    padding: SPACING.md,
    backgroundColor: COLORS.surface,
    borderBottomWidth: 1,
    borderColor: COLORS.border
  },
  emptyContainer: {
    flex: 1,
    backgroundColor: COLORS.bg,
    justifyContent: 'center',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md
  },
  emptyCard: {
    alignItems: 'center',
    maxWidth: 400,
    alignSelf: 'center',
    width: '100%'
  },
  emptyIcon: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: SPACING.sm
  },
  emptyTitle: {
    ...TYPOGRAPHY.h2,
    textAlign: 'center',
    marginBottom: SPACING.sm,
    color: COLORS.text
  },
  emptyText: {
    ...TYPOGRAPHY.body,
    textAlign: 'center',
    color: COLORS.textMuted
  },
  restContainer: {
    padding: SPACING.lg,
    alignItems: 'center',
    paddingBottom: 100
  },
  restIcon: { fontSize: 48, marginBottom: SPACING.sm },
  restTitle: { ...TYPOGRAPHY.h2, textAlign: 'center', marginBottom: SPACING.sm },
  restText: { ...TYPOGRAPHY.body, textAlign: 'center', color: COLORS.textMuted, marginBottom: SPACING.md },
  checkWrap: { marginRight: 8, padding: 4 },
  checkEmpty: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: COLORS.border
  },
  doneText: { textDecorationLine: 'line-through', color: COLORS.textMuted }
});
