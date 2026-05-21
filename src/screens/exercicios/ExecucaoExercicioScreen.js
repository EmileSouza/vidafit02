import { useNavigation, useRoute } from '@react-navigation/native';
import { ChevronLeft, Dumbbell, Pause, Play, StopCircle } from 'lucide-react-native';
import { MotiView } from 'moti';
import { useEffect, useRef, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GlassCard from '../../components/ui/GlassCard';
import GradientButton from '../../components/ui/GradientButton';
import { COLORS, SPACING, TYPOGRAPHY } from '../../theme';

export default function ExecucaoExercicioScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const exercise = route.params?.exercise || { id: 1, nome: 'Agachamento', series: 3, reps: 12, musculo: 'Pernas' };
  const exerciseId = route.params?.exerciseId ?? exercise?.id;
  const returnDay = route.params?.day;

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => setTime(t => t + 1), 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleFinish = () => {
    clearInterval(intervalRef.current);
    // ✅ CORREÇÃO: volta à lista marcando exercício concluído + mantém o dia da semana
    navigation.navigate('Main', {
      screen: 'Exercicios',
      params: { completedExerciseId: exerciseId, day: returnDay }
    });
    Alert.alert('✅ Série concluída', `Tempo: ${formatTime(time)}. Continue o treino quando quiser.`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <ChevronLeft size={28} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={TYPOGRAPHY.h2}>Execução</Text>
        <View style={{ width: 28 }} />
      </View>

      <View style={styles.content}>
        <MotiView from={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}>
          <GlassCard style={styles.exerciseCard}>
            <Dumbbell size={48} color={COLORS.primary} style={{ marginBottom: 12 }} />
            <Text style={[TYPOGRAPHY.h1, { textAlign: 'center' }]}>{exercise.nome}</Text>
            <Text style={[TYPOGRAPHY.body, { color: COLORS.textMuted, textAlign: 'center', marginTop: 4 }]}>
              {exercise.musculo} • {exercise.series} séries x {exercise.reps || exercise.time}
            </Text>
          </GlassCard>
        </MotiView>

        <View style={styles.timerContainer}>
          <Text style={styles.timerText}>{formatTime(time)}</Text>
          <Text style={TYPOGRAPHY.caption}>Tempo de execução</Text>
        </View>

        <View style={styles.controls}>
          <TouchableOpacity onPress={() => setIsRunning(!isRunning)} style={[styles.controlBtn, isRunning ? styles.pauseBtn : styles.playBtn]}>
            {isRunning ? <Pause size={32} color="#FFF" /> : <Play size={32} color="#FFF" />}
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFinish} style={[styles.controlBtn, styles.stopBtn]}>
            <StopCircle size={32} color="#FFF" />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: SPACING.xl, width: '100%' }}>
          <GradientButton title="Finalizar Série" onPress={handleFinish} variant="accent" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: SPACING.md, backgroundColor: COLORS.surface, borderBottomWidth: 1, borderColor: COLORS.border },
  backBtn: { padding: 4 },
  content: { flex: 1, padding: SPACING.md, alignItems: 'center' },
  exerciseCard: { alignItems: 'center', padding: SPACING.lg, width: '100%', marginBottom: SPACING.xl },
  timerContainer: { alignItems: 'center', marginVertical: SPACING.xl },
  timerText: { fontSize: 64, fontFamily: 'Poppins-Bold', color: COLORS.primary, letterSpacing: 2 },
  controls: { flexDirection: 'row', gap: SPACING.lg, marginBottom: SPACING.xl },
  controlBtn: { width: 72, height: 72, borderRadius: 36, justifyContent: 'center', alignItems: 'center', elevation: 4 },
  playBtn: { backgroundColor: COLORS.primary },
  pauseBtn: { backgroundColor: COLORS.warning },
  stopBtn: { backgroundColor: COLORS.danger }
});