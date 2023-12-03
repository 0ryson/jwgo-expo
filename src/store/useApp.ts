import { create } from 'zustand'

type Store = {
  menuState: boolean | undefined
  setMenuState: (data: boolean) => void
}

const useApp = create<Store>((set) => ({
  menuState: undefined,
  setMenuState: (data) => set(() => ({ menuState: data })),
}))

export default useApp
