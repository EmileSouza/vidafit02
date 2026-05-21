export const nutritionService = {
  getDailyPlan: async (flowId, alimentacao) => {
    // Em produção, buscar de collection 'nutrition_plans' no Firestore
    // Aqui retornamos estrutura base baseada no fluxo
    return {
      flowId,
      cafe: alimentacao === 'carne' 
        ? 'Ovos mexidos + pão integral + fruta' 
        : 'Mingau de aveia + banana + chia',
      almoco: alimentacao === 'carne'
        ? 'Frango grelhado + arroz integral + salada + legumes'
        : 'Feijão + arroz integral + salada + legumes + abacate',
      jantar: alimentacao === 'carne'
        ? 'Peixe assado + legumes'
        : 'Sopa de lentilha + vegetais',
      lanches: [
        'Fruta + castanhas',
        'Iogurte natural + aveia',
        'Palitinhos vegetais com homus'
      ],
      dicas: [
        'Beba 2L de água por dia',
        'Evite ultraprocessados',
        'Durma 7-8h para recuperação',
        'Mastigue devagar'
      ],
      hidratacao: '2-2.5L água/dia'
    };
  }
};