import { View, Text, FlatList, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import { GalleryPreviewData } from '@/constants/models/AffirimationCategery';
import { Link } from 'expo-router';

interface GuidedAffirimationGalleryProps {
    title: string;
    previews: GalleryPreviewData[];
}

const GuidedAffirimationGallery = ({ title, previews }: GuidedAffirimationGalleryProps) => {
    return (
        <View className='my-5'>
            <View className='mb-5'>
                <Text className='text-white font-bold text-3xl'>{title}</Text>
            </View>
            <FlatList
                data={previews}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                renderItem={({ item }) => (
                    <Link href={{ pathname: '/(tabs)/affirmations', params: { id: item.id } }} asChild>
                        <Pressable onPress={() => console.log('Pressed!')}>
                            <View>
                                <Image
                                    source={item.image} // Ensure item.image is valid
                                    resizeMode='cover' // Maintain aspect ratio
                                    style = {{marginEnd: 20, borderRadius: 8, height: 150, width: 150, marginBottom: 25, marginTop: 10}}
                                    onLoadStart={() => console.log('Loading image...')} // Optional: handle loading
                                    onError={() => console.log('Error loading image')} // Handle image load errors
                                />
                            </View>
                        </Pressable>
                    </Link>
                )}
            />
        </View>
    );
}

export default GuidedAffirimationGallery;
