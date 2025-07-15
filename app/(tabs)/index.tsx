import React from 'react';
import Dashboard from '@/components/Dashboard';
import { useAuth0 } from '@auth0/auth0-react';
import { View, ActivityIndicator } from 'react-native';

export default function HomeScreen() {
    const { isLoading } = useAuth0();

    // 等待 Auth0Provider 初始化
    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    // 渲染你的 Dashboard，它内部会根据 isAuthenticated 自动显示登录或欢迎页
    return <Dashboard />;
}
