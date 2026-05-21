export const FLUXOS_VIDA_FIT = {
  // 🔹 FLUXO #1 — Iniciante + Emagrecer + Carne
  "01": {
    flow_id: "01",
    nivel: "iniciante",
    objetivo: "emagrecer",
    alimentacao: "carne",
    duracao_treino: "40min",
    semana: {
      segunda: {
        tipo: "cardio_leve_fullbody",
        aquecimento: ["caminhada parada 2min", "rotação ombros 30s", "polichinelo adaptado 1min"],
        exercicios: [
          { nome: "Agachamento livre", series: 3, reps: 12, descanso: "45s", musculos: "pernas, glúteos" },
          { nome: "Flexão na parede", series: 3, reps: 10, descanso: "30s", musculos: "peito, braços" },
          { nome: "Prancha joelhos", series: 3, tempo: "20s", descanso: "30s", musculos: "core" },
          { nome: "Step touch lateral", series: 3, tempo: "1min", descanso: "30s", musculos: "cardio" },
          { nome: "Elevação panturrilha", series: 3, reps: 15, descanso: "30s", musculos: "panturrilhas" }
        ],
        alongamento: ["quadríceps 30s/perna", "posterior coxa 30s", "peitoral 30s"]
      },
      terca: {
        tipo: "cardio_core",
        exercicios: [
          { nome: "Marcha estacionária", series: 3, tempo: "2min", descanso: "30s" },
          { nome: "Mountain climber lento", series: 3, tempo: "20s", descanso: "40s" },
          { nome: "Abdominal supra", series: 3, reps: 12, descanso: "30s" },
          { nome: "Ponte glúteos", series: 3, reps: 12, descanso: "30s" }
        ]
      },
      quarta: { tipo: "descanso_ativo", atividades: ["alongamentos leves 10min", "hidratação", "sono 7-8h"] },
      quinta: { tipo: "fullbody_resistencia", exercicios: "similar segunda + progressão leve" },
      sexta: { tipo: "funcional_equilibrio", exercicios: ["afundo reverso", "prancha toque ombro", "equilíbrio unipodal"] },
      sabado: { tipo: "cardio_mobilidade", exercicios: ["circuito leve 3x", "step touch", "agachamento isométrico"] },
      domingo: { tipo: "descanso", sugestao: "caminhada opcional ou mobilidade leve" }
    },
    alimentacao: {
      cafe_manha: {
        carne: "Ovos mexidos + pão integral + fruta",
        veg: "Mingau aveia + banana + canela + chia"
      },
      almoco: {
        carne: "Frango grelhado + arroz integral + salada + legumes",
        veg: "Feijão + arroz integral + salada + legumes + abacate"
      },
      jantar: {
        carne: "Omelete com vegetais + salada",
        veg: "Sopa de legumes com lentilha"
      },
      lanches: ["fruta + queijo", "mix castanhas", "iogurte natural + aveia"],
      hidratacao: "2-2.5L água/dia"
    },
    dicas: ["déficit calórico leve", "proteína em todas refeições", "evitar açúcar refinado", "sono reparador"]
  },

  // 🔹 FLUXO #2 — Iniciante + Ganhar Massa + Carne
  "02": {
    flow_id: "02",
    nivel: "iniciante",
    objetivo: "ganhar_massa",
    alimentacao: "carne",
    duracao_treino: "40min",
    semana: {
      segunda: {
        tipo: "forca_adaptacao",
        aquecimento: ["mobilidade articular 5min", "agachamento sem peso 2min"],
        exercicios: [
          { nome: "Agachamento livre", series: 4, reps: 10, descanso: "60s", musculos: "pernas, glúteos" },
          { nome: "Flexão joelhos no chão", series: 3, reps: 8, descanso: "45s", musculos: "peito, tríceps" },
          { nome: "Remada caseira (garrafa água)", series: 3, reps: 12, descanso: "45s", musculos: "costas, bíceps" },
          { nome: "Elevação lateral braços", series: 3, reps: 12, descanso: "30s", musculos: "ombros" },
          { nome: "Prancha abdominal", series: 3, tempo: "25s", descanso: "30s", musculos: "core" }
        ],
        alongamento: ["quadríceps 30s", "peitoral 30s", "costas 30s"]
      },
      terca: {
        tipo: "inferiores_foco",
        exercicios: [
          { nome: "Afundo estático", series: 3, reps: "10/perna", descanso: "45s" },
          { nome: "Ponte glúteos unilateral", series: 3, reps: "10/lado", descanso: "30s" },
          { nome: "Agachamento sumô", series: 3, reps: 12, descanso: "45s" },
          { nome: "Elevação panturrilha", series: 4, reps: 15, descanso: "30s" }
        ]
      },
      quarta: { tipo: "descanso_ativo", atividades: ["alongamento focado pernas", "hidratação", "sono"] },
      quinta: { tipo: "superiores_foco", exercicios: ["flexão parede", "mergulho cadeira", "prancha toque ombro", "super-homem"] },
      sexta: { tipo: "fullbody_forca", exercicios: ["circuito leve: agachamento + flexão + prancha + afundo"] },
      sabado: { tipo: "resistencia_muscular", exercicios: ["repetições controladas", "tempo sob tensão", "descanso adequado"] },
      domingo: { tipo: "descanso", sugestao: "mobilidade leve opcional" }
    },
    alimentacao: {
      cafe_manha: {
        carne: "Ovos + pão integral + banana + pasta amendoim",
        veg: "Vitamina aveia + banana + leite + pasta amendoim + chia"
      },
      almoco: {
        carne: "Carne magra/frango + arroz + feijão + vegetais + azeite",
        veg: "Grão-de-bico/tofu + arroz + feijão + vegetais + abacate"
      },
      jantar: {
        carne: "Peixe + batata-doce + brócolis",
        veg: "Lentilha + quinoa + legumes assados"
      },
      lanches: ["banana + aveia", "iogurte + granola", "ovo cozido + fruta", "pão integral + queijo"],
      hidratacao: "2.5-3L água/dia"
    },
    dicas: ["superávit calórico leve (+200-300kcal)", "proteína 1.6-2g/kg", "carboidrato pós-treino", "descanso muscular 48h"]
  },

  // 🔹 FLUXO #3 — Iniciante + Condicionamento + Carne (SEU PERFIL)
  "03": {
    flow_id: "03",
    nivel: "iniciante",
    objetivo: "condicionamento",
    alimentacao: "carne",
    duracao_treino: "40min",
    semana: {
      segunda: {
        tipo: "fullbody_adaptacao",
        exercicios: [
          { nome: "Agachamento livre", series: 3, reps: 12, descanso: "45s" },
          { nome: "Flexão parede", series: 3, reps: 10, descanso: "30s" },
          { nome: "Prancha joelhos", series: 3, tempo: "20s", descanso: "30s" },
          { nome: "Afundo estático", series: 3, reps: "10/perna", descanso: "45s" },
          { nome: "Step touch", series: 3, tempo: "1min", descanso: "30s" }
        ]
      },
      terca: {
        tipo: "cardio_core",
        exercicios: [
          { nome: "Marcha estacionária", series: 3, tempo: "2min" },
          { nome: "Mountain climber lento", series: 3, tempo: "20s" },
          { nome: "Abdominal supra", series: 3, reps: 12 },
          { nome: "Ponte glúteos", series: 3, reps: 12 },
          { nome: "Bicicleta ar lenta", series: 3, tempo: "20s" }
        ]
      },
      quarta: { tipo: "descanso_ativo", atividades: ["alongamentos 10min", "hidratação", "sono"] },
      quinta: { tipo: "fullbody_resistencia", exercicios: ["agachamento sumô", "flexão joelhos", "prancha lateral adaptada", "salto leve"] },
      sexta: { tipo: "funcional_equilibrio", exercicios: ["agachamento toque pé", "prancha toque ombro", "afundo reverso", "equilíbrio unipodal"] },
      sabado: { tipo: "cardio_mobilidade", exercicios: ["circuito leve 3x", "step touch", "agachamento isométrico", "corrida estacionária"] },
      domingo: { tipo: "descanso", sugestao: "caminhada ou mobilidade leve" }
    },
    alimentacao: {
      cafe_manha: {
        carne: "Ovos + pão integral + fruta",
        veg: "Mingau aveia + banana + canela"
      },
      almoco: {
        carne: "Proteína magra + carboidrato complexo + vegetais",
        veg: "Proteína vegetal + carboidrato complexo + vegetais"
      },
      jantar: {
        carne: "Refeição leve com proteína + vegetais",
        veg: "Sopa/creme vegetal com proteína vegetal"
      },
      lanches: ["fruta + proteína", "mix castanhas", "iogurte natural"],
      hidratacao: "2-2.5L água/dia"
    },
    dicas: ["consistência > intensidade", "progressão gradual", "hidratação pré/durante/pós treino", "sono 7-8h"]
  },

  // 🔹 FLUXO #4 — Iniciante + Saúde e Bem-estar + Carne
  "04": {
    flow_id: "04",
    nivel: "iniciante",
    objetivo: "saude_bem_estar",
    alimentacao: "carne",
    duracao_treino: "40min",
    semana: {
      segunda: {
        tipo: "mobilidade_suave",
        exercicios: [
          { nome: "Rotação articular completa", series: 2, tempo: "1min/articulação" },
          { nome: "Agachamento assistido (cadeira)", series: 3, reps: 10, descanso: "45s" },
          { nome: "Alongamento dinâmico braços", series: 2, tempo: "1min" },
          { nome: "Caminhada estacionária", series: 3, tempo: "2min", descanso: "30s" },
          { nome: "Respiração diafragmática", series: 3, tempo: "1min" }
        ]
      },
      terca: {
        tipo: "alongamento_foco",
        exercicios: [
          { nome: "Sequência yoga iniciante", series: 1, tempo: "15min" },
          { nome: "Alongamento pernas sentado", series: 2, tempo: "30s/cada" },
          { nome: "Torção spinal suave", series: 2, tempo: "30s/lado" }
        ]
      },
      quarta: { tipo: "descanso_ativo", atividades: ["meditação 10min", "alongamentos leves", "hidratação"] },
      quinta: { tipo: "equilibrio_postura", exercicios: ["prancha adaptada", "equilíbrio unipodal", "rotação tronco", "respiração"] },
      sexta: { tipo: "mobilidade_funcional", exercicios: ["agachamento profundo assistido", "gato-vaca", "ponte glúteos suave"] },
      sabado: { tipo: "caminhada_mobilidade", exercicios: ["caminhada leve 20min", "alongamentos pós-caminhada"] },
      domingo: { tipo: "descanso", sugestao: "atividade prazerosa leve (jardinar, dançar)" }
    },
    alimentacao: {
      cafe_manha: {
        carne: "Iogurte natural + granola caseira + fruta",
        veg: "Vitamina verde (espinafre + banana + leite vegetal)"
      },
      almoco: {
        carne: "Refeição colorida: proteína + grãos + vegetais variados",
        veg: "Bowl vegetal: grãos + legumes + folhas + gordura boa"
      },
      jantar: {
        carne: "Sopa leve com proteína + vegetais",
        veg: "Creme de abóbora com grãos + temperos naturais"
      },
      lanches: ["fruta fresca", "castanhas", "chá + biscoito integral caseiro"],
      hidratacao: "2L água/dia + chás naturais"
    },
    dicas: ["escute seu corpo", "pratique gratidão", "sono regular", "exposição solar moderada", "conexão mente-corpo"]
  },

  // 🔹 FLUXOS #05 a #24 continuam abaixo...
  // (Deixei espaço para você adicionar os outros 20 fluxos seguindo o mesmo padrão)
  
  // DICA: Copie a estrutura do fluxo #3 e adapte:
  // - Mude o ID ("05", "06", etc.)
  // - Ajuste nivel, objetivo, alimentacao
  // - Modifique exercícios conforme a intensidade
  
  // Exemplo rápido para o #05 (Iniciante + Emagrecer + Vegetariano):
  "05": {
    flow_id: "05",
    nivel: "iniciante",
    objetivo: "emagrecer",
    alimentacao: "vegetariano",
    duracao_treino: "40min",
    semana: {
      segunda: { tipo: "cardio_leve_fullbody", exercicios: "mesma estrutura do #01" },
      terca: { tipo: "cardio_core", exercicios: "mesma estrutura do #01" },
      quarta: { tipo: "descanso_ativo", atividades: ["alongamentos", "hidratação", "sono"] },
      quinta: { tipo: "fullbody_resistencia", exercicios: "progressão leve" },
      sexta: { tipo: "funcional_equilibrio", exercicios: ["afundo reverso", "prancha toque ombro", "equilíbrio"] },
      sabado: { tipo: "cardio_mobilidade", exercicios: ["circuito leve", "mobilidade"] },
      domingo: { tipo: "descanso", sugestao: "caminhada ou mobilidade" }
    },
    alimentacao: {
      cafe_manha: { veg: "Mingau aveia + banana + canela + chia | Vitamina frutas + aveia + leite vegetal" },
      almoco: { veg: "Feijão/lentilha/grão-de-bico + arroz integral + salada colorida + legumes + azeite/abacate" },
      jantar: { veg: "Sopa de legumes com proteína vegetal | Wrap de alface com homus e vegetais" },
      lanches: ["fruta + pasta amendoim", "mix castanhas", "iogurte vegetal + aveia", "palitinhos vegetais com homus"],
      hidratacao: "2-2.5L água/dia"
    },
    dicas: ["proteína vegetal em todas refeições", "fibras para saciedade", "evitar carboidratos refinados", "combinações proteicas (arroz+feijão)"]
  },
    //🔹 Fluxo #6 — Iniciante + Ganhar Massa + Vegetariano 

    "06": { 

  "flow_id": "06", 

  "nivel": "iniciante", 

  "objetivo": "ganhar_massa", 

  "alimentacao": "vegetariano", 

  "duracao_treino": "40min", 

  "semana": { 

    "segunda": { 

      "tipo": "forca_adaptacao", 

      "exercicios": [ 

        {"nome": "Agachamento livre", "series": 4, "reps": 10, "descanso": "60s"}, 

        {"nome": "Flexão joelhos", "series": 3, "reps": 8, "descanso": "45s"}, 

        {"nome": "Remada caseira (mochila com livros)", "series": 3, "reps": 12, "descanso": "45s"}, 

        {"nome": "Elevação lateral braços", "series": 3, "reps": 12, "descanso": "30s"}, 

        {"nome": "Prancha abdominal", "series": 3, "tempo": "25s", "descanso": "30s"} 

      ] 

    }, 

    "terca": { 

      "tipo": "inferiores_foco", 

      "exercicios": [ 

        {"nome": "Afundo estático", "series": 3, "reps": "10/perna"}, 

        {"nome": "Ponte glúteos unilateral", "series": 3, "reps": "10/lado"}, 

        {"nome": "Agachamento sumô", "series": 3, "reps": 12}, 

        {"nome": "Elevação panturrilha", "series": 4, "reps": 15} 

      ] 

    }, 

    "quarta": {"tipo": "descanso_ativo", "atividades": ["alongamento pernas", "hidratação", "sono"]}, 

    "quinta": {"tipo": "superiores_foco", "exercicios": ["flexão parede", "mergulho cadeira", "prancha toque ombro", "super-homem"]}, 

    "sexta": {"tipo": "fullbody_forca", "exercicios": ["circuito: agachamento + flexão + prancha + afundo"]}, 

    "sabado": {"tipo": "resistencia_muscular", "exercicios": ["repetições controladas", "tempo sob tensão"]}, 

    "domingo": {"tipo": "descanso", "sugestao": "mobilidade leve"} 

  }, 

  "alimentacao": { 

    "cafe_manha": { 

      "veg": "Vitamina aveia + banana + leite vegetal + pasta amendoim + chia | Panqueca aveia + banana + proteína vegetal" 

    }, 

    "almoco": { 

      "veg": "Tofu/tempeh/grão-de-bico + arroz + feijão + vegetais + abacate/azeite" 

    }, 

    "jantar": { 

      "veg": "Lentilha + quinoa + legumes assados | Abóbora recheada com grãos e vegetais" 

    }, 

    "lanches": ["banana + pasta amendoim", "mix castanhas", "iogurte vegetal + granola", "húmus + vegetais crus"], 

    "hidratacao": "2.5-3L água/dia" 

  }, 

  "dicas": ["proteína vegetal combinada", "superávit calórico leve", "carboidrato pós-treino", "suplementar B12 se necessário"] 

},

//🔹 Fluxo #7 — Iniciante + Condicionamento Físico + Vegetariano 

   "07": { 

  "flow_id": "07", 

  "nivel": "iniciante", 

  "objetivo": "condicionamento", 

  "alimentacao": "vegetariano", 

  "duracao_treino": "40min", 

  "semana": { 

    "segunda": {"tipo": "fullbody_adaptacao", "exercicios": "mesma estrutura Fluxo #3"}, 

    "terca": {"tipo": "cardio_core", "exercicios": "mesma estrutura Fluxo #3"}, 

    "quarta": {"tipo": "descanso_ativo", "atividades": ["alongamentos", "hidratação", "sono"]}, 

    "quinta": {"tipo": "fullbody_resistencia", "exercicios": "progressão leve"}, 

    "sexta": {"tipo": "funcional_equilibrio", "exercicios": ["afundo reverso", "prancha toque ombro", "equilíbrio"]}, 

    "sabado": {"tipo": "cardio_mobilidade", "exercicios": ["circuito leve", "mobilidade"]}, 

    "domingo": {"tipo": "descanso", "sugestao": "caminhada ou mobilidade"} 

  }, 

  "alimentacao": { 

    "cafe_manha": {"veg": "Opções vegetais energéticas: mingau, vitamina, panqueca aveia"}, 

    "almoco": {"veg": "Proteína vegetal + carboidrato complexo + vegetais coloridos"}, 

    "jantar": {"veg": "Refeição leve com proteína vegetal + vegetais"}, 

    "lanches": ["fruta + castanhas", "iogurte vegetal", "palitinhos com homus"], 

    "hidratacao": "2-2.5L água/dia" 

  }, 

  "dicas": ["consistência", "progressão gradual", "hidratação", "combinações proteicas vegetais"] 

},
//🔹 Fluxo #8 — Iniciante + Saúde e Bem-estar + Vegetariano 

   "08": { 

  "flow_id": "08", 

  "nivel": "iniciante", 

  "objetivo": "saude_bem_estar", 

  "alimentacao": "vegetariano", 

  "duracao_treino": "40min", 

  "semana": { 

    "segunda": {"tipo": "mobilidade_suave", "exercicios": "estrutura Fluxo #4"}, 

    "terca": {"tipo": "alongamento_foco", "exercicios": "yoga iniciante + alongamentos"}, 

    "quarta": {"tipo": "descanso_ativo", "atividades": ["meditação", "alongamentos", "hidratação"]}, 

    "quinta": {"tipo": "equilibrio_postura", "exercicios": ["prancha adaptada", "equilíbrio", "respiração"]}, 

    "sexta": {"tipo": "mobilidade_funcional", "exercicios": ["gato-vaca", "ponte suave", "agachamento assistido"]}, 

    "sabado": {"tipo": "caminhada_mobilidade", "exercicios": ["caminhada leve + alongamentos"]}, 

    "domingo": {"tipo": "descanso", "sugestao": "atividade prazerosa leve"} 

  }, 

  "alimentacao": { 

    "cafe_manha": {"veg": "Vitamina verde | Mingau aveia + frutas"}, 

    "almoco": {"veg": "Bowl vegetal colorido: grãos + legumes + folhas + gordura boa"}, 

    "jantar": {"veg": "Creme/sopa vegetal com grãos + temperos naturais"}, 

    "lanches": ["fruta fresca", "castanhas", "chá + snack integral caseiro"], 

    "hidratacao": "2L água/dia + chás naturais" 

  }, 

  "dicas": ["alimentação consciente", "conexão mente-corpo", "sono regular", "gratidão diária"] 

},
//🟡 FLUXOS INTERMEDIÁRIO (9-16) 

//⚡ Estrutura similar, com intensidade moderada, circuitos e progressão 

//🔹 Fluxo #9 — Intermediário + Emagrecer + Vegetariano 
 
   "09": { 

  "flow_id": "09", 

  "nivel": "intermediario", 

  "objetivo": "emagrecer", 

  "alimentacao": "vegetariano", 

  "duracao_treino": "40min", 

  "semana": { 

    "segunda": { 

      "tipo": "hiit_moderado_veg", 

      "exercicios": [ 

        {"nome": "Agachamento jump adaptado", "series": 4, "reps": 15, "descanso": "30s"}, 

        {"nome": "Burpee sem salto", "series": 3, "reps": 10, "descanso": "40s"}, 

        {"nome": "Mountain climber", "series": 4, "tempo": "30s", "descanso": "30s"}, 

        {"nome": "Prancha toque ombro", "series": 3, "reps": "12/lado", "descanso": "30s"}, 

        {"nome": "Corrida estacionária", "series": 3, "tempo": "1min", "descanso": "30s"} 

      ] 

    }, 

    "terca": { 

      "tipo": "circuito_cardio", 

      "exercicios": [ 

        {"nome": "Step touch rápido", "series": 4, "tempo": "45s", "descanso": "20s"}, 

        {"nome": "Agachamento sumô + elevação braços", "series": 4, "reps": 15, "descanso": "30s"}, 

        {"nome": "Flexão joelhos ritmo", "series": 3, "reps": 12, "descanso": "30s"}, 

        {"nome": "Abdominal bicicleta", "series": 3, "tempo": "30s", "descanso": "30s"} 

      ] 

    }, 

    "quarta": {"tipo": "descanso_ativo", "atividades": ["alongamento dinâmico", "hidratação", "sono"]}, 

    "quinta": {"tipo": "forca_resistencia", "exercicios": ["afundo reverso com salto leve", "prancha lateral", "ponte glúteos unilateral", "super-homem"]}, 

    "sexta": {"tipo": "funcional_hiit", "exercicios": ["circuito 4x: agachamento + flexão + prancha + corrida estacionária"]}, 

    "sabado": {"tipo": "cardio_mobilidade", "exercicios": ["HIIT leve 20s on/40s off", "mobilidade pós"]}, 

    "domingo": {"tipo": "descanso", "sugestao": "caminhada leve ou yoga suave"} 

  }, 

  "alimentacao": { 

    "cafe_manha": {"veg": "Proteína vegetal + fibra: mingau aveia + proteína em pó vegetal + frutas"}, 

    "almoco": {"veg": "Proteína vegetal concentrada + vegetais fibrosos + carboidrato moderado"}, 

    "jantar": {"veg": "Refeição leve: sopa proteica vegetal + salada"}, 

    "lanches": ["fruta + proteína vegetal", "castanhas controladas", "iogurte vegetal sem açúcar"], 

    "hidratacao": "2.5L água/dia" 

  }, 

  "dicas": ["déficit calórico moderado", "proteína em todas refeições", "HIIT 2-3x/semana", "recuperação ativa"] 

},
//🔹 Fluxo #10 — Intermediário + Ganhar Massa + Vegetariano 

"10": { 

  "flow_id": "10", 

  "nivel": "intermediario", 

  "objetivo": "ganhar_massa", 

  "alimentacao": "vegetariano", 

  "duracao_treino": "40min", 

  "semana": { 

    "segunda": { 

      "tipo": "hipertrofia_inferiores", 

      "exercicios": [ 

        {"nome": "Agachamento búlgaro (cadeira)", "series": 4, "reps": "10/perna", "descanso": "60s"}, 

        {"nome": "Ponte glúteos unilateral", "series": 4, "reps": "12/lado", "descanso": "45s"}, 

        {"nome": "Afundo reverso", "series": 4, "reps": "12/perna", "descanso": "45s"}, 

        {"nome": "Elevação panturrilha unilateral", "series": 4, "reps": 15, "descanso": "30s"}, 

        {"nome": "Prancha com elevação perna", "series": 3, "tempo": "30s", "descanso": "30s"} 

      ] 

    }, 

    "terca": { 

      "tipo": "hipertrofia_superiores", 

      "exercicios": [ 

        {"nome": "Flexão declinada (pés elevados)", "series": 4, "reps": 10, "descanso": "45s"}, 

        {"nome": "Remada caseira carga", "series": 4, "reps": 12, "descanso": "45s"}, 

        {"nome": "Mergulho cadeira", "series": 3, "reps": 12, "descanso": "40s"}, 

        {"nome": "Elevação lateral com carga", "series": 3, "reps": 15, "descanso": "30s"}, 

        {"nome": "Prancha toque ombro", "series": 3, "reps": "15/lado", "descanso": "30s"} 

      ] 

    }, 

    "quarta": {"tipo": "descanso_ativo", "atividades": ["alongamento focado", "hidratação", "sono"]}, 

    "quinta": {"tipo": "fullbody_forca", "exercicios": ["circuito força: agachamento + flexão + remada + prancha"]}, 

    "sexta": {"tipo": "resistencia_muscular", "exercicios": ["tempo sob tensão", "repetições controladas", "descanso curto"]}, 

    "sabado": {"tipo": "volume_muscular", "exercicios": ["séries descendentes", "bi-sets adaptados"]}, 

    "domingo": {"tipo": "descanso", "sugestao": "mobilidade leve"} 

  }, 

  "alimentacao": { 

    "cafe_manha": {"veg": "Super vitamina: aveia + banana + leite vegetal + pasta amendoim + proteína vegetal"}, 

    "almoco": {"veg": "Proteína vegetal abundante + carboidrato complexo + vegetais + gordura boa"}, 

    "jantar": {"veg": "Refeição reforçada: grãos + proteína vegetal + vegetais + azeite"}, 

    "lanches": ["banana + pasta amendoim", "mix castanhas", "iogurte vegetal + granola", "pão integral + homus"], 

    "hidratacao": "3L água/dia" 

  }, 

  "dicas": ["superávit calórico (+300kcal)", "proteína 1.8-2.2g/kg", "carboidrato pós-treino", "descanso 48h por grupo muscular"] 

},

//🔹 Fluxo #11 — Intermediário + Condicionamento Físico + Vegetariano 

"11": { 

  "flow_id": "11", 

  "nivel": "intermediario", 

  "objetivo": "condicionamento", 

  "alimentacao": "vegetariano", 

  "duracao_treino": "40min", 

  "semana": { 

    "segunda": {"tipo": "cardio_funcional", "exercicios": ["circuito moderado: agachamento jump adaptado + flexão + prancha + corrida estacionária"]}, 

    "terca": {"tipo": "resistencia_cardio", "exercicios": ["step touch rápido", "mountain climber", "burpee sem salto", "abdominal bicicleta"]}, 

    "quarta": {"tipo": "descanso_ativo", "atividades": ["alongamento dinâmico", "hidratação"]}, 

    "quinta": {"tipo": "funcional_equilibrio", "exercicios": ["afundo com rotação", "prancha lateral dinâmica", "equilíbrio unipodal com movimento"]}, 

    "sexta": {"tipo": "hiit_moderado", "exercicios": ["20s on/40s off: polichinelo adaptado, agachamento, flexão, corrida estacionária"]}, 

    "sabado": {"tipo": "cardio_mobilidade", "exercicios": ["circuito leve + mobilidade articular"]}, 

    "domingo": {"tipo": "descanso", "sugestao": "caminhada ou yoga"} 

  }, 

  "alimentacao": { 

    "cafe_manha": {"veg": "Energia sustentada: mingau aveia + frutas + chia"}, 

    "almoco": {"veg": "Equilíbrio: proteína vegetal + carboidrato + vegetais"}, 

    "jantar": {"veg": "Leve e nutritivo: sopa vegetal com grãos"}, 

    "lanches": ["fruta + castanhas", "iogurte vegetal", "palitinhos com homus"], 

    "hidratacao": "2.5L água/dia" 

  }, 

  "dicas": ["progressão de intensidade", "hidratação durante treino", "recuperação ativa", "sono de qualidade"] 

},

//🔹 Fluxo #12 — Intermediário + Saúde e Bem-estar + Vegetariano 

"12": { 

  "flow_id": "12", 

  "nivel": "intermediario", 

  "objetivo": "saude_bem_estar", 

  "alimentacao": "vegetariano", 

  "duracao_treino": "40min", 

  "semana": { 

    "segunda": {"tipo": "yoga_flow_iniciante", "exercicios": ["sequência vinyasa adaptada 20min + alongamentos"]}, 

    "terca": {"tipo": "mobilidade_funcional", "exercicios": ["rotações articulares", "agachamento profundo assistido", "gato-vaca", "ponte"]}, 

    "quarta": {"tipo": "descanso_ativo", "atividades": ["meditação 15min", "alongamentos suaves", "respiração"]}, 

    "quinta": {"tipo": "equilibrio_forca_suave", "exercicios": ["prancha variações", "equilíbrio dinâmico", "agachamento isométrico"]}, 

    "sexta": {"tipo": "caminhada_mobilidade", "exercicios": ["caminhada consciente 25min + alongamentos pós"]}, 

    "sabado": {"tipo": "pilates_chao", "exercicios": ["exercícios pilates solo: hundred, roll up, leg circles adaptados"]}, 

    "domingo": {"tipo": "descanso", "sugestao": "atividade prazerosa ao ar livre"} 

  }, 

  "alimentacao": { 

    "cafe_manha": {"veg": "Alimentação consciente: mingau ou vitamina com ingredientes integrais"}, 

    "almoco": {"veg": "Bowl equilibrado: grãos + legumes + folhas + gordura boa + temperos naturais"}, 

    "jantar": {"veg": "Refeição leve e digestiva: creme vegetal + grãos"}, 

    "lanches": ["fruta da estação", "castanhas", "chá + snack caseiro"], 

    "hidratacao": "2L água/dia + chás calmantes" 

  }, 

  "dicas": ["mindful eating", "conexão corpo-mente", "sono regular", "gratidão diária", "exposição solar moderada"] 

},

//🔹 Fluxo #13 — Intermediário + Emagrecer + Come Carne 

"13": { 

  "flow_id": "13", 

  "nivel": "intermediario", 

  "objetivo": "emagrecer", 

  "alimentacao": "carne", 

  "duracao_treino": "40min", 

  "semana": { 

    "segunda": { 

      "tipo": "hiit_moderado", 

      "exercicios": [ 

        {"nome": "Agachamento jump adaptado", "series": 4, "reps": 15, "descanso": "30s"}, 

        {"nome": "Burpee sem salto", "series": 3, "reps": 10, "descanso": "40s"}, 

        {"nome": "Mountain climber", "series": 4, "tempo": "30s", "descanso": "30s"}, 

        {"nome": "Flexão ritmo", "series": 3, "reps": 12, "descanso": "30s"}, 

        {"nome": "Corrida estacionária", "series": 3, "tempo": "1min", "descanso": "30s"} 

      ] 

    }, 

    "terca": { 

      "tipo": "circuito_cardio_forca", 

      "exercicios": [ 

        {"nome": "Step touch rápido", "series": 4, "tempo": "45s"}, 

        {"nome": "Afundo com salto leve", "series": 4, "reps": "12/perna"}, 

        {"nome": "Prancha toque ombro", "series": 3, "reps": "15/lado"}, 

        {"nome": "Abdominal bicicleta", "series": 3, "tempo": "30s"} 

      ] 

    }, 

    "quarta": {"tipo": "descanso_ativo", "atividades": ["alongamento dinâmico", "hidratação"]}, 

    "quinta": {"tipo": "forca_metabolica", "exercicios": ["agachamento sumô + elevação", "flexão declinada", "remada caseira", "ponte glúteos"]}, 

    "sexta": {"tipo": "hiit_funcional", "exercicios": ["circuito 4x: agachamento jump + flexão + prancha + corrida"]}, 

    "sabado": {"tipo": "cardio_mobilidade", "exercicios": ["HIIT 20s/40s + mobilidade"]}, 

    "domingo": {"tipo": "descanso", "sugestao": "caminhada leve"} 

  }, 

  "alimentacao": { 

    "cafe_manha": {"carne": "Ovos + pão integral + fruta | Iogurte + granola caseira"}, 

    "almoco": {"carne": "Proteína magra + carboidrato moderado + vegetais fibrosos + azeite"}, 

    "jantar": {"carne": "Refeição leve: peixe/frango + vegetais + salada"}, 

    "lanches": ["fruta + queijo branco", "mix castanhas", "iogurte natural", "ovo cozido"], 

    "hidratacao": "2.5L água/dia" 

  }, 

  "dicas": ["déficit calórico moderado", "proteína magra em todas refeições", "HIIT 2-3x/semana", "evitar açúcar refinado"] 

},

//🔹 Fluxo #14 — Intermediário + Ganhar Massa + Come Carne 

"14": { 

  "flow_id": "14", 

  "nivel": "intermediario", 

  "objetivo": "ganhar_massa", 

  "alimentacao": "carne", 

  "duracao_treino": "40min", 

  "semana": { 

    "segunda": { 

      "tipo": "hipertrofia_inferiores", 

      "exercicios": [ 

        {"nome": "Agachamento búlgaro", "series": 4, "reps": "10/perna", "descanso": "60s"}, 

        {"nome": "Ponte glúteos unilateral", "series": 4, "reps": "12/lado", "descanso": "45s"}, 

        {"nome": "Afundo reverso", "series": 4, "reps": "12/perna", "descanso": "45s"}, 

        {"nome": "Elevação panturrilha unilateral", "series": 4, "reps": 15, "descanso": "30s"}, 

        {"nome": "Prancha com elevação perna", "series": 3, "tempo": "30s", "descanso": "30s"} 

      ] 

    }, 

    "terca": { 

      "tipo": "hipertrofia_superiores", 

      "exercicios": [ 

        {"nome": "Flexão declinada", "series": 4, "reps": 10, "descanso": "45s"}, 

        {"nome": "Remada caseira com carga", "series": 4, "reps": 12, "descanso": "45s"}, 

        {"nome": "Mergulho cadeira", "series": 3, "reps": 12, "descanso": "40s"}, 

        {"nome": "Elevação lateral com carga", "series": 3, "reps": 15, "descanso": "30s"}, 

        {"nome": "Prancha toque ombro", "series": 3, "reps": "15/lado", "descanso": "30s"} 

      ] 

    }, 

    "quarta": {"tipo": "descanso_ativo", "atividades": ["alongamento focado", "hidratação", "sono"]}, 

    "quinta": {"tipo": "fullbody_forca", "exercicios": ["circuito força: agachamento + flexão + remada + prancha"]}, 

    "sexta": {"tipo": "resistencia_muscular", "exercicios": ["tempo sob tensão", "repetições controladas"]}, 

    "sabado": {"tipo": "volume_muscular", "exercicios": ["séries descendentes", "bi-sets adaptados"]}, 

    "domingo": {"tipo": "descanso", "sugestao": "mobilidade leve"} 

  }, 

  "alimentacao": { 

    "cafe_manha": {"carne": "Ovos + pão integral + banana + pasta amendoim"}, 

    "almoco": {"carne": "Proteína magra abundante + arroz/ batata-doce + vegetais + azeite"}, 

    "jantar": {"carne": "Refeição reforçada: peixe/frango + carboidrato + vegetais"}, 

    "lanches": ["banana + pasta amendoim", "mix castanhas", "iogurte + granola", "pão integral + queijo"], 

    "hidratacao": "3L água/dia" 

  }, 

  "dicas": ["superávit calórico (+300kcal)", "proteína 1.8-2.2g/kg", "carboidrato pós-treino", "descanso muscular 48h"] 

},

//🔹 Fluxo #15 — Intermediário + Condicionamento Físico + Come Carne 

"15": { 

  "flow_id": "15", 

  "nivel": "intermediario", 

  "objetivo": "condicionamento", 

  "alimentacao": "carne", 

  "duracao_treino": "40min", 

  "semana": { 

    "segunda": {"tipo": "cardio_funcional", "exercicios": ["circuito moderado: agachamento jump adaptado + flexão + prancha + corrida"]}, 

    "terca": {"tipo": "resistencia_cardio", "exercicios": ["step touch rápido", "mountain climber", "burpee sem salto", "abdominal"]}, 

    "quarta": {"tipo": "descanso_ativo", "atividades": ["alongamento dinâmico", "hidratação"]}, 

    "quinta": {"tipo": "funcional_equilibrio", "exercicios": ["afundo com rotação", "prancha lateral", "equilíbrio dinâmico"]}, 

    "sexta": {"tipo": "hiit_moderado", "exercicios": ["20s on/40s off: polichinelo, agachamento, flexão, corrida"]}, 

    "sabado": {"tipo": "cardio_mobilidade", "exercicios": ["circuito leve + mobilidade"]}, 

    "domingo": {"tipo": "descanso", "sugestao": "caminhada ou yoga"} 

  }, 

  "alimentacao": { 

    "cafe_manha": {"carne": "Energia sustentada: ovos + pão integral + fruta"}, 

    "almoco": {"carne": "Equilíbrio: proteína magra + carboidrato complexo + vegetais"}, 

    "jantar": {"carne": "Leve e nutritivo: peixe + vegetais + salada"}, 

    "lanches": ["fruta + queijo", "mix castanhas", "iogurte natural"], 

    "hidratacao": "2.5L água/dia" 

  }, 

  "dicas": ["progressão de intensidade", "hidratação durante treino", "recuperação ativa", "sono de qualidade"] 

}, 

//🔹 Fluxo #16 — Intermediário + Saúde e Bem-estar + Come Carne 

"16": { 

  "flow_id": "16", 

  "nivel": "intermediario", 

  "objetivo": "saude_bem_estar", 

  "alimentacao": "carne", 

  "duracao_treino": "40min", 

  "semana": { 

    "segunda": {"tipo": "yoga_flow", "exercicios": ["sequência vinyasa adaptada + alongamentos"]}, 

    "terca": {"tipo": "mobilidade_funcional", "exercicios": ["rotações articulares", "agachamento profundo", "gato-vaca", "ponte"]}, 

    "quarta": {"tipo": "descanso_ativo", "atividades": ["meditação", "alongamentos", "respiração"]}, 

    "quinta": {"tipo": "equilibrio_forca_suave", "exercicios": ["prancha variações", "equilíbrio dinâmico", "agachamento isométrico"]}, 

    "sexta": {"tipo": "caminhada_mobilidade", "exercicios": ["caminhada consciente + alongamentos"]}, 

    "sabado": {"tipo": "pilates_chao", "exercicios": ["exercícios pilates solo adaptados"]}, 

    "domingo": {"tipo": "descanso", "sugestao": "atividade prazerosa ao ar livre"} 

  }, 

  "alimentacao": { 

    "cafe_manha": {"carne": "Alimentação consciente: iogurte + granola caseira + fruta"}, 

    "almoco": {"carne": "Bowl equilibrado: proteína magra + grãos + vegetais + gordura boa"}, 

    "jantar": {"carne": "Refeição leve: peixe + vegetais + salada"}, 

    "lanches": ["fruta da estação", "castanhas", "chá + snack caseiro"], 

    "hidratacao": "2L água/dia + chás calmantes" 

  }, 

  "dicas": ["mindful eating", "conexão corpo-mente", "sono regular", "gratidão diária"] 

},

//🔴 FLUXOS AVANÇADO (17-24) 

//🔥 Alta intensidade, HIIT, exercícios compostos, volume elevado 

 
//🔹 Fluxo #17 — Avançado + Emagrecer + Come Carne 

"17": { 

  "flow_id": "17", 

  "nivel": "avancado", 

  "objetivo": "emagrecer", 

  "alimentacao": "carne", 

  "duracao_treino": "40min", 

  "semana": { 

    "segunda": { 

      "tipo": "hiit_intenso", 

      "exercicios": [ 

        {"nome": "Burpee completo", "series": 5, "reps": 12, "descanso": "20s"}, 

        {"nome": "Agachamento jump", "series": 5, "reps": 20, "descanso": "25s"}, 

        {"nome": "Mountain climber rápido", "series": 5, "tempo": "40s", "descanso": "20s"}, 

        {"nome": "Flexão explosiva", "series": 4, "reps": 15, "descanso": "30s"}, 

        {"nome": "Corrida estacionária alta intensidade", "series": 4, "tempo": "45s", "descanso": "25s"} 

      ] 

    }, 

    "terca": { 

      "tipo": "circuito_metabolico", 

      "exercicios": [ 

        {"nome": "Afundo jump", "series": 4, "reps": "15/perna", "descanso": "30s"}, 

        {"nome": "Prancha toque ombro rápido", "series": 4, "reps": "20/lado", "descanso": "25s"}, 

        {"nome": "Abdominal bicicleta rápido", "series": 4, "tempo": "40s", "descanso": "25s"}, 

        {"nome": "Step up explosivo (cadeira)", "series": 4, "reps": "15/perna", "descanso": "30s"} 

      ] 

    }, 

    "quarta": {"tipo": "descanso_ativo", "atividades": ["alongamento dinâmico intenso", "hidratação", "sono"]}, 

    "quinta": {"tipo": "forca_metabolica", "exercicios": ["agachamento pistol assistido", "flexão diamante", "remada explosiva caseira", "ponte glúteos salto"]}, 

    "sexta": {"tipo": "hiit_funcional_avancado", "exercicios": ["EMOM 20min: minuto 1: burpees, minuto 2: agachamento jump, minuto 3: prancha"]}, 

    "sabado": {"tipo": "cardio_definicao", "exercicios": ["HIIT 30s on/30s off + core intensivo"]}, 

    "domingo": {"tipo": "descanso", "sugestao": "mobilidade leve ou yoga restaurativo"} 

  }, 

  "alimentacao": { 

    "cafe_manha": {"carne": "Proteína alta + fibra: ovos + aveia + fruta"}, 

    "almoco": {"carne": "Proteína magra + vegetais fibrosos + carboidrato baixo/moderado"}, 

    "jantar": {"carne": "Refeição leve: peixe + salada generosa + azeite"}, 

    "lanches": ["fruta + proteína", "castanhas controladas", "iogurte natural sem açúcar"], 

    "hidratacao": "3L água/dia" 

  }, 

  "dicas": ["déficit calórico controlado", "proteína alta", "HIIT 3-4x/semana", "recuperação ativa essencial"] 

}, 

//🔹 Fluxo #18 — Avançado + Ganhar Massa + Come Carne  

"18": { 

  "flow_id": "18", 

  "nivel": "avancado", 

  "objetivo": "ganhar_massa", 

  "alimentacao": "carne", 

  "duracao_treino": "40min", 

  "semana": { 

    "segunda": { 

      "tipo": "hipertrofia_inferiores_avancada", 

      "exercicios": [ 

        {"nome": "Agachamento pistol assistido", "series": 5, "reps": "8/perna", "descanso": "75s"}, 

        {"nome": "Ponte glúteos salto", "series": 4, "reps": "15", "descanso": "60s"}, 

        {"nome": "Afundo búlgaro jump", "series": 4, "reps": "10/perna", "descanso": "60s"}, 

        {"nome": "Elevação panturrilha salto", "series": 5, "reps": 20, "descanso": "45s"}, 

        {"nome": "Prancha com elevação perna + toque", "series": 4, "tempo": "40s", "descanso": "40s"} 

      ] 

    }, 

    "terca": { 

      "tipo": "hipertrofia_superiores_avancada", 

      "exercicios": [ 

        {"nome": "Flexão explosiva com palma", "series": 5, "reps": 10, "descanso": "60s"}, 

        {"nome": "Remada explosiva caseira", "series": 5, "reps": 12, "descanso": "60s"}, 

        {"nome": "Mergulho cadeira com elevação pernas", "series": 4, "reps": 15, "descanso": "45s"}, 

        {"nome": "Elevação lateral com carga + isometria", "series": 4, "reps": "15+10s", "descanso": "45s"}, 

        {"nome": "Prancha dinâmica avançada", "series": 4, "tempo": "40s", "descanso": "40s"} 

      ] 

    }, 

    "quarta": {"tipo": "descanso_ativo", "atividades": ["alongamento focado", "hidratação", "sono"]}, 

    "quinta": {"tipo": "fullbody_forca_avancada", "exercicios": ["circuito força avançado: pistol + flexão explosiva + remada + prancha dinâmica"]}, 

    "sexta": {"tipo": "resistencia_muscular_avancada", "exercicios": ["tempo sob tensão extremo", "bi-sets", "drop sets adaptados"]}, 

    "sabado": {"tipo": "volume_muscular_intenso", "exercicios": ["séries descendentes + isometria + explosão"]}, 

    "domingo": {"tipo": "descanso", "sugestao": "mobilidade leve"} 

  }, 

  "alimentacao": { 

    "cafe_manha": {"carne": "Super proteína: ovos + aveia + banana + pasta amendoim"}, 

    "almoco": {"carne": "Proteína abundante + carboidrato complexo + vegetais + gordura boa"}, 

    "jantar": {"carne": "Refeição reforçada: carne magra + batata-doce + vegetais + azeite"}, 

    "lanches": ["banana + pasta amendoim", "mix castanhas", "iogurte + granola + mel", "pão integral + queijo + peito peru"], 

    "hidratacao": "3.5L água/dia" 

  }, 

  "dicas": ["superávit calórico (+400kcal)", "proteína 2-2.5g/kg", "carboidrato estratégico", "descanso 48-72h por grupo muscular"] 

}, 

//🔹 Fluxo #19 — Avançado + Condicionamento Físico + Come Carne 

"19": { 

  "flow_id": "19", 

  "nivel": "avancado", 

  "objetivo": "condicionamento", 

  "alimentacao": "carne", 

  "duracao_treino": "40min", 

  "semana": { 

    "segunda": {"tipo": "cardio_intenso", "exercicios": ["HIIT avançado: burpee + agachamento jump + mountain climber + flexão explosiva"]}, 

    "terca": {"tipo": "resistencia_cardio_avancada", "exercicios": ["circuito metabólico: afundo jump + prancha dinâmica + abdominal + step up explosivo"]}, 

    "quarta": {"tipo": "descanso_ativo", "atividades": ["alongamento dinâmico", "hidratação", "recuperação"]}, 

    "quinta": {"tipo": "funcional_equilibrio_avancado", "exercicios": ["pistol assistido + rotação", "prancha lateral dinâmica", "equilíbrio com movimento complexo"]}, 

    "sexta": {"tipo": "hiit_avancado", "exercicios": ["EMOM 25min: variações de exercícios compostos"]}, 

    "sabado": {"tipo": "cardio_mobilidade_intensa", "exercicios": ["HIIT + mobilidade articular dinâmica"]}, 

    "domingo": {"tipo": "descanso", "sugestao": "yoga ou caminhada leve"} 

  }, 

  "alimentacao": { 

    "cafe_manha": {"carne": "Energia sustentada: ovos + carboidrato complexo + fruta"}, 

    "almoco": {"carne": "Equilíbrio energético: proteína + carboidrato + vegetais"}, 

    "jantar": {"carne": "Recuperação: proteína magra + vegetais + gordura boa"}, 

    "lanches": ["fruta + proteína", "mix castanhas", "iogurte natural"], 

    "hidratacao": "3L água/dia" 

  }, 

  "dicas": ["progressão de intensidade", "hidratação estratégica", "recuperação ativa", "sono de qualidade"] 

}, 

//🔹 Fluxo #20 — Avançado + Saúde e Bem-estar + Come Carne 

"20": { 

  "flow_id": "20", 

  "nivel": "avancado", 

  "objetivo": "saude_bem_estar", 

  "alimentacao": "carne", 

  "duracao_treino": "40min", 

  "semana": { 

    "segunda": {"tipo": "yoga_flow_avancado", "exercicios": ["sequência vinyasa avançada + equilíbrios + alongamentos profundos"]}, 

    "terca": {"tipo": "mobilidade_funcional_avancada", "exercicios": ["mobilidade articular completa + agachamento profundo + movimentos funcionais"]}, 

    "quarta": {"tipo": "descanso_ativo", "atividades": ["meditação avançada 20min", "alongamentos profundos", "respiração"]}, 

    "quinta": {"tipo": "equilibrio_forca_consciente", "exercicios": ["prancha variações avançadas", "equilíbrio dinâmico complexo", "força isométrica"]}, 

    "sexta": {"tipo": "caminhada_mobilidade_consciente", "exercicios": ["caminhada em terreno variado + mobilidade integrada"]}, 

    "sabado": {"tipo": "pilates_avancado", "exercicios": ["sequência pilates avançada no solo: controle total + respiração"]}, 

    "domingo": {"tipo": "descanso", "sugestao": "atividade prazerosa em natureza"} 

  }, 

  "alimentacao": { 

    "cafe_manha": {"carne": "Alimentação consciente: ingredientes integrais + proteína de qualidade"}, 

    "almoco": {"carne": "Bowl equilibrado avançado: proteína + grãos integrais + vegetais variados + gordura boa"}, 

    "jantar": {"carne": "Refeição leve e digestiva: peixe + vegetais + temperos anti-inflamatórios"}, 

    "lanches": ["fruta da estação", "castanhas", "chá funcional + snack integral"], 

    "hidratacao": "2.5L água/dia + chás funcionais" 

  }, 

  "dicas": ["mindful eating avançado", "conexão corpo-mente-espírito", "sono reparador", "prática de gratidão", "exposição solar consciente"] 

},   

//🔹 Fluxo #21 — Avançado + Emagrecer + Vegetariano 

"21": { 

  "flow_id": "21", 

  "nivel": "avancado", 

  "objetivo": "emagrecer", 

  "alimentacao": "vegetariano", 

  "duracao_treino": "40min", 

  "semana": { 

    "segunda": {"tipo": "hiit_intenso_veg", "exercicios": "estrutura Fluxo #17 com foco vegetariano"}, 

    "terca": {"tipo": "circuito_metabolico_veg", "exercicios": "estrutura Fluxo #17"}, 

    "quarta": {"tipo": "descanso_ativo", "atividades": ["alongamento dinâmico", "hidratação"]}, 

    "quinta": {"tipo": "forca_metabolica_veg", "exercicios": ["pistol assistido + flexão explosiva + remada explosiva + ponte salto"]}, 

    "sexta": {"tipo": "hiit_funcional_avancado_veg", "exercicios": ["EMOM 20min: exercícios compostos"]}, 

    "sabado": {"tipo": "cardio_definicao_veg", "exercicios": ["HIIT 30s/30s + core intensivo"]}, 

    "domingo": {"tipo": "descanso", "sugestao": "mobilidade ou yoga"} 

  }, 

  "alimentacao": { 

    "cafe_manha": {"veg": "Proteína vegetal alta + fibra: mingau aveia + proteína vegetal + chia + frutas"}, 

    "almoco": {"veg": "Proteína vegetal concentrada + vegetais fibrosos + carboidrato moderado"}, 

    "jantar": {"veg": "Refeição leve: sopa proteica vegetal + salada generosa"}, 

    "lanches": ["fruta + proteína vegetal", "castanhas controladas", "iogurte vegetal sem açúcar"], 

    "hidratacao": "3L água/dia" 

  }, 

  "dicas": ["déficit calórico controlado", "proteína vegetal combinada", "HIIT 3-4x/semana", "B12 suplementar se necessário"] 

},

//🔹 Fluxo #22 — Avançado + Ganhar Massa + Vegetariano  

"22": { 

  "flow_id": "22", 

  "nivel": "avancado", 

  "objetivo": "ganhar_massa", 

  "alimentacao": "vegetariano", 

  "duracao_treino": "40min", 

  "semana": { 

    "segunda": {"tipo": "hipertrofia_inferiores_avancada_veg", "exercicios": "estrutura Fluxo #18"}, 

    "terca": {"tipo": "hipertrofia_superiores_avancada_veg", "exercicios": "estrutura Fluxo #18"}, 

    "quarta": {"tipo": "descanso_ativo", "atividades": ["alongamento focado", "hidratação", "sono"]}, 

    "quinta": {"tipo": "fullbody_forca_avancada_veg", "exercicios": ["circuito força avançado vegetariano"]}, 

    "sexta": {"tipo": "resistencia_muscular_avancada_veg", "exercicios": ["tempo sob tensão + bi-sets + drop sets"]}, 

    "sabado": {"tipo": "volume_muscular_intenso_veg", "exercicios": ["séries descendentes + isometria + explosão"]}, 

    "domingo": {"tipo": "descanso", "sugestao": "mobilidade leve"} 

  }, 

  "alimentacao": { 

    "cafe_manha": {"veg": "Super vitamina vegetal: aveia + banana + leite vegetal + pasta amendoim + proteína vegetal"}, 

    "almoco": {"veg": "Proteína vegetal abundante + carboidrato complexo + vegetais + gordura boa"}, 

    "jantar": {"veg": "Refeição reforçada: grãos + proteína vegetal + vegetais + azeite"}, 

    "lanches": ["banana + pasta amendoim", "mix castanhas", "iogurte vegetal + granola", "pão integral + homus"], 

    "hidratacao": "3.5L água/dia" 

  }, 

  "dicas": ["superávit calórico (+400kcal)", "proteína vegetal 2-2.5g/kg", "combinações proteicas", "suplementar B12/DHA se necessário"] 

},

 

//🔹 Fluxo #23 — Avançado + Condicionamento Físico + Vegetariano 
 
"23": { 

  "flow_id": "23", 

  "nivel": "avancado", 

  "objetivo": "condicionamento", 

  "alimentacao": "vegetariano", 

  "duracao_treino": "40min", 

  "semana": { 

    "segunda": {"tipo": "cardio_intenso_veg", "exercicios": "estrutura Fluxo #19"}, 

    "terca": {"tipo": "resistencia_cardio_avancada_veg", "exercicios": "estrutura Fluxo #19"}, 

    "quarta": {"tipo": "descanso_ativo", "atividades": ["alongamento dinâmico", "hidratação"]}, 

    "quinta": {"tipo": "funcional_equilibrio_avancado_veg", "exercicios": "estrutura Fluxo #19"}, 

    "sexta": {"tipo": "hiit_avancado_veg", "exercicios": ["EMOM 25min: exercícios compostos"]}, 

    "sabado": {"tipo": "cardio_mobilidade_intensa_veg", "exercicios": ["HIIT + mobilidade"]}, 

    "domingo": {"tipo": "descanso", "sugestao": "yoga ou caminhada"} 

  }, 

  "alimentacao": { 

    "cafe_manha": {"veg": "Energia sustentada: mingau aveia + proteína vegetal + frutas"}, 

    "almoco": {"veg": "Equilíbrio energético: proteína vegetal + carboidrato + vegetais"}, 

    "jantar": {"veg": "Recuperação: proteína vegetal + vegetais + gordura boa"}, 

    "lanches": ["fruta + proteína vegetal", "mix castanhas", "iogurte vegetal"], 

    "hidratacao": "3L água/dia" 

  }, 

  "dicas": ["progressão de intensidade", "hidratação estratégica", "recuperação ativa", "sono de qualidade"] 

},

//🔹 Fluxo #24 — Avançado + Saúde e Bem-estar + Vegetariano 

"24": { 

  "flow_id": "24", 

  "nivel": "avancado", 

  "objetivo": "saude_bem_estar", 

  "alimentacao": "vegetariano", 

  "duracao_treino": "40min", 

  "semana": { 

    "segunda": {"tipo": "yoga_flow_avancado_veg", "exercicios": "estrutura Fluxo #20"}, 

    "terca": {"tipo": "mobilidade_funcional_avancada_veg", "exercicios": "estrutura Fluxo #20"}, 

    "quarta": {"tipo": "descanso_ativo", "atividades": ["meditação avançada", "alongamentos profundos", "respiração"]}, 

    "quinta": {"tipo": "equilibrio_forca_consciente_veg", "exercicios": "estrutura Fluxo #20"}, 

    "sexta": {"tipo": "caminhada_mobilidade_consciente_veg", "exercicios": "estrutura Fluxo #20"}, 

    "sabado": {"tipo": "pilates_avancado_veg", "exercicios": "estrutura Fluxo #20"}, 

    "domingo": {"tipo": "descanso", "sugestao": "atividade prazerosa em natureza"} 

  }, 

  "alimentacao": { 

    "cafe_manha": {"veg": "Alimentação consciente vegetal: ingredientes integrais + proteína vegetal"}, 

    "almoco": {"veg": "Bowl equilibrado avançado vegetal: proteína vegetal + grãos integrais + vegetais variados"}, 

    "jantar": {"veg": "Refeição leve: creme vegetal + grãos + temperos anti-inflamatórios"}, 

    "lanches": ["fruta da estação", "castanhas", "chá funcional + snack integral"], 

    "hidratacao": "2.5L água/dia + chás funcionais" 

  }, 

  "dicas": ["mindful eating avançado", "conexão corpo-mente", "sono reparador", "gratidão diária", "suplementação vegetal estratégica"] 

}

};