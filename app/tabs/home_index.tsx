import React from 'react';
import Dashboard from '../../components/Dashboard';
import { useAuth0 } from '@auth0/auth0-react';
import { View, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
    const { isLoading, isAuthenticated } = useAuth0();
    const router = useRouter();

    React.useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.replace('/unauthorised');
        }
    }, [isLoading, isAuthenticated]);

    if (isLoading || !isAuthenticated) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return <Dashboard />;
}
