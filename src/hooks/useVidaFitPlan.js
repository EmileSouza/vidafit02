import { useMemo } from 'react';
import { FLUXOS_VIDA_FIT } from '../data/fluxos';
import { getFlowId } from '../utils/getFluxoId';

export function useVidaFitPlan(nivel, objetivo, alimentacao) {
  return useMemo(() => {
    // ✅ CORREÇÃO: sem dados de perfil não força fluxo errado — telas mostram loading/fallback
    if (!nivel || !objetivo || !alimentacao) return null;
    const id = getFlowId({ nivel, objetivo, alimentacao });
    return FLUXOS_VIDA_FIT[id] || FLUXOS_VIDA_FIT['03'];
  }, [nivel, objetivo, alimentacao]);
}