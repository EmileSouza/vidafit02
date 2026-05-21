/** Chave do dia na semana usada em `FLUXOS_VIDA_FIT.*.semana` (getDay: 0=domingo … 6=sábado). */
const WEEKDAY_KEYS = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];

export function getDiaAtual() {
  return WEEKDAY_KEYS[new Date().getDay()];
}

export const dateHelpers = {
  isSameDay: (d1, d2) => {
    if (!d1 || !d2) return false;
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
  },

  isToday: (date) => dateHelpers.isSameDay(date, new Date()),

  getStartOfWeek: (date = new Date()) => {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    d.setDate(diff);
    d.setHours(0, 0, 0, 0);
    return d;
  },

  getDaysSince: (date) => {
    if (!date) return 999;
    const now = new Date();
    const target = new Date(date);
    const diffTime = Math.abs(now - target);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  },

  formatDate: (date, options = { day: '2-digit', month: 'short', year: 'numeric' }) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('pt-BR', options);
  }
};