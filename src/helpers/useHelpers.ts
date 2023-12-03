export default function useHelpers() {
  function stringToJson(item: string) {
    let value = typeof item !== 'string' ? JSON.stringify(item) : item

    try {
      value = JSON.parse(value)
    } catch (e) {
      return false
    }

    return typeof value === 'object' && value !== null
  }

  function stringToBoolean(item: string) {
    if (item === 'true') {
      return true
    } else if (item === 'false') {
      return false
    } else {
      return undefined
    }
  }

  return {
    stringToJson,
    stringToBoolean,
  }
}
