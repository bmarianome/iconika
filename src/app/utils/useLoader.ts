import { create } from "zustand";

interface LoaderStore {
  loading: boolean
  setLoading: (loading: boolean) => void,
  word: 'Subiendo fotos' | 'Enviando datos'
  setWord: (word: 'Subiendo fotos' | 'Enviando datos') => void
  success: boolean
  setSuccess: (success: boolean) => void,
  finish: () => void
}

export const useLoader = create<LoaderStore>()((set) => ({
  loading: false,
  word: 'Enviando datos',
  setLoading: (loading) => set((state) => {

    window.document.body.style.overflow = loading ? "hidden" : "auto"

    setTimeout(() => state.setWord("Subiendo fotos"), 2000)
    
    return { ...state, loading }
  }),
  setWord: (word) => set({ word }),
  success: false,
  setSuccess: (success) => set({ success }),
  finish: () => set((state) => ({
    ...state, loading: false, success: false, word: 'Enviando datos'
  }))

}))
