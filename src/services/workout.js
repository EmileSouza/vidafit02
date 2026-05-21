import { doc, getDoc, setDoc } from 'firebase/firestore';
import { dateHelpers } from '../utils/dateHelpers';
import { db } from './firebase';

const PROGRESS_COL = 'user_progress';

export const workoutService = {
  getDailyPlan: async (uid, flowId) => {
    // Retorna estrutura do fluxo (implementar com base em fluxos.js)
    return { flowId, dia: 'Segunda', tipo: 'fullbody', exercicios: [] };
  },

  canCompleteToday: async (uid) => {
    const snap = await getDoc(doc(db, PROGRESS_COL, uid));
    if (!snap.exists()) return true;
    const lastDate = snap.data().lastWorkoutDate?.toDate();
    return lastDate ? !dateHelpers.isSameDay(lastDate, new Date()) : true;
  },

  completeWorkout: async (uid) => {
    const allowed = await workoutService.canCompleteToday(uid);
    if (!allowed) throw new Error('Treino já concluído hoje.');

    const ref = doc(db, PROGRESS_COL, uid);
    const snap = await getDoc(ref);
    const data = snap.exists() ? snap.data() : { streak: 0, weeklyCompleted: 0, lastWorkoutDate: null };

    const today = new Date();
    const daysSinceLast = data.lastWorkoutDate ? dateHelpers.getDaysSince(data.lastWorkoutDate.toDate()) : 99;
    const newStreak = daysSinceLast <= 1 ? data.streak + 1 : 1;
    const newWeekly = (data.weeklyCompleted || 0) + 1;
    const recommendRest = newStreak >= 6;

    await setDoc(ref, {
      userId: uid,
      lastWorkoutDate: today,
      streak: newStreak,
      weeklyCompleted: newWeekly,
      recommendRest,
      updatedAt: today
    }, { merge: true });

    return { streak: newStreak, weeklyCompleted: newWeekly, recommendRest };
  }
};