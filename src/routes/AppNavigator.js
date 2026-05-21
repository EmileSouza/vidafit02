import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Apple, Dumbbell, Home, User } from 'lucide-react-native';
import { ActivityIndicator, View } from 'react-native';
import { useApp } from '../context/AppContext';
import { COLORS } from '../theme';

// Telas de Auth
import SplashScreen from '../screens/SplashScreen';
import CadastroScreen from '../screens/auth/CadastroScreen';
import LoginScreen from '../screens/auth/LoginScreen';

// Telas Principais
import AlimentacaoScreen from '../screens/alimentacao/AlimentacaoScreen';
import ExecucaoExercicioScreen from '../screens/exercicios/ExecucaoExercicioScreen';
import ExerciciosScreen from '../screens/exercicios/ExerciciosScreen';
import HomeScreen from '../screens/home/HomeScreen';
import PerfilScreen from '../screens/perfil/PerfilScreen';
import ProgressoScreen from '../screens/perfil/ProgressoScreen';
import PlanoSemanalScreen from '../screens/plano/PlanoSemanalScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BootScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.bg }}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { 
          backgroundColor: '#FFF', 
          borderTopWidth: 0, 
          elevation: 0, 
          shadowOpacity: 0, 
          height: 65, 
          paddingBottom: 8 
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textMuted,
        tabBarLabelStyle: { fontFamily: 'Poppins-Medium', fontSize: 11 },
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ tabBarIcon: ({ color, size }) => <Home size={size} color={color} /> }}
      />
      <Tab.Screen 
        name="Exercicios" 
        component={ExerciciosScreen} 
        options={{ tabBarIcon: ({ color, size }) => <Dumbbell size={size} color={color} /> }}
      />
      <Tab.Screen 
        name="Alimentacao" 
        component={AlimentacaoScreen} 
        options={{ tabBarIcon: ({ color, size }) => <Apple size={size} color={color} /> }}
      />
      <Tab.Screen 
        name="Perfil" 
        component={PerfilScreen} 
        options={{ tabBarIcon: ({ color, size }) => <User size={size} color={color} /> }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  const { user, loading } = useApp();

  return (
    <NavigationContainer>
      <Stack.Navigator
        key={loading ? 'boot' : user ? 'app' : 'auth'}
        screenOptions={{ headerShown: false }}
        {...(!loading && !user ? { initialRouteName: 'Login' } : {})}
      >
        {loading ? (
          <Stack.Screen name="Boot" component={BootScreen} />
        ) : user ? (
          <>
            <Stack.Screen name="Main" component={MainTabs} />
            <Stack.Screen name="Plano" component={PlanoSemanalScreen} />
            <Stack.Screen name="ExecucaoExercicio" component={ExecucaoExercicioScreen} />
            <Stack.Screen name="Progresso" component={ProgressoScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Cadastro" component={CadastroScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}