import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Platform,
    ImageBackground
} from 'react-native';
import { useAuth0 } from '@auth0/auth0-react';
import Unauthorised from './Unauthorised';
import LoginButton from './SignInPage';

// @ts-ignore
export default function Dashboard() {
    const { isLoading, isAuthenticated, user, logout } = useAuth0();

    if (isLoading) {
        return (
            <View style={styles.center}>
                <Text style={styles.loadingText}>Loading…</Text>
            </View>
        );
    }

    if (!isAuthenticated) {
        return <Unauthorised />;
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Logo */}
            <Image
                source={require('../assets/Logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>DongJiao Clean</Text>
            </View>

            {/* Profile Section */}
            <View style={styles.profileSection}>
                {user?.picture && (
                    <Image source={{ uri: user.picture }} style={styles.avatar} />
                )}
                <Text style={styles.welcomeText}>Hello, {user?.name}</Text>
                <Text style={styles.emailText}>{user?.email}</Text>
            </View>

            {/* Three Modules */}
            <View style={styles.modulesRow}>
                <TouchableOpacity style={styles.moduleCard}>
                    <Text style={styles.moduleTitle}>Messages</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.moduleCard}>
                    <Text style={styles.moduleTitle}>Images</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.moduleCard}>
                    <Text style={styles.moduleTitle}>Profile</Text>
                </TouchableOpacity>
            </View>

            {/* Log Out Button */}
            <TouchableOpacity
                style={styles.logoutButton}
                onPress={() =>
                    logout({
                        logoutParams: {
                            returnTo:
                                Platform.OS === 'web' ? window.location.origin : undefined
                        }
                    })
                }
            >
                <Text style={styles.logoutText}>Log Out</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingText: {
        fontSize: 18,
        color: '#fff'
    },
    container: {
        padding: 20,
        alignItems: 'center',
        flexGrow: 1,
        backgroundColor: 'linear-gradient(180deg, #1C4532 0%, #496A5C 100%)',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 16
    },
    header: {
        backgroundColor: '#1C4532',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 12,
        marginBottom: 24,
        alignItems: 'center'
    },
    headerTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    profileSection: {
        alignItems: 'center',
        marginBottom: 32
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#fff'
    },
    welcomeText: {
        fontSize: 20,
        color: '#fff',
        marginTop: 12
    },
    emailText: {
        fontSize: 14,
        color: '#ccc',
        marginTop: 4
    },
    modulesRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 32
    },
    moduleCard: {
        flex: 1,
        backgroundColor: '#496A5C',
        paddingVertical: 16,
        marginHorizontal: 6,
        borderRadius: 8,
        alignItems: 'center'
    },
    moduleTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600'
    },
    logoutButton: {
        backgroundColor: '#fff',
        paddingVertical: 14,
        paddingHorizontal: 40,
        borderRadius: 8
    },
    logoutText: {
        color: '#1C4532',
        fontSize: 16,
        fontWeight: 'bold'
    }
});
