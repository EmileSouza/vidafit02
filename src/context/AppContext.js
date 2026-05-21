import { createContext, useContext, useEffect, useState } from 'react';
import { authService } from '../services/auth';
import { progressService } from '../services/progress';
import { userService } from '../services/user';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsub = () => {};
    let cancelled = false;

    // ✅ CORREÇÃO: a cada abertura do app encerra sessão persistida para exigir login antes do Main
    (async () => {
      try {
        await authService.logout();
      } catch {
        // sem sessão ativa
      }
      if (cancelled) return;
      unsub = authService.subscribeAuth(async (firebaseUser) => {
        if (firebaseUser) {
          setUser(firebaseUser);
          const prof = await userService.getProfile(firebaseUser.uid);
          setProfile(prof);
          if (prof) {
            const prog = await progressService.getProgress(firebaseUser.uid);
            setProgress(prog);
          } else {
            setProgress(null);
          }
        } else {
          setUser(null);
          setProfile(null);
          setProgress(null);
        }
        setLoading(false);
      });
    })();

    return () => {
      cancelled = true;
      unsub();
    };
  }, []);

  const refreshData = async () => {
    if (!user) return;
    const prof = await userService.getProfile(user.uid);
    setProfile(prof);
    const prog = await progressService.getProgress(user.uid);
    setProgress(prog);
  };

  return (
    <AppContext.Provider value={{ user, profile, progress, loading, refreshData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);