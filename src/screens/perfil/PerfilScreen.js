import { useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { Activity, ChevronDown, LogOut, Ruler, Target, User, Utensils, Weight } from 'lucide-react-native';
import GlassCard from '../../components/ui/GlassCard';
import GradientButton from '../../components/ui/GradientButton';
import { useApp } from '../../context/AppContext';
import { authService } from '../../services/auth';
import { userService } from '../../services/user';
import { COLORS, SPACING, TYPOGRAPHY } from '../../theme';

const DEFAULT_ALIMENTACAO = 'vegetariano';

/** Valores salvos no Firestore; `carne` = onívoro no fluxo de 24 combinações (getFlowId). */
const ALIMENTACAO_OPCOES = [
  { value: 'vegetariano', label: 'Vegetariana', hint: 'Sem carne — plano com proteínas vegetais' },
  { value: 'carne', label: 'Onívora', hint: 'Inclui carne — plano onívoro' }
];

export default function PerfilScreen() {
  const { profile, refreshData, user } = useApp();
  const [loading, setLoading] = useState(false);
  const [showObjetivoModal, setShowObjetivoModal] = useState(false);
  const [showNivelModal, setShowNivelModal] = useState(false);
  const [showAlimentacaoModal, setShowAlimentacaoModal] = useState(false);

  const [form, setForm] = useState({
    nome: '',
    idade: '',
    peso: '',
    objetivo: 'condicionamento',
    nivel: 'iniciante',
    alimentacao: DEFAULT_ALIMENTACAO
  });

  useEffect(() => {
    if (!profile) return;
    setForm({
      nome: profile.nome || '',
      idade: profile.idade?.toString() || '',
      peso: profile.peso?.toString() || '',
      objetivo: profile.objetivo || 'condicionamento',
      nivel: profile.nivel || 'iniciante',
      alimentacao: profile.alimentacao === 'carne' ? 'carne' : 'vegetariano'
    });
  }, [profile]);

  const handleSave = async () => {
    if (!form.nome.trim()) {
      Alert.alert('Atenção', 'Preencha o nome.');
      return;
    }
    if (!form.idade || parseInt(form.idade, 10) < 10 || parseInt(form.idade, 10) > 100) {
      Alert.alert('Atenção', 'Idade deve estar entre 10 e 100 anos.');
      return;
    }
    if (!form.peso || parseFloat(form.peso) < 30 || parseFloat(form.peso) > 200) {
      Alert.alert('Atenção', 'Peso deve estar entre 30 e 200 kg.');
      return;
    }

    const userId = user?.uid;
    if (!userId) {
      Alert.alert('Erro', 'Usuário não autenticado.');
      return;
    }

    setLoading(true);
    try {
      // ✅ CORREÇÃO: sem doc no Firestore — createProfile (evita profile.id null e "Perfil não encontrado" no update)
      if (!profile) {
        await userService.createProfile(userId, {
          nome: form.nome.trim(),
          idade: form.idade,
          peso: form.peso,
          objetivo: form.objetivo,
          nivel: form.nivel,
          alimentacao: form.alimentacao || DEFAULT_ALIMENTACAO
        });
      } else {
        // ✅ CORREÇÃO: usa user.uid (mesmo id do documento) — não depende de profile.id em memória
        const result = await userService.updateProfile(userId, {
          nome: form.nome.trim(),
          idade: parseInt(form.idade, 10),
          peso: parseFloat(form.peso),
          objetivo: form.objetivo,
          nivel: form.nivel,
          alimentacao: form.alimentacao || DEFAULT_ALIMENTACAO
        });
        if (result.needsReset) {
          Alert.alert('Plano Atualizado', 'Seu treino e dieta foram recalculados.');
        }
      }

      await refreshData();
      Alert.alert('✅ Sucesso', 'Perfil salvo com sucesso! Seu plano foi atualizado.');
    } catch (error) {
      Alert.alert('Erro', error?.message || 'Não foi possível salvar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    Alert.alert('Sair da conta', 'Tem certeza que deseja sair?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Sair',
        style: 'destructive',
        onPress: async () => {
          try {
            await authService.logout();
          } catch {
            Alert.alert('Erro', 'Não foi possível sair.');
          }
        }
      }
    ]);
  };

  const objetivos = [
    { value: 'emagrecer', label: 'Emagrecer' },
    { value: 'ganhar_massa', label: 'Ganhar Massa Muscular' },
    { value: 'condicionamento', label: 'Condicionamento Físico' },
    { value: 'saude_bem_estar', label: 'Saúde e Bem-estar' }
  ];

  const niveis = [
    { value: 'iniciante', label: 'Iniciante' },
    { value: 'intermediario', label: 'Intermediário' },
    { value: 'avancado', label: 'Avançado' }
  ];

  const objetivoLabel = (form.objetivo || '').replace(/_/g, ' ');
  const alimentacaoLabel = ALIMENTACAO_OPCOES.find(o => o.value === form.alimentacao)?.label ?? 'Vegetariana';

  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.bg }} contentContainerStyle={{ padding: SPACING.md, paddingBottom: 100 }}>
      <Text style={[TYPOGRAPHY.h2, { marginBottom: SPACING.sm }]}>Meu Perfil</Text>
      <Text style={[TYPOGRAPHY.caption, { marginBottom: SPACING.lg }]}>Edite seus dados para manter o plano preciso</Text>

      <GlassCard style={{ marginBottom: 12 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <User size={20} color={COLORS.primary} />
          <TextInput
            style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 16, color: COLORS.text }}
            placeholder="Nome completo"
            placeholderTextColor={COLORS.textMuted}
            value={form.nome}
            onChangeText={v => setForm(p => ({ ...p, nome: v }))}
          />
        </View>
      </GlassCard>

      <GlassCard style={{ marginBottom: 12 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <Ruler size={20} color={COLORS.primary} />
          <TextInput
            style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 16, color: COLORS.text }}
            placeholder="Idade"
            placeholderTextColor={COLORS.textMuted}
            value={form.idade}
            onChangeText={v => setForm(p => ({ ...p, idade: v.replace(/\D/g, '') }))}
            keyboardType="numeric"
          />
        </View>
      </GlassCard>

      <GlassCard style={{ marginBottom: 12 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <Weight size={20} color={COLORS.primary} />
          <TextInput
            style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 16, color: COLORS.text }}
            placeholder="Peso (kg)"
            placeholderTextColor={COLORS.textMuted}
            value={form.peso}
            onChangeText={v => setForm(p => ({ ...p, peso: v.replace(/[^0-9.]/g, '') }))}
            keyboardType="decimal-pad"
          />
        </View>
      </GlassCard>

      <GlassCard style={{ marginBottom: 12 }}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }} onPress={() => setShowObjetivoModal(true)}>
          <Target size={20} color={COLORS.primary} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 12, fontFamily: 'Poppins-Medium', color: COLORS.textMuted, marginBottom: 2 }}>Objetivo</Text>
            <Text style={{ fontSize: 16, fontFamily: 'Poppins-SemiBold', color: COLORS.text, textTransform: 'capitalize' }}>
              {objetivoLabel}
            </Text>
          </View>
          <ChevronDown size={20} color={COLORS.textMuted} />
        </TouchableOpacity>
      </GlassCard>

      <Modal visible={showObjetivoModal} transparent animationType="slide" onRequestClose={() => setShowObjetivoModal(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Selecione o Objetivo</Text>
            <FlatList
              data={objetivos}
              keyExtractor={item => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[styles.modalItem, form.objetivo === item.value && styles.modalItemSelected]}
                  onPress={() => {
                    setForm(p => ({ ...p, objetivo: item.value }));
                    setShowObjetivoModal(false);
                  }}
                >
                  <Text style={[styles.modalItemText, form.objetivo === item.value && styles.modalItemTextSelected]}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity onPress={() => setShowObjetivoModal(false)} style={styles.modalClose}>
              <Text style={styles.modalCloseText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <GlassCard style={{ marginBottom: 12 }}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }} onPress={() => setShowNivelModal(true)}>
          <Activity size={20} color={COLORS.primary} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 12, fontFamily: 'Poppins-Medium', color: COLORS.textMuted, marginBottom: 2 }}>Nível</Text>
            <Text style={{ fontSize: 16, fontFamily: 'Poppins-SemiBold', color: COLORS.text, textTransform: 'capitalize' }}>{form.nivel}</Text>
          </View>
          <ChevronDown size={20} color={COLORS.textMuted} />
        </TouchableOpacity>
      </GlassCard>

      <Modal visible={showNivelModal} transparent animationType="slide" onRequestClose={() => setShowNivelModal(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Selecione o Nível</Text>
            <FlatList
              data={niveis}
              keyExtractor={item => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[styles.modalItem, form.nivel === item.value && styles.modalItemSelected]}
                  onPress={() => {
                    setForm(p => ({ ...p, nivel: item.value }));
                    setShowNivelModal(false);
                  }}
                >
                  <Text style={[styles.modalItemText, form.nivel === item.value && styles.modalItemTextSelected]}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity onPress={() => setShowNivelModal(false)} style={styles.modalClose}>
              <Text style={styles.modalCloseText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* ✅ CORREÇÃO: tipo de alimentação (vegetariana vs onívora) — integra os 24 fluxos (getFlowId) e a tela Alimentação */}
      <GlassCard style={{ marginBottom: 12 }}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }} onPress={() => setShowAlimentacaoModal(true)}>
          <Utensils size={20} color={COLORS.primary} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 12, fontFamily: 'Poppins-Medium', color: COLORS.textMuted, marginBottom: 2 }}>Alimentação</Text>
            <Text style={{ fontSize: 16, fontFamily: 'Poppins-SemiBold', color: COLORS.text }}>{alimentacaoLabel}</Text>
            <Text style={[TYPOGRAPHY.caption, { marginTop: 4 }]}>
              Usado nas sugestões da aba Alimentação (fluxo do plano).
            </Text>
          </View>
          <ChevronDown size={20} color={COLORS.textMuted} />
        </TouchableOpacity>
      </GlassCard>

      <Modal visible={showAlimentacaoModal} transparent animationType="slide" onRequestClose={() => setShowAlimentacaoModal(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Tipo de alimentação</Text>
            <FlatList
              data={ALIMENTACAO_OPCOES}
              keyExtractor={item => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[styles.modalItem, form.alimentacao === item.value && styles.modalItemSelected]}
                  onPress={() => {
                    setForm(p => ({ ...p, alimentacao: item.value }));
                    setShowAlimentacaoModal(false);
                  }}
                >
                  <Text style={[styles.modalItemText, form.alimentacao === item.value && styles.modalItemTextSelected]}>{item.label}</Text>
                  <Text
                    style={[
                      styles.modalHint,
                      form.alimentacao === item.value && styles.modalHintSelected
                    ]}
                  >
                    {item.hint}
                  </Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity onPress={() => setShowAlimentacaoModal(false)} style={styles.modalClose}>
              <Text style={styles.modalCloseText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <GradientButton title="Salvar Alterações" onPress={handleSave} loading={loading} style={{ marginTop: SPACING.md }} />

      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <LogOut size={20} color={COLORS.danger} />
        <Text style={styles.logoutText}>Sair da conta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end'
  },
  modalContent: {
    backgroundColor: COLORS.surface,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: SPACING.lg,
    maxHeight: 440
  },
  modalTitle: {
    ...TYPOGRAPHY.h3,
    marginBottom: SPACING.md,
    textAlign: 'center',
    color: COLORS.text
  },
  modalItem: {
    padding: SPACING.md,
    borderRadius: 12,
    marginBottom: 8,
    backgroundColor: COLORS.bg
  },
  modalItemSelected: {
    backgroundColor: COLORS.primary
  },
  modalItemText: {
    ...TYPOGRAPHY.body,
    textAlign: 'center',
    color: COLORS.text
  },
  modalItemTextSelected: {
    color: '#FFF',
    fontFamily: 'Poppins-SemiBold'
  },
  modalHint: {
    ...TYPOGRAPHY.caption,
    textAlign: 'center',
    marginTop: 4,
    color: COLORS.textMuted
  },
  modalHintSelected: {
    color: 'rgba(255,255,255,0.9)'
  },
  modalClose: {
    marginTop: SPACING.md,
    padding: SPACING.md,
    alignItems: 'center'
  },
  modalCloseText: {
    color: COLORS.textMuted,
    fontFamily: 'Poppins-Medium'
  },
  logoutButton: {
    marginTop: 20,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#FEE2E2',
    borderWidth: 1,
    borderColor: '#FECACA',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8
  },
  logoutText: {
    color: COLORS.danger,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15
  }
});
