import React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function Unauthorised() {
    const router = useRouter();

    // @ts-ignore
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Access Denied</Text>
                <Text style={styles.subtitle}>You must be logged in to view this page.</Text>
                <Pressable style={styles.loginButton} onPress={() => router.replace('/(tabs)/login')}>
                    <Text style={styles.loginButtonText}>Go to Login</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C4532', // 深绿色背景
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 30,
        width: '100%',
        maxWidth: 350,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1C4532',
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 16,
        color: '#333',
        marginBottom: 24,
        textAlign: 'center',
    },
    loginButton: {
        backgroundColor: '#2F855A',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
