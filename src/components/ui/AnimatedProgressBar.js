import { MotiView } from 'moti';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../theme';

export default function AnimatedProgressBar({ progress = 0, height = 8, style }) {
  const safeProgress = Math.min(100, Math.max(0, progress));

  return (
    <View style={[styles.track, { height }, style]}>
      <MotiView
        from={{ width: '0%' }}
        animate={{ width: `${safeProgress}%` }}
        transition={{ type: 'spring', damping: 15, stiffness: 100 }}
        style={[styles.fill, { height }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: { 
    backgroundColor: '#E2E8F0', 
    borderRadius: 99, 
    overflow: 'hidden' 
  },
  fill: { 
    backgroundColor: COLORS.accent, 
    borderRadius: 99 
  }
});