import { View, Text, ImageBackground, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { GalleryPreviewData } from '@/constants/models/AffirimationCategery'
import AFFIRMATION_GALLERY from '@/constants/affirimation-gallery'
import AppGradient from '@/components/AppGradient'
import AntDesign from '@expo/vector-icons/AntDesign';

const AffirmationsPractice = () => {
    const { itemid } = useLocalSearchParams();

    const [affirmation, setAffirmation] = useState<GalleryPreviewData>();
    
    const [sentences, setSentences] = useState<String[]>([]);

    useEffect(() => {
        // console.log('Current itemId:', itemid);

        for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
            const affirmationsData = AFFIRMATION_GALLERY[idx].data;

            const affirmationToStart = affirmationsData.find((a) => a.id === Number(itemid));

            if (affirmationToStart) {
                setAffirmation(affirmationToStart);

                const affirimationsArray = affirmationToStart.text.split(".");

                // Remove the last element if it's an empty string
                if (affirimationsArray[affirimationsArray.length - 1] === '') {
                    affirimationsArray.pop();
                }
                

                setSentences(affirimationsArray);

                return;
            }
        }
    }, [itemid]);

    // console.log('Current affirmation:', affirmation);
    return (
        <View className='flex-1'>
            {affirmation?.image && (
                <ImageBackground source={affirmation.image} resizeMode='cover' className='flex-1'>
                    <AppGradient colors={["rgba(0, 0, 0, 0.3)", "rgba(0, 0, 0, 0.9)"]}>
                        <Pressable onPress={() => router.back()} className='absolute top-16 left-8 z-10'>
                            <AntDesign name="leftcircleo" size={40} color="white" />
                        </Pressable>

                        <ScrollView className='mt-20' showsVerticalScrollIndicator={false}>
                            <View className='h-full justify-center'>
                                <View className='h-4/5 justify-center mt-20'>
                                {sentences.map((sentence, idx)=>(
                                    <Text className='text-white text-3xl mb-12 font-bold text-center'>
                                        {sentence}.
                                        </Text>
                                ))}
                                </View>
                            </View>
                        </ScrollView>
                    </AppGradient>
                </ImageBackground>
            )}
        </View>
    );
}

export default AffirmationsPractice;
