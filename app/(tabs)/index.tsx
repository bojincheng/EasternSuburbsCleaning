import React from 'react';
import Dashboard from '@/components/Dashboard';
import { useAuth0 } from '@auth0/auth0-react';
import { View, ActivityIndicator } from 'react-native';

export default function HomeScreen() {
    const { isLoading } = useAuth0();

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return <Dashboard />;
}
