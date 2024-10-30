import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'
import AFFIRMATION_GALLERY from '@/constants/affirimation-gallery'
import GuidedAffirimationGallery from '@/components/GuidedAffirimationGallery'

const Affirmations = () => {
    return (
        <View className="flex-1">
            <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
                <ScrollView showsVerticalScrollIndicator={false} className='mt-5'>
                    <Text className='text-zinc-50 text-3xl font-bold mt-5'>
                        Change your belief with affirmations
                    </Text>
                    {AFFIRMATION_GALLERY.map((g) => (
                        <GuidedAffirimationGallery 
                            key={g.title} 
                            title={g.title} 
                            previews={g.data}
                        />
                    ))}
                </ScrollView>
            </AppGradient>
        </View>
    )
}

export default Affirmations
