import { LinearGradient } from 'expo-linear-gradient';
import { MotiView } from 'moti';
import { useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { useApp } from '../context/AppContext';
import { COLORS, GRADIENTS, TYPOGRAPHY } from '../theme';

const { width } = Dimensions.get('window');
const SPLASH_MS = 15000;
const FADE_MS = 2000;

export default function SplashScreen({ navigation }) {
  const { user } = useApp();
  const [progress, setProgress] = useState(0);
  const [shellOpacity, setShellOpacity] = useState(1);
  const userRef = useRef(user);

  userRef.current = user;

  useEffect(() => {
    const start = Date.now();
    let cancelled = false;
    let rafId = 0;

    const tick = () => {
      if (cancelled) return;
      const elapsed = Date.now() - start;
      const p = Math.min(100, (elapsed / SPLASH_MS) * 100);
      setProgress(p);

      if (elapsed >= SPLASH_MS - FADE_MS) {
        const t = (elapsed - (SPLASH_MS - FADE_MS)) / FADE_MS;
        setShellOpacity(Math.max(0, 1 - t));
      }

      if (elapsed >= SPLASH_MS) {
        navigation.replace(userRef.current ? 'Main' : 'Login');
        return;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
    };
  }, [navigation]);

  return (
    <LinearGradient colors={GRADIENTS.primary} style={styles.container}>
      {/* ✅ CORREÇÃO: splash 15s com barra sincronizada e fade-out nos últimos 2s */}
      <MotiView style={[styles.fadeWrap, { opacity: shellOpacity }]}>
        <MotiView
          from={{ scale: 0.85, opacity: 0, translateY: 25 }}
          animate={{ scale: 1, opacity: 1, translateY: 0 }}
          transition={{ type: 'spring', damping: 14, stiffness: 110, delay: 150 }}
          style={styles.logoBox}
        >
          <Text style={styles.logo}>VIDA <Text style={styles.fit}>FIT</Text></Text>
          <Text style={styles.slogan}>TRANSFORME SEU CORPO{'\n'}TRANSFORME SUA VIDA.</Text>
        </MotiView>

        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>
        <Text style={styles.status}>
          {progress < 33 ? 'Iniciando sistema...' : progress < 66 ? 'Sincronizando plano...' : 'Preparando experiência...'}
        </Text>
      </MotiView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  fadeWrap: { width: '100%', alignItems: 'center' },
  logoBox: { alignItems: 'center', marginBottom: 60 },
  logo: { fontSize: 44, color: '#FFF', ...TYPOGRAPHY.h1 },
  fit: { color: COLORS.accent },
  slogan: { fontSize: 13, color: 'rgba(255,255,255,0.8)', textAlign: 'center', marginTop: 8, ...TYPOGRAPHY.caption },
  progressTrack: { width: width * 0.65, height: 6, backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 99, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: COLORS.accent, borderRadius: 99 },
  status: { marginTop: 16, fontSize: 12, color: 'rgba(255,255,255,0.7)', ...TYPOGRAPHY.caption }
});
