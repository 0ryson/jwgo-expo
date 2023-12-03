import { Link } from 'expo-router'
import { useEffect } from 'react'
import { StyleSheet, View, SafeAreaView, Text } from 'react-native'
import { useColorScheme } from 'react-native'
import * as MediaLibrary from 'expo-media-library'
import * as FileSystem from 'expo-file-system'
import * as Sharing from 'expo-sharing'

export default function App() {
  const colorScheme = useColorScheme()
  const appearanceStyle =
    colorScheme === 'light' ? styles.lightMode : styles.darkMode

  /*   useEffect(() => {
    //shareDatabase()
    //saveDatabase()
  }, []) */

  async function shareDatabase() {
    await Sharing.shareAsync(FileSystem.documentDirectory + 'SQLite', {
      dialogTitle: 'share or copy your DB via',
    }).catch((error) => {
      console.log(error)
    })
  }

  async function saveDatabase() {
    const { status } = await MediaLibrary.requestPermissionsAsync()
    if (status === 'granted') {
      let fileUri = FileSystem.documentDirectory + 'text.txt'
      console.log('fileUri', fileUri)
      await FileSystem.writeAsStringAsync(fileUri, 'Hello World', {
        encoding: FileSystem.EncodingType.UTF8,
      })
    }
  }

  return (
    <SafeAreaView style={[styles.safeArea, appearanceStyle]}>
      <View style={styles.container}>
        <Text>Index App</Text>
        <Link href={'/'}>Index</Link>
        <Link href={'/home'}>Tabs - Home</Link>
        <Link href={'/modal'}>Modal</Link>
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
