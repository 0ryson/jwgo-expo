import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Appearance, useColorScheme, Button } from 'react-native'

export default function App() {
  const colorScheme = useColorScheme()
  const appearanceStyle =
    colorScheme === 'dark' ? styles.darkMode : styles.lightMode

  return (
    <SafeAreaView style={[styles.safeArea, appearanceStyle]}>
      <View style={styles.container}>
        <Text>JWGO</Text>
        <StatusBar style="auto" />
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
