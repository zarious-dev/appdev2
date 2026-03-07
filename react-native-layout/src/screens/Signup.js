import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function Signup({ navigation }) {
    return (
        <View style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <Image source={require('../../assets/login.png')} style={styles.loginImage} />
                <Text style={styles.title}>Create Account</Text>
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
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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
        alignItems: 'center',
    },

    header: {
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 20,
    },

    loginImage: {
        width: 130,
        height: 130,
        resizeMode: 'contain',
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 5,
    },

    inputContainer: {
        width: '100%',
        paddingHorizontal: 50,
    },

    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 14,
        marginTop: 20,
        height: 50,
        backgroundColor: '#f9f9f9',
        width: '100%',
    },

    icon: {
        marginRight: 5,
    },

    input: {
        flex: 1,
        fontSize: 15,
        color: '#333',
    },

    buttonContainer: {
        width: '100%',
        paddingHorizontal: 50,
        marginTop: 40,
    },

    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        height: 50,
        backgroundColor: '#007AFF',
        width: '100%',
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },

    footerText: {
        fontSize: 14,
        color: '#000',
    },

    link: {
        fontSize: 14,
        color: '#007AFF',
        fontWeight: 'bold',
    },

})