import { Coffee, Cookie, Moon, Sun } from 'lucide-react-native';
import { MotiView } from 'moti';
import { useMemo } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import GlassCard from '../../components/ui/GlassCard';
import GradientButton from '../../components/ui/GradientButton';
import { useApp } from '../../context/AppContext';
import { useVidaFitPlan } from '../../hooks/useVidaFitPlan';
import { COLORS, SPACING, TYPOGRAPHY } from '../../theme';

const REFEICOES = [
  { key: 'cafe', title: 'Café da Manhã', icon: Coffee, color: '#FEF3C7', desc: 'Energia para começar o dia' },
  { key: 'almoco', title: 'Almoço', icon: Sun, color: '#D1FAE5', desc: 'Refeição equilibrada e nutritiva' },
  // ✅ CORREÇÃO: ícone `Snack` não existe no lucide-react-native (causava crash)
  { key: 'lanche', title: 'Lanche da Tarde', icon: Cookie, color: '#E0E7FF', desc: 'Manter metabolismo ativo' },
  { key: 'jantar', title: 'Jantar', icon: Moon, color: '#F3E8FF', desc: 'Leve e digestivo' }
];

export default function AlimentacaoScreen({ navigation }) {
  const { profile, loading } = useApp();

  const profileIncomplete = !profile || !profile?.objetivo || !profile?.nivel;

  const alimentacao = profile?.alimentacao ?? 'vegetariano';
  const plano = useVidaFitPlan(
    profileIncomplete ? null : profile.nivel,
    profileIncomplete ? null : profile.objetivo,
    profileIncomplete ? null : alimentacao
  );

  const chaveDieta = profile?.alimentacao === 'carne' ? 'carne' : 'veg';

  const sugestoes = useMemo(() => {
    const pa = plano?.alimentacao;
    if (!pa) {
      return {
        cafe: alimentacao === 'carne' ? 'Ovos mexidos + pão integral + fruta' : 'Mingau de aveia + banana + chia',
        almoco:
          alimentacao === 'carne'
            ? 'Frango grelhado + arroz integral + salada + legumes'
            : 'Feijão + arroz integral + salada + legumes + abacate',
        lanche: 'Fruta + castanhas ou iogurte natural',
        jantar:
          alimentacao === 'carne' ? 'Peixe assado + legumes' : 'Sopa de lentilha + vegetais'
      };
    }
    return {
      cafe: pa.cafe_manha?.[chaveDieta] || pa.cafe_manha?.veg || 'Refeição equilibrada',
      almoco: pa.almoco?.[chaveDieta] || pa.almoco?.veg || 'Almoço balanceado',
      lanche: Array.isArray(pa.lanches) ? pa.lanches.join(' • ') : 'Fruta + castanhas ou iogurte natural',
      jantar: pa.jantar?.[chaveDieta] || pa.jantar?.veg || 'Jantar leve'
    };
  }, [plano, chaveDieta, alimentacao]);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={COLORS.primary} />
        <Text style={[TYPOGRAPHY.caption, { marginTop: SPACING.sm }]}>Carregando seu plano…</Text>
      </View>
    );
  }

  if (profileIncomplete) {
    return (
      <View style={{ flex: 1, backgroundColor: COLORS.bg }}>
        <View style={{ padding: SPACING.md }}>
          <Text style={TYPOGRAPHY.h2}>Alimentação</Text>
          <Text style={TYPOGRAPHY.caption}>Sugestões naturais e sem ultraprocessados</Text>
        </View>
        {/* ✅ CORREÇÃO: guia quando perfil incompleto */}
        <View style={[styles.centered, { paddingHorizontal: SPACING.lg, flex: 1 }]}>
          <GlassCard style={styles.guideCard}>
            <Text style={[TYPOGRAPHY.h2, { textAlign: 'center', marginBottom: SPACING.sm }]}>Quase lá! 🚀</Text>
            <Text style={[TYPOGRAPHY.body, { textAlign: 'center', color: COLORS.textMuted, marginBottom: SPACING.md }]}>
              Insira suas informações no Perfil para liberar seu plano personalizado de treino e alimentação.
            </Text>
            <GradientButton title="Ir para Perfil" onPress={() => navigation.navigate('Perfil')} />
          </GlassCard>
        </View>
      </View>
    );
  }

  // ✅ CORREÇÃO: plano reativo ao perfil (24 fluxos)
  if (!plano) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={COLORS.primary} />
        <Text style={[TYPOGRAPHY.caption, { marginTop: SPACING.sm }]}>Carregando plano alimentar…</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.bg }}>
      <View style={{ padding: SPACING.md }}>
        <Text style={TYPOGRAPHY.h2}>Alimentação</Text>
        <Text style={TYPOGRAPHY.caption}>Sugestões naturais e sem ultraprocessados</Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: SPACING.md, paddingBottom: SPACING.xl }}>
        {REFEICOES.map((item, i) => {
          const IconComponent = item.icon;
          const texto = sugestoes[item.key] ?? 'Sugestão personalizada em breve.';
          return (
            <MotiView key={item.key} from={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 80 }}>
              <GlassCard style={{ backgroundColor: item.color }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                  <IconComponent size={28} color={COLORS.text} />
                  <View style={{ flex: 1 }}>
                    <Text style={TYPOGRAPHY.h3}>{item.title}</Text>
                    <Text style={TYPOGRAPHY.caption}>{texto}</Text>
                  </View>
                </View>
              </GlassCard>
            </MotiView>
          );
        })}

        <GlassCard style={{ marginTop: SPACING.sm, backgroundColor: '#F0F9FF', borderLeftWidth: 4, borderLeftColor: COLORS.primary }}>
          <Text style={[TYPOGRAPHY.h3, { marginBottom: 6 }]}>💧 Hidratação & Dicas</Text>
          {plano?.alimentacao?.hidratacao ? (
            <Text style={[TYPOGRAPHY.body, { marginBottom: 8 }]}>• {plano.alimentacao.hidratacao}</Text>
          ) : (
            <Text style={[TYPOGRAPHY.body, { marginBottom: 8 }]}>• Beba 2L a 2,5L de água por dia</Text>
          )}
          {Array.isArray(plano?.dicas) && plano.dicas.length > 0 ? (
            plano.dicas.map((d, idx) => (
              <Text key={idx} style={TYPOGRAPHY.body}>
                • {d}
              </Text>
            ))
          ) : (
            <>
              <Text style={TYPOGRAPHY.body}>• Evite açúcar refinado e ultraprocessados</Text>
              <Text style={TYPOGRAPHY.body}>• Durma 7-8h para recuperação muscular</Text>
            </>
          )}
        </GlassCard>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.bg },
  guideCard: { width: '100%', maxWidth: 400, alignItems: 'stretch' }
});