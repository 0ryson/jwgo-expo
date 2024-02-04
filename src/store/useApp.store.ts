import { create } from 'zustand'

type Store = {
  /*
   * If the app is synced to the cloud
   */
  synced: boolean
  /*
   * If the app has loaded the persistent data
   */
  loaded: boolean
  /*
   * If the menu is open
   */
  menuOpen: boolean
  /*
   * Open or hide the menu
   */
  setMenuOpen: (open: boolean) => void
}

const useApp = create<Store>((set) => ({
  synced: false,
  loaded: false,
  menuOpen: false,
  setMenuOpen: (open) => set(() => ({ menuOpen: open })),
}))

export default useApp
