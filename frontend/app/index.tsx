import { Pressable, Text, View } from "react-native";
import { router, Router } from "expo-router";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
export default function Index() {
  return (
    <View className="bg-darkblue flex-1 justify-center items-center gap-5">
      <FontAwesome6 name="screenpal" size={54} color="blue" />
      <Text className="text-2xl text-white font-bold">Wsido?</Text>
      <Pressable className="bg-green p-5 w-40 rounded-[10px] outline-4 outline-blue-700-500"onPress={() => router.push('/pages/main')}>
        <Text className="text-center font-bold text-[18px]">Get Started</Text>
      </Pressable>
    </View>
  );
} 