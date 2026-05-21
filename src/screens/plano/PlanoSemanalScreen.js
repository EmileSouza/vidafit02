import { Activity, Check, Coffee, Dumbbell, Moon, Star, Sun, Zap } from 'lucide-react-native';
import { MotiView } from 'moti';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import GlassCard from '../../components/ui/GlassCard';
import { useApp } from '../../context/AppContext';
import { COLORS, SPACING, TYPOGRAPHY } from '../../theme';

const DIAS = [
  { id: 0, nome: 'Dom', foco: 'Descanso Livre', icon: Moon, tipo: 'descanso', cor: '#F1F5F9' },
  { id: 1, nome: 'Seg', foco: 'Pernas & Glúteos', icon: Dumbbell, tipo: 'treino', cor: '#DBEAFE' },
  { id: 2, nome: 'Ter', foco: 'Cardio & Core', icon: Activity, tipo: 'treino', cor: '#FEF3C7' },
  { id: 3, nome: 'Qua', foco: 'Descanso Ativo', icon: Zap, tipo: 'descanso', cor: '#F1F5F9' },
  { id: 4, nome: 'Qui', foco: 'Peito & Braços', icon: Sun, tipo: 'treino', cor: '#DBEAFE' },
  { id: 5, nome: 'Sex', foco: 'Costas & Ombros', icon: Star, tipo: 'treino', cor: '#FEF3C7' },
  { id: 6, nome: 'Sáb', foco: 'Full Body & Mobilidade', icon: Coffee, tipo: 'treino', cor: '#DBEAFE' }
];

// ✅ CORREÇÃO: mapeia cada dia (incl. quarta/domingo) para chaves de `plano.semana`
const DIA_SEMANA_MAP = {
  0: 'domingo',
  1: 'segunda',
  2: 'terca',
  3: 'quarta',
  4: 'quinta',
  5: 'sexta',
  6: 'sabado'
};

export default function PlanoSemanalScreen({ navigation }) {
  const { progress, profile } = useApp();
  const hoje = new Date().getDay();
  const concluidos = progress?.weeklyProgress || 0;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.bg }} contentContainerStyle={{ padding: SPACING.md }}>
      <View style={styles.header}>
        <Text style={TYPOGRAPHY.h2}>Plano Semanal</Text>
        <Text style={TYPOGRAPHY.caption}>Progresso: {concluidos}/5 treinos concluídos</Text>
      </View>

      <View style={styles.grid}>
        {DIAS.map((dia, i) => {
          const isHoje = dia.id === hoje;
          const isTreino = dia.tipo === 'treino';
          const isConcluido = isTreino && dia.id < hoje && dia.id !== 0;

          return (
            <MotiView
              key={dia.id}
              from={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 60 }}
              style={styles.cardWrapper}
            >
              <GlassCard
                style={[
                  styles.dayCard,
                  isHoje && styles.cardHoje,
                  isConcluido && styles.cardConcluido,
                  { backgroundColor: isHoje ? COLORS.primary : dia.cor }
                ]}
                onPress={() =>
                  navigation.navigate('Main', {
                    screen: 'Exercicios',
                    params: { day: DIA_SEMANA_MAP[dia.id] }
                  })
                }
              >
                <View style={styles.dayTop}>
                  <dia.icon size={22} color={isHoje ? '#FFF' : isConcluido ? COLORS.accent : '#64748B'} />
                  {isConcluido && (
                    <MotiView from={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}>
                      <Check size={14} color="#FFF" style={styles.badge} />
                    </MotiView>
                  )}
                </View>
                <Text style={[styles.diaNome, isHoje && { color: '#FFF' }]}>{dia.nome}</Text>
                <Text style={[styles.diaFoco, isHoje && { color: 'rgba(255,255,255,0.85)' }]}>{dia.foco}</Text>
              </GlassCard>
            </MotiView>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: { marginBottom: SPACING.md },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  cardWrapper: { width: '31%', marginBottom: 12 },
  dayCard: { padding: 14, alignItems: 'center', justifyContent: 'space-between', height: 110, borderWidth: 0 },
  cardHoje: { shadowColor: COLORS.primary, shadowOpacity: 0.3, shadowRadius: 12, elevation: 6 },
  cardConcluido: { backgroundColor: COLORS.accent },
  dayTop: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 8 },
  badge: { backgroundColor: COLORS.accent, borderRadius: 99, padding: 2, overflow: 'hidden' },
  diaNome: { fontSize: 15, ...TYPOGRAPHY.h3 },
  diaFoco: { fontSize: 11, ...TYPOGRAPHY.caption, marginTop: 2, textAlign: 'center' }
});