import { Award, Calendar, Flame, TrendingUp } from 'lucide-react-native';
import { MotiView } from 'moti';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AnimatedProgressBar from '../../components/ui/AnimatedProgressBar';
import GlassCard from '../../components/ui/GlassCard';
import { useApp } from '../../context/AppContext';
import { COLORS, SPACING, TYPOGRAPHY } from '../../theme';

export default function ProgressoScreen() {
  const { progress } = useApp();
  const streak = progress?.streak || 0;
  const weekly = progress?.weeklyProgress || 0;
  const totalWorkouts = progress?.totalWorkouts || 0;

  const quotes = [
    "A consistência vence o talento quando o talento não é consistente.",
    "Seu único limite é você.",
    "Progresso, não perfeição.",
    "Cada treino é um passo mais perto da sua melhor versão."
  ];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.bg }} contentContainerStyle={{ padding: SPACING.md }}>
      <Text style={TYPOGRAPHY.h2}>Seu Progresso</Text>
      <Text style={[TYPOGRAPHY.caption, { marginBottom: SPACING.lg }]}>Acompanhe sua evolução e mantenha o ritmo!</Text>

      <View style={styles.row}>
        <GlassCard style={{ flex: 1, marginRight: 8 }}>
          <Flame size={28} color={COLORS.warning} />
          <Text style={[TYPOGRAPHY.h2, { marginTop: 8, color: COLORS.text }]}>🔥 {streak}</Text>
          <Text style={TYPOGRAPHY.caption}>Dias seguidos</Text>
        </GlassCard>
        <GlassCard style={{ flex: 1, marginLeft: 8 }}>
          <Calendar size={28} color={COLORS.primary} />
          <Text style={[TYPOGRAPHY.h2, { marginTop: 8, color: COLORS.text }]}>📅 {weekly}/7</Text>
          <Text style={TYPOGRAPHY.caption}>Esta semana</Text>
        </GlassCard>
      </View>

      <GlassCard style={{ marginTop: SPACING.md }}>
        <View style={styles.rowBetween}>
          <Text style={TYPOGRAPHY.h3}>Progresso Semanal</Text>
          <Text style={[TYPOGRAPHY.caption, { color: COLORS.accent }]}>{Math.round((weekly/7)*100)}%</Text>
        </View>
        <AnimatedProgressBar progress={(weekly/7)*100} style={{ marginTop: 12, height: 10 }} />
        <Text style={[TYPOGRAPHY.caption, { marginTop: 8 }]}>
          {weekly >= 5 ? '🏆 Excelente ritmo! Continue assim.' : weekly >= 3 ? '💪 Bom progresso! Faltam poucos.' : '🌱 Comece forte, você consegue!'}
        </Text>
      </GlassCard>

      <GlassCard style={{ marginTop: SPACING.md }}>
        <View style={styles.rowBetween}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Award size={24} color={COLORS.secondary} />
            <Text style={TYPOGRAPHY.h3}>Total de Treinos</Text>
          </View>
          <Text style={[TYPOGRAPHY.h2, { color: COLORS.secondary }]}>{totalWorkouts}</Text>
        </View>
      </GlassCard>

      <MotiView from={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 300 }}>
        <GlassCard style={{ marginTop: SPACING.md, backgroundColor: '#F0F9FF', borderLeftWidth: 4, borderLeftColor: COLORS.primary }}>
          <TrendingUp size={24} color={COLORS.primary} style={{ marginBottom: 8 }} />
          <Text style={[TYPOGRAPHY.body, { fontStyle: 'italic', color: COLORS.text }]}>"{quote}"</Text>
        </GlassCard>
      </MotiView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row' },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }
});