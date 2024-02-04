import React, { ReactElement, useEffect } from 'react'
import { Link } from 'expo-router'
import { SafeAreaView, StyleSheet } from 'react-native'
import { Drawer } from 'react-native-drawer-layout'
import useApp from '../store/useApp.store'

export default function Menu({ children }: { children: ReactElement }) {
  const { menuOpen, setMenuOpen } = useApp()

  return (
    <Drawer
      open={menuOpen}
      onOpen={() => {
        !menuOpen && setMenuOpen(true)
      }}
      onClose={() => {
        menuOpen && setMenuOpen(false)
      }}
      drawerType="front"
      renderDrawerContent={() => (
        <SafeAreaView style={styles.safeArea}>
          <Link href={'/'} onPress={() => setMenuOpen(false)}>
            Index
          </Link>
          <Link href={'/home'} onPress={() => setMenuOpen(false)}>
            Tabs - Home
          </Link>
          <Link href={'/modal'} onPress={() => setMenuOpen(false)}>
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
