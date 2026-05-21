import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppProvider } from './src/context/AppContext';
import AppNavigator from './src/routes/AppNavigator';
import { COLORS } from './src/theme';

export default function App() {
  const shellStyle =
    Platform.OS === 'web'
      ? [styles.webShell, { boxShadow: '0 0 20px rgba(0,0,0,0.1)' }]
      : styles.nativeShell;

  const tree = (
    <GestureHandlerRootView style={shellStyle}>
      <SafeAreaProvider style={styles.safeArea}>
        <AppProvider>
          <AppNavigator />
        </AppProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );

  // ✅ CORREÇÃO: web — container centralizado estilo “simulador mobile”
  if (Platform.OS === 'web') {
    return <View style={styles.webPage}>{tree}</View>;
  }

  return tree;
}

const styles = StyleSheet.create({
  nativeShell: { flex: 1 },
  safeArea: { flex: 1 },
  webPage: {
    flex: 1,
    width: '100%',
    minHeight: '100%',
    backgroundColor: COLORS.text,
    alignItems: 'center'
  },
  webShell: {
    flex: 1,
    width: '100%',
    maxWidth: 420,
    marginHorizontal: 'auto',
    minHeight: '100vh',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: COLORS.border
  }
});
