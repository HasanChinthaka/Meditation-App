import { View, Text, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from "expo-status-bar";
import beach from '../assets/meditation-images/beach.webp';
import CustomeButton from '@/components/CustomeButton';

const App = () => {
  return (
    <View className='flex-1'>
      <ImageBackground
        source={beach}
        resizeMode='cover'
        className='flex-1'
      >
        <LinearGradient className='flex-1' colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}>
          <SafeAreaView className='flex-1 mx-8 my-8 justify-between mt-10'>
            <View>
              <Text className='text-center text-white font-bold mt-5 text-4xl'>Simple Meditation</Text>
              <Text className='text-center text-white text-regular text-2xl mt-3'>Simple Meditation for Everyone</Text>
            </View>
            <View>
              <CustomeButton onPress={() => console.log('tap')} title='Get-Started' />
            </View>
            <StatusBar style="light" />
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  )
}

export default App