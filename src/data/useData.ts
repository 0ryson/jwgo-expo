import useDataMenu from '@/data/useDataMenu'

export default function useData() {
  const { menu, setMenu, loadMenu } = useDataMenu()
  /* const dataMeetings = useDataMeetings()
  const dataPersons = useDataPersons()
  const dataTerritories = useDataTerritories()
  const dataBoard = useDataBoard() */

  /**
   * Load saved data
   */
  function loadData() {
    loadMenu()
    // loadMeetings()
    // loadPersons()
    // loadTerritories()
    // loadBoard()
  }

  /**
   * Sync cloud data
   */
  function syncData() {
    // Import cloud data and save into the database

    // Load data from database to store
    loadData()
  }

  /**
   * Save cloud data
   */
  function saveData() {
    // Export database data and send it to the cloud
  }

  return {
    loadData,
    syncData,
    saveData,
    menu,
    setMenu,
    /* ...dataMeetings,
    ...dataPersons,
    ...dataTerritories,
    ...dataBoard, */
  }
}
