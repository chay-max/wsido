import { View, Text, Pressable, PermissionsAndroid } from 'react-native'
import React from 'react'
import DeviceActivityAndroid from '@breakr/react-native-device-activity-android'
import { router, Router } from 'expo-router'
export default async function Main() {
  return (
    <View className='bg-darkblue flex-1 justify-center-safe gap-3 items-center'>
      <Text className='text-3xl text-white font-extrabold'>Before We Get Started...</Text>
      <Text className='text-green font-bold'>We need to Access Your Phone Permissions</Text>
      <Pressable className='bg-blend-saturation outline-2 bg-green outline-purple p-4 rounded-2xl'>
        <Text className='text-center font-bold text-white'>Grant Permissions</Text>
      </Pressable>
      <Pressable className='bg-blend-saturation outline-2 bg-red-500 outline-purple p-4 rounded-2xl' onPress={() => {router.push('/')}}>
        <Text className='w-17 text-center text-white font-black'>Get Back</Text>
      </Pressable>
    </View>
  )
}