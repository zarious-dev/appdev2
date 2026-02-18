import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function Signup() {
    return (
        <View style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <Image source={require('../../assets/login.png')} style={styles.loginImage} />
                <Text style={styles.title}>Create Account</Text>
                <Text style={styles.subtitle}>Sign up to get started</Text>
            </View>

            {/* Input Fields */}
            <View style={styles.inputContainer}>

                {/* Full Name Input */}
                <View style={styles.inputWrapper}>
                    <Ionicons name="person-outline" size={20} color="#888" style={styles.icon} />
                    <TextInput
                        placeholder="Enter your full name"
                        style={styles.input}
                        autoCapitalize="words"
                    />
                </View>

                {/* Email Input */}
                <View style={styles.inputWrapper}>
                    <Ionicons name="mail-outline" size={20} color="#888" style={styles.icon} />
                    <TextInput
                        placeholder="Enter your email"
                        style={styles.input}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                {/* Password Input */}
                <View style={styles.inputWrapper}>
                    <Ionicons name="lock-closed-outline" size={20} color="#888" style={styles.icon} />
                    <TextInput
                        placeholder="Enter your password"
                        style={styles.input}
                        secureTextEntry={true}
                    />
                </View>

                {/* Confirm Password Input */}
                <View style={styles.inputWrapper}>
                    <Ionicons name="shield-checkmark-outline" size={20} color="#888" style={styles.icon} />
                    <TextInput
                        placeholder="Confirm your password"
                        style={styles.input}
                        secureTextEntry={true}
                    />
                </View>

            </View>

            {/* Signup Button */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Ionicons name="person-add-outline" size={20} color="#fff" style={styles.btnIcon} />
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>Already have an account? </Text>
                <TouchableOpacity>
                    <Text style={styles.link}>Login</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    header: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    loginImage: {
        width: 100,
        height: 100,
        marginBottom: 12,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },

    subtitle: {
        fontSize: 14,
        color: '#888',
        marginTop: 4,
    },

    inputContainer: {
        flex: 3,
        justifyContent: 'center',
        paddingHorizontal: 30,
    },

    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 12,
        marginBottom: 16,
        height: 50,
        backgroundColor: '#f9f9f9',
    },

    icon: {
        marginRight: 10,
    },

    input: {
        flex: 1,
        fontSize: 15,
        color: '#333',
    },

    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '85%',
        height: 50,
        backgroundColor: '#007AFF',
        borderRadius: 8,
    },

    btnIcon: {
        marginRight: 8,
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    footer: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    footerText: {
        fontSize: 14,
        color: '#555',
    },

    link: {
        fontSize: 14,
        color: '#007AFF',
        fontWeight: 'bold',
    },

})