// app/_layout.tsx
import React from 'react';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { Auth0Provider } from '@auth0/auth0-react';
import { authConfig } from '@/constants/authConfig';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Auth0Provider
            domain={authConfig.domain}
            clientId={authConfig.clientId}
            authorizationParams={authConfig.authorizationParams}
        >
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                    headerShown: false,
                    tabBarButton: HapticTab,
                    tabBarBackground: TabBarBackground,
                    tabBarStyle: Platform.select({
                        ios: {
                            // Use a transparent background on iOS to show the blur effect
                            position: 'absolute',
                        },
                        default: {},
                    }),
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        tabBarStyle: { display: 'none' },
                        headerShown: false,
                    }}
                />
                <Tabs.Screen
                    name="explore"
                    options={{
                        tabBarStyle: { display: 'none' },
                        headerShown: false,
                    }}
                />
                <Tabs.Screen
                    name="login"
                    options={{
                        tabBarStyle: { display: 'none' },
                        headerShown: false,
                    }}
                />

            </Tabs>
        </Auth0Provider>
    );
}
