import { LinearGradient } from 'expo-linear-gradient';
import { MotiView } from 'moti';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { GRADIENTS, SHADOW, TYPOGRAPHY } from '../../theme';

export default function GradientButton({ title, onPress, variant = 'primary', loading = false, style }) {
  const colors = GRADIENTS[variant] || GRADIENTS.primary;

  return (
    <MotiView
      from={{ scale: 1 }}
      animate={{ scale: loading ? 0.98 : 1 }}
      transition={{ type: 'timing', duration: 150 }}
    >
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        disabled={loading}
        style={[styles.btn, style]}
      >
        <LinearGradient colors={colors} style={styles.gradient}>
          {/* ✅ CORREÇÃO: tipografia compacta alinhada ao design system */}
          <Text style={[TYPOGRAPHY.body, styles.label]}>
            {loading ? 'Carregando...' : title}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  // ✅ CORREÇÃO: botão principal uniforme (altura, raio, padding)
  btn: {
    borderRadius: 12,
    overflow: 'hidden',
    width: '100%',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOW.strong
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  label: {
    color: '#FFF',
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600'
  }
});