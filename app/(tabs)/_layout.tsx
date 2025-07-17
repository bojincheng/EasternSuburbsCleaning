import React from 'react';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabsLayout() {
    const colorScheme = useColorScheme();
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                tabBarButton: HapticTab,
                tabBarBackground: TabBarBackground,
                tabBarStyle: Platform.select({ ios: { position: 'absolute' }, default: {} }),
            }}
        >
            <Tabs.Screen
                name="index"
                options={{ tabBarStyle: { display: 'none' } }}
            />
            <Tabs.Screen
                name="explore"
            />
            <Tabs.Screen
                name="login"
                options={{ tabBarStyle: { display: 'none' } }}
            />
        </Tabs>
    );
}
