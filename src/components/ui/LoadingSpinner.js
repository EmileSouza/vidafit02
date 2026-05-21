import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { COLORS } from '../../theme';

export default function LoadingSpinner({ size = 'large', color = COLORS.primary }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});