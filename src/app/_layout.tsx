import { Slot } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import { useColorScheme } from 'react-native'
import Menu from '../components/menu'

export default function AppLayout() {
  const colorScheme = useColorScheme()
  const appearanceStyle =
    colorScheme === 'light' ? styles.lightMode : styles.darkMode

  return (
    <View style={[styles.container, appearanceStyle]}>
      <Menu>
        <Slot />
      </Menu>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lightMode: {
    backgroundColor: '#fff',
    color: '#000',
  },
  darkMode: {
    backgroundColor: '#000',
    color: '#fff',
  },
})
