import { doc, getDoc, setDoc } from 'firebase/firestore';
import { dateHelpers } from '../utils/dateHelpers';
import { db } from './firebase';

const PROGRESS_COL = 'user_progress';

export const progressService = {
  getProgress: async (uid) => {
    const snap = await getDoc(doc(db, PROGRESS_COL, uid));
    if (!snap.exists()) return { streak: 0, weeklyProgress: 0, totalWorkouts: 0, lastWorkoutDate: null, recommendRest: false };

    const data = snap.data();
    const daysSinceLast = data.lastWorkoutDate ? dateHelpers.getDaysSince(data.lastWorkoutDate.toDate()) : 99;
    const activeStreak = daysSinceLast > 2 ? 0 : data.streak;

    return {
      streak: activeStreak,
      weeklyProgress: Math.min(data.weeklyCompleted || 0, 7),
      totalWorkouts: data.totalWorkouts || 0,
      lastWorkoutDate: data.lastWorkoutDate?.toDate(),
      recommendRest: data.recommendRest || false
    };
  },

  resetProgress: async (uid) => {
    await setDoc(doc(db, PROGRESS_COL, uid), {
      streak: 0,
      weeklyCompleted: 0,
      lastWorkoutDate: null,
      recommendRest: false,
      resetAt: new Date()
    }, { merge: true });
  },

  incrementTotal: async (uid) => {
    const ref = doc(db, PROGRESS_COL, uid);
    const snap = await getDoc(ref);
    const current = snap.exists() ? snap.data().totalWorkouts || 0 : 0;
    await setDoc(ref, { totalWorkouts: current + 1 }, { merge: true });
  }
};