import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { GalleryPreviewData } from '@/constants/models/AffirimationCategery'
import AFFIRMATION_GALLERY from '@/constants/affirimation-gallery'

const AffirmationsPractice = () => {
    const { itemId } = useLocalSearchParams();

    const [affirmation, setAffirmation] = useState<GalleryPreviewData>();
    useEffect(() => {
        for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++){
            const affirmationsData = AFFIRMATION_GALLERY[idx].data;

            const affirmationToStart = affirmationsData.find((a) => a.id === Number(itemId));

            if (affirmationToStart) {
                setAffirmation(affirmationToStart);

                return;
            }
        }
    }, [])
    return (
        <View>
            <Text>AffirmationsPractice</Text>
        </View >
    )
}

export default AffirmationsPractice