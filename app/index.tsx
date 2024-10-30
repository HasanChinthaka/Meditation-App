import { View, Text, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from "expo-status-bar";
import beach from '../assets/meditation-images/beach.webp';
import CustomeButton from '@/components/CustomeButton';
import { Href, useRouter } from 'expo-router';
import AppGradient from '../components/AppGradient';

const App = () => {

  const router = useRouter();

  return (
    <View className='flex-1'>
      <ImageBackground
        source={beach}
        resizeMode='cover'
        className='flex-1'
      >
        <AppGradient colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}>          
            <SafeAreaView className='flex-1 px-5 py-8 justify-between mt-10'>
              <View>
                <Text className='text-center text-white font-bold mt-5 text-4xl'>Simple Meditation</Text>
                <Text className='text-center text-white text-regular text-2xl mt-3'>Simple Meditation for Everyone</Text>
              </View>
              <View>
                <CustomeButton onPress={() => router.push("/nature-meditate" as Href<string | object>)} title='Get-Started' />
              </View>
              <StatusBar style="light" />
            </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  )
}

export default App