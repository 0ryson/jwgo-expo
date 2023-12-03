import AsyncStorage from '@react-native-async-storage/async-storage'
import useHelpers from '../helpers/useHelpers'

export default function useDatabase() {
  const { stringToJson } = useHelpers()

  /**
   * Get and prepare data from AsyncStorage
   */
  const getFromDatabase = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key)

      if (typeof value !== 'string') {
        return undefined
      }

      if (stringToJson(value)) {
        // Is JSON value
        return JSON.parse(value)
      } else {
        // Is string value
        return value
      }
    } catch (e) {
      console.error('Error in getFromDatabase')
    }
  }

  /**
   * Prepare and save data on AsyncStorage
   */
  const setToDatabase = async (key: string, value: unknown) => {
    try {
      if (typeof value !== 'object' && typeof value !== 'string') {
        throw new Error(
          "Error in setToDatabase. The value insn's object or string"
        )
      }

      let valueValidated = ''

      if (typeof value === 'string') {
        // Is string value
        valueValidated = value
      }

      if (typeof value === 'object') {
        // Is JSON value
        const valueStringify = JSON.stringify(value)

        if (typeof valueStringify === 'undefined') {
          throw new Error("Error in setToDatabase. The object isn't correct")
        } else {
          valueValidated = valueStringify
        }
      }

      await AsyncStorage.setItem(key, valueValidated)
    } catch (e) {
      console.error('Error in setToDatabase')
    }
  }

  return {
    getFromDatabase,
    setToDatabase,
  }
}
