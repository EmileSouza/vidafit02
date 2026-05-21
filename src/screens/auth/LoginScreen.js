import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import GradientButton from '../../components/ui/GradientButton';
import { authService } from '../../services/auth';
import { COLORS, SPACING, TYPOGRAPHY } from '../../theme';

export default function LoginScreen({ navigation }) {
  const [form, setForm] = useState({ email: '', senha: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'E-mail inválido';
    if (form.senha.length < 6) e.senha = 'Mínimo 6 caracteres';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleLogin = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      await authService.login(form.email, form.senha);
      navigation.replace('Main');
    } catch (err) {
      // ✅ CORREÇÃO: mensagem explícita para e-mail não cadastrado / credencial inválida (Firebase)
      if (err?.code === 'auth/user-not-found' || err?.code === 'auth/invalid-credential') {
        setErrors(prev => ({
          ...prev,
          email: 'E-mail não cadastrado. Crie uma conta primeiro.'
        }));
      } else {
        Alert.alert('Erro', err?.message || 'Não foi possível entrar. Tente novamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={[TYPOGRAPHY.h1, { marginTop: SPACING.xl }]}>Bem-vindo(a)!</Text>
        <Text style={[TYPOGRAPHY.body, { color: COLORS.textMuted, marginBottom: SPACING.lg }]}>Que bom ter você de volta.</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="seu@email.com"
            placeholderTextColor={COLORS.textMuted}
            value={form.email}
            onChangeText={v => setForm({...form, email: v})}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {errors.email && <Text style={styles.errorMsg}>{errors.email}</Text>}
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor={COLORS.textMuted}
            value={form.senha}
            onChangeText={v => setForm({...form, senha: v})}
            secureTextEntry
          />
          {errors.senha && <Text style={styles.errorMsg}>{errors.senha}</Text>}
        </View>

        <TouchableOpacity style={{ alignSelf: 'flex-end', marginBottom: SPACING.lg }}>
          <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Medium' }}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <GradientButton title="Entrar" onPress={handleLogin} loading={loading} />
        <TouchableOpacity onPress={() => navigation.replace('Cadastro')} style={styles.switchBtn}>
          <Text style={styles.switchText}>Não tem conta? <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-SemiBold' }}>Cadastre-se</Text></Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.surface },
  scroll: { padding: SPACING.md, paddingTop: Platform.OS === 'android' ? 60 : SPACING.xl },
  inputGroup: { marginBottom: SPACING.md },
  label: { fontSize: 14, fontFamily: 'Poppins-Medium', color: COLORS.text, marginBottom: 8 },
  input: { borderWidth: 1, borderColor: COLORS.border, borderRadius: 14, padding: 16, fontSize: 16, fontFamily: 'Poppins-Regular', backgroundColor: '#F8FAFC' },
  errorMsg: { fontSize: 12, color: COLORS.danger, marginLeft: 4, marginTop: 4 },
  switchBtn: { marginTop: SPACING.lg, alignItems: 'center' },
  switchText: { ...TYPOGRAPHY.body, color: COLORS.textMuted }
});