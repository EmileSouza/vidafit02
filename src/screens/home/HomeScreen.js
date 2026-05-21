import { LinearGradient } from 'expo-linear-gradient';
import { Activity, Flame, Target, Zap } from 'lucide-react-native';
import { MotiView } from 'moti';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AnimatedProgressBar from '../../components/ui/AnimatedProgressBar';
import GlassCard from '../../components/ui/GlassCard';
import GradientButton from '../../components/ui/GradientButton';
import { useApp } from '../../context/AppContext';
import { useVidaFitPlan } from '../../hooks/useVidaFitPlan';
import { getDiaAtual } from '../../utils/dateHelpers';
import { COLORS, GRADIENTS, SHADOW, SPACING, TYPOGRAPHY } from '../../theme';

export default function HomeScreen({ navigation }) {
  const { profile, progress } = useApp();
  const streak = progress?.streak || 0;
  const weekly = progress?.weeklyProgress || 0;
  // ✅ CORREÇÃO: perfil vazio — guia motivacional em vez de área em branco
  const profileIncomplete = !profile || !profile?.objetivo || !profile?.nivel;

  const plano = useVidaFitPlan(
    profileIncomplete ? null : profile.nivel,
    profileIncomplete ? null : profile.objetivo,
    profileIncomplete ? null : (profile.alimentacao ?? 'vegetariano')
  );

  const metaLabel = (profile?.objetivo || 'condicionamento').replace(/_/g, ' ');
  const nivelLabel = profile?.nivel
    ? profile.nivel.charAt(0).toUpperCase() + profile.nivel.slice(1)
    : 'Iniciante';
  const duracaoTreino = plano?.duracao_treino || '40 min';

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Gradient */}
      <LinearGradient colors={GRADIENTS.primary} style={styles.header}>
        <Text style={[TYPOGRAPHY.h2, { color: '#FFF', marginTop: SPACING.lg }]}>
          Olá, {profile?.nome?.split(' ')[0] || 'Atleta'}! 👋
        </Text>
        <Text style={[TYPOGRAPHY.body, { color: 'rgba(255,255,255,0.85)', marginTop: 4 }]}>
          Bora para mais um dia incrível?
        </Text>
      </LinearGradient>

      <View style={styles.body}>
        {profileIncomplete ? (
          <GlassCard style={styles.guideCard}>
            <Text style={[TYPOGRAPHY.h2, { textAlign: 'center', marginBottom: SPACING.sm }]}>Quase lá! 🚀</Text>
            <Text style={[TYPOGRAPHY.body, { textAlign: 'center', color: COLORS.textMuted, marginBottom: SPACING.md }]}>
              Insira suas informações no Perfil para liberar seu plano personalizado de treino e alimentação.
            </Text>
            <GradientButton title="Ir para Perfil" onPress={() => navigation.navigate('Perfil')} />
          </GlassCard>
        ) : (
          <>
            {/* Streak & Progress */}
            <GlassCard>
              <View style={styles.rowBetween}>
                <View>
                  <Text style={TYPOGRAPHY.caption}>Sequência atual</Text>
                  <Text style={[TYPOGRAPHY.h2, { color: COLORS.accent, marginTop: 4 }]}>🔥 {streak} dias</Text>
                </View>
                <MotiView from={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 200 }}>
                  <Flame size={32} color={COLORS.warning} />
                </MotiView>
              </View>
              <Text style={[TYPOGRAPHY.caption, { marginTop: 12 }]}>Progresso semanal</Text>
              <AnimatedProgressBar progress={(weekly / 7) * 100} style={{ marginTop: 8 }} />
              <Text style={[TYPOGRAPHY.caption, { marginTop: 4 }]}>
                {weekly}/7 treinos concluídos
              </Text>
            </GlassCard>

            {/* Daily Workout Card */}
            <MotiView from={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 300 }}>
              <GlassCard active onPress={() => navigation.navigate('Exercicios', { day: getDiaAtual() })}>
                <LinearGradient colors={GRADIENTS.accent} style={styles.workoutCard}>
                  <View style={{ flex: 1 }}>
                    <Text style={[TYPOGRAPHY.caption, { color: '#FFF' }]}>Treino de hoje</Text>
                    {/* ✅ CORREÇÃO: meta e nível personalizados (sem “Fluxo #”) */}
                    <Text style={[TYPOGRAPHY.h1, { color: '#FFF', marginVertical: 6, textTransform: 'capitalize' }]}>
                      Meta: {metaLabel}
                    </Text>
                    <Text style={[TYPOGRAPHY.body, { color: 'rgba(255,255,255,0.9)' }]}>
                      Nível: {nivelLabel} • {duracaoTreino}
                    </Text>
                  </View>
                  <Target size={48} color="#FFF" opacity={0.8} />
                </LinearGradient>
                <GradientButton
                  title="Começar treino →"
                  variant="accent"
                  onPress={() => navigation.navigate('Exercicios', { day: getDiaAtual() })}
                  style={{ marginTop: SPACING.sm }}
                />
              </GlassCard>
            </MotiView>

            {/* ✅ CORREÇÃO: grade de ações rápidas alinhada ao protótipo (2x2) */}
            <View style={styles.grid}>
              {[
                { icon: Activity, label: 'Treino', screen: 'Plano' },
                { icon: Zap, label: 'Dieta', screen: 'Alimentacao' },
                { icon: Flame, label: 'Água', screen: 'Alimentacao' },
                { icon: Target, label: 'Progresso', screen: 'Progresso' }
              ].map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <MotiView key={item.label} style={styles.gridCell} from={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 400 + (i * 100) }}>
                    <GlassCard style={styles.actionCard} onPress={() => navigation.navigate(item.screen)}>
                      <IconComponent size={30} color={COLORS.primary} />
                      <Text style={[TYPOGRAPHY.body, { marginTop: SPACING.sm, textAlign: 'center' }]}>{item.label}</Text>
                    </GlassCard>
                  </MotiView>
                );
              })}
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  header: { padding: SPACING.lg, paddingBottom: SPACING.xl },
  body: { padding: SPACING.md, marginTop: -20 },
  guideCard: { alignItems: 'stretch' },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  workoutCard: { padding: SPACING.md, borderRadius: 16, flexDirection: 'row', alignItems: 'center', gap: 12 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: SPACING.md
  },
  gridCell: { width: '48%' },
  actionCard: {
    width: '100%',
    aspectRatio: 1.2,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0,
    ...SHADOW.soft
  }
});