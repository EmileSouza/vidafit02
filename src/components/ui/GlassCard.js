import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS, SHADOW } from '../../theme';

export default function GlassCard({ children, onPress, style, active = false }) {
  const CardComponent = onPress ? TouchableOpacity : View;
  
  return (
    <CardComponent
      activeOpacity={0.85}
      onPress={onPress}
      style={[styles.card, active && styles.active, style]}
    >
      <View style={styles.content}>{children}</View>
    </CardComponent>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
    ...SHADOW.soft
  },
  active: {
    borderColor: COLORS.accent,
    backgroundColor: '#F0FDF4',
    borderWidth: 2
  },
  content: { gap: 8 }
});