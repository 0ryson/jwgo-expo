import { StyleSheet, View, SafeAreaView, Text } from 'react-native'
import { useColorScheme } from 'react-native'

export default function Modal() {
  const colorScheme = useColorScheme()
  const appearanceStyle =
    colorScheme === 'light' ? styles.lightMode : styles.darkMode

  return (
    <SafeAreaView style={[styles.safeArea, appearanceStyle]}>
      <View style={styles.container}>
        <Text>Modal</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
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
