import React, { ReactElement } from 'react'
import { Link } from 'expo-router'
import { SafeAreaView, StyleSheet } from 'react-native'
import { Drawer } from 'react-native-drawer-layout'
import useApp from '../store/app'

export default function Menu({ children }: { children: ReactElement }) {
  const menuState = useApp((state) => state.menuState)
  const setMenuState = useApp((state) => state.setMenuState)

  return (
    <Drawer
      open={menuState}
      onOpen={() => setMenuState(true)}
      onClose={() => setMenuState(false)}
      drawerType="front"
      renderDrawerContent={() => (
        <SafeAreaView style={styles.safeArea}>
          <Link href={'/'} onPress={() => setMenuState(false)}>
            Index
          </Link>
          <Link href={'/home'} onPress={() => setMenuState(false)}>
            Tabs - Home
          </Link>
          <Link href={'/modal'} onPress={() => setMenuState(false)}>
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
