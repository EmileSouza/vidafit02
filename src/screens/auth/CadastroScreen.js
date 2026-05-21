import { ArrowLeft, Eye, EyeOff, Lock, Mail, User } from 'lucide-react-native';
import { MotiView } from 'moti';
import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import GradientButton from '../../components/ui/GradientButton';
import { authService } from '../../services/auth';
import { COLORS, SHADOW, SPACING, TYPOGRAPHY } from '../../theme';

const AuthInput = ({ icon: Icon, placeholder, value, onChangeText, secureTextEntry, error, keyboardType, ...props }) => {
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(!secureTextEntry);

  return (
    <View style={{ marginBottom: error ? 4 : 8 }}>
      <MotiView
        animate={{
          borderColor: error ? COLORS.danger : focused ? COLORS.primary : COLORS.border,
          shadowColor: focused ? COLORS.primary : 'transparent',
          shadowOpacity: focused ? 0.25 : 0,
          shadowRadius: focused ? 10 : 0,
          elevation: focused ? 4 : 1
        }}
        style={[styles.inputWrap, SHADOW.soft]}
      >
        <Icon size={20} color={focused ? COLORS.primary : COLORS.textMuted} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={COLORS.textMuted}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          secureTextEntry={!visible}
          keyboardType={keyboardType}
          {...props}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={() => setVisible(!visible)} style={styles.eyeBtn}>
            {visible ? <EyeOff size={20} color={COLORS.textMuted} /> : <Eye size={20} color={COLORS.textMuted} />}
          </TouchableOpacity>
        )}
      </MotiView>
      {error && <Text style={styles.errorMsg}>{error}</Text>}
    </View>
  );
};

export default function CadastroScreen({ navigation }) {
  const [form, setForm] = useState({ nome: '', email: '', senha: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.nome.trim()) e.nome = 'Informe seu nome';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Formato de e-mail inválido';
    if (form.senha.length < 6) e.senha = 'Mínimo 6 caracteres (RN002)';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSignup = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      await authService.signUp(form.email, form.senha, form.nome);
      Alert.alert('✅ Conta criada', 'Acesse com seu e-mail e senha.');
      navigation.replace('Login');
    } catch (err) {
      Alert.alert('Erro', err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}><ArrowLeft size={24} color={COLORS.text} /></TouchableOpacity>
        <Text style={TYPOGRAPHY.h1}>Crie sua conta</Text>
        <Text style={[TYPOGRAPHY.body, { color: COLORS.textMuted, marginBottom: SPACING.lg }]}>Vamos começar sua transformação!</Text>

        <AuthInput icon={User} placeholder="Nome completo" value={form.nome} onChangeText={v => setForm({...form, nome: v})} error={errors.nome} />
        <AuthInput icon={Mail} placeholder="E-mail" value={form.email} onChangeText={v => setForm({...form, email: v})} error={errors.email} keyboardType="email-address" />
        <AuthInput icon={Lock} placeholder="Senha" value={form.senha} onChangeText={v => setForm({...form, senha: v})} error={errors.senha} secureTextEntry />

        <GradientButton title="Criar conta" onPress={handleSignup} loading={loading} style={{ marginTop: SPACING.sm }} />
        <TouchableOpacity onPress={() => navigation.replace('Login')} style={styles.switchBtn}>
          <Text style={styles.switchText}>Já tem conta? <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-SemiBold' }}>Entrar</Text></Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.surface },
  scroll: { padding: SPACING.md, paddingTop: Platform.OS === 'android' ? 60 : SPACING.xl },
  backBtn: { marginBottom: SPACING.lg },
  inputWrap: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8FAFC', borderWidth: 1.5, borderRadius: 14, paddingHorizontal: 14, height: 54 },
  icon: { marginRight: 10 },
  input: { flex: 1, height: '100%', ...TYPOGRAPHY.body, color: COLORS.text },
  eyeBtn: { padding: 6 },
  errorMsg: { fontSize: 12, color: COLORS.danger, marginLeft: 4, marginTop: 2 },
  switchBtn: { marginTop: SPACING.lg, alignItems: 'center' },
  switchText: { ...TYPOGRAPHY.body, color: COLORS.textMuted }
});