import React from 'react'
import { StyleSheet } from 'react-native'
import { Stack } from 'expo-router'

// Import your global CSS file
import "../global.css";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerStyle: {
        backgroundColor: '#12833f',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Stack.Screen name="index" options={{
        title:'Home', headerTitleAlign: 'center', headerShown: true
      }} />
      <Stack.Screen name="about" options={{
        title:'About', headerTitleAlign: 'center', headerShown: true
      }} />
    </Stack>
  )
}

const styles = StyleSheet.create({})