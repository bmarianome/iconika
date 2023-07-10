import { create } from "zustand";

interface LoaderStore {
  loading: boolean
  setLoading: (loading: boolean) => void,
  word: string
  setWord: (word: string) => void
  success: boolean
  setSuccess: (success: boolean) => void,
  finish: () => void
}

export const useLoader = create<LoaderStore>()((set) => ({
  loading: false,
  word: 'Cargando...',
  setLoading: (loading) => set((state) => {
    window.document.body.style.overflow = loading ? "hidden" : "auto"
    return { ...state, loading }
  }),
  setWord: (word) => set({ word }),
  success: false,
  setSuccess: (success) => set({ success }),
  finish: () => set((state) => ({
    ...state, loading: false, success: false, word: 'Enviando datos'
  }))

}))
