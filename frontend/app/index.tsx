import { BackHandler, Platform, Pressable, Text, View, Image } from "react-native";
import { router, Router } from "expo-router";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import DeviceActivityAndroid from '@breakr/react-native-device-activity-android'
export default function Index() {
  const ExitApp = () => {
    if(Platform.OS == "android"){
      BackHandler.exitApp()
    }
  }
  const ActivStatus = async () => {
    const status = await DeviceActivityAndroid.getPermissionsStatus()
    console.log(status)

  const Accessibility = await DeviceActivityAndroid.requestAccessibilityPermission()
  const Overlay = await DeviceActivityAndroid.requestOverlayPermission()
  const Usage =  await DeviceActivityAndroid.requestUsageAccessPermission()
  const Check = await DeviceActivityAndroid.isServiceRunning()
    if(!Check){
    Accessibility
    Overlay
    Usage
    }else{
      router.push('/pages/next')
    }
  }

  return (
    <View className="bg-white flex-1 justify-evenly items-center gap-5">
      <View className="flex justify-center items-center gap-2 m-3">
    <Text className="text-4xl text-black font-light text-left">Before We Started</Text>

      </View>
      <View className="items-center gap-5">
        <FontAwesome6 name="mobile" size={180} color="black"/>
         <Text className="text-center text-[19px] p-4">Please allow us to access some permissions on your phone</Text>
      </View>
      <View className="items-center gap-3">
          <Text className="text-2xl">Like This <FontAwesome6 name="arrow-down" size={21}/></Text>
        <Image source={require('../assets/images/example.png')} className="bg-white w-84 h-54 rounded-lg object-scale-down"/>
<Pressable className="bg-black p-5 w-90 rounded-[40px] outline-4 outline-gray-700" onPress={ActivStatus}>
        <Text className="text-center font-bold text-[18px] text-white">Grant Permissions</Text>
      </Pressable>
      <Text className="underline p-0.5" onPress={ExitApp}>Not Now</Text>
      </View>
    </View>
  );
} 