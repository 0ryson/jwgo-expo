import useApp from '../store/useApp'
import useHelpers from '../helpers/useHelpers'
import useDatabase from '../database/useDatabase'

export default function useData() {
  const setMenuState = useApp((state) => state.setMenuState)
  const { stringToBoolean } = useHelpers()
  const { getFromDatabase, setToDatabase } = useDatabase()

  const menu = useApp((state) => state.menuState)

  function setMenu(state: boolean) {
    setToDatabase('menuState', state.toString())
    setMenuState(state)
  }

  async function loadMenu() {
    const stringValue = await getFromDatabase('menuState')
    const booleanValue = stringToBoolean(stringValue)

    booleanValue && setMenuState(booleanValue)
  }

  return {
    menu,
    setMenu,
    loadMenu,
  }
}
