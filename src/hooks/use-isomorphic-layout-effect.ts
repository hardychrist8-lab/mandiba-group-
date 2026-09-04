/**
 * useIsomorphicLayoutEffect
 * useLayoutEffect côté client, useEffect côté serveur (évite les warnings SSR).
 */
import { useEffect, useLayoutEffect } from "react";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
