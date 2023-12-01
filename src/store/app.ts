import { create } from 'zustand'

type Store = {
  menuState: boolean
  setMenuState: (data: boolean) => void
}

const useApp = create<Store>((set) => ({
  menuState: false,
  setMenuState: (data) => set(() => ({ menuState: data })),
}))

export default useApp
