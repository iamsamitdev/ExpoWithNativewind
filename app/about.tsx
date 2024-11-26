import React from "react"
import { Text, View } from "react-native"

export default function about() {
  return (
    <View className="flex items-center justify-center h-screen bg-pink-400">
      <Text className="text-4xl font-bold">About</Text>
      <Text className="mt-6 w-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis totam, earum quod quia distinctio quo. Officia facere fugiat atque corrupti labore ipsa accusamus! Fugiat autem esse modi tempora enim commodi.</Text>
    </View>
  )
}
