import React from 'react'
import { StyleSheet } from 'react-native'
import { Stack } from 'expo-router'

// Import your global CSS file
import "../global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title:'Home', headerTitleAlign: 'center', headerShown: false}} />
    </Stack>
  )
}

const styles = StyleSheet.create({})