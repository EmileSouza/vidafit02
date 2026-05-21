export function getFlowId({ nivel, objetivo, alimentacao }) {
  const map = {
    iniciante: {
      emagrecer: alimentacao === 'carne' ? '01' : '05',
      ganhar_massa: alimentacao === 'carne' ? '02' : '06',
      condicionamento: alimentacao === 'carne' ? '03' : '07',
      saude_bem_estar: alimentacao === 'carne' ? '04' : '08',
    },
    intermediario: {
      emagrecer: alimentacao === 'carne' ? '13' : '09',
      ganhar_massa: alimentacao === 'carne' ? '14' : '10',
      condicionamento: alimentacao === 'carne' ? '15' : '11',
      saude_bem_estar: alimentacao === 'carne' ? '16' : '12',
    },
    avancado: {
      emagrecer: alimentacao === 'carne' ? '17' : '21',
      ganhar_massa: alimentacao === 'carne' ? '18' : '22',
      condicionamento: alimentacao === 'carne' ? '19' : '23',
      saude_bem_estar: alimentacao === 'carne' ? '20' : '24',
    }
  };
  return map[nivel]?.[objetivo] || '03';
}