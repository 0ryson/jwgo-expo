import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import useApp from '../../store/useApp'
import Ionicons from '@expo/vector-icons/Ionicons'
import Home from './home'
import Board from './board'
import Meetings from './meetings'
import Territories from './territories'

function HomeTab() {
  return <Home />
}

function BoardTab() {
  return <Board />
}

function MeetingsTab() {
  return <Meetings />
}

function TerritoriesTab() {
  return <Territories />
}

export default function TabLayout() {
  const Tabs = createBottomTabNavigator()
  const setMenuState = useApp((state) => state.setMenuState)

  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: '#333',
        tabBarStyle: {
          height: 100,
          borderTopWidth: 1,
          borderTopColor: '#DDD',
          backgroundColor: '#FFF',
        },
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: '#DDD',
          backgroundColor: '#FFF',
        },
        tabBarLabelStyle: {
          marginBottom: 5,
          fontSize: 12,
          fontWeight: 'bold',
          color: '#333',
        },
        tabBarIconStyle: {
          color: '#333',
          marginTop: 5,
        },
        headerLeft: () => (
          <Ionicons
            name="menu"
            size={32}
            color={'#333'}
            onPress={() => {
              setMenuState(true)
            }}
          />
        ),
        headerLeftContainerStyle: {
          paddingLeft: 10,
        },
        headerRight: () => (
          <Ionicons
            name="notifications"
            size={24}
            color={'#333'}
            onPress={() => {
              console.log('open notification')
            }}
          />
        ),
        headerRightContainerStyle: {
          paddingRight: 10,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        component={HomeTab}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="board"
        component={BoardTab}
        options={{
          title: 'Board',
          tabBarIcon: ({ color }) => (
            <Ionicons name="grid" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="meetings"
        component={MeetingsTab}
        options={{
          title: 'Meetings',
          tabBarIcon: ({ color }) => (
            <Ionicons name="people" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="territories"
        component={TerritoriesTab}
        options={{
          title: 'Territories',
          tabBarIcon: ({ color }) => (
            <Ionicons name="map" size={26} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  )
}
