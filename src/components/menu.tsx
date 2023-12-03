import React, { ReactElement } from 'react'
import { Link } from 'expo-router'
import { SafeAreaView, StyleSheet } from 'react-native'
import { Drawer } from 'react-native-drawer-layout'
import useData from '../data/useData'

export default function Menu({ children }: { children: ReactElement }) {
  const { menu, setMenu } = useData()

  return (
    <Drawer
      open={menu !== undefined && menu}
      onOpen={() => {
        setMenu(true)
      }}
      onClose={() => {
        menu !== undefined && setMenu(false)
      }}
      drawerType="front"
      renderDrawerContent={() => (
        <SafeAreaView style={styles.safeArea}>
          <Link href={'/'} onPress={() => setMenu(false)}>
            Index
          </Link>
          <Link href={'/home'} onPress={() => setMenu(false)}>
            Tabs - Home
          </Link>
          <Link href={'/modal'} onPress={() => setMenu(false)}>
            Modal
          </Link>
        </SafeAreaView>
      )}
    >
      {children}
    </Drawer>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
})
