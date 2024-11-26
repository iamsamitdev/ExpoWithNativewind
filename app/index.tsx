import React from "react"
import { Button, Text, View, ScrollView, TouchableOpacity } from "react-native"
import { Link, useRouter } from "expo-router"

export default function index() {

  const router = useRouter()

  return (
      <ScrollView>
        <View className="flex items-center justify-center h-screen bg-green-500">
          
          <Text className="text-6xl font-bold text-center text-blue-500 animate-bounce">
            RN Expo
          </Text>
          
          <Text className="p-8 mx-auto text-2xl border-4 border-red-500 rounded-lg w-80 mt-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At incidunt
            dolores, praesentium ipsa sed
          </Text>

          <Text className="p-8 mx-auto text-2xl border-4 border-red-500 rounded-lg w-80 mt-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At incidunt
            dolores, praesentium ipsa sed
          </Text>

          <Text></Text>

          <Button title="Button About" onPress={() => router.push('/about')} />

          <Text></Text>

          <Link href="/about" className="text-2xl text-blue-500">Link About</Link>

          <Text></Text>

          <TouchableOpacity 
            className="p-3 bg-blue-500 border-4 border-blue-700 rounded-lg w-80" 
            onPress={() => router.push('/about')}>
            <Text className="text-2xl text-center text-white">Touchable Opacity</Text>
          </TouchableOpacity>
          
        </View>
      </ScrollView>
  )
}