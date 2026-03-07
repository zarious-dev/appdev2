import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>

            {/* header */}
            <View style={styles.header}>
                <Image source={require('../../assets/login.png')} style={styles.loginImage} />
                <Text style={styles.title}>Welcome</Text>
            </View>

            {/* Input Fields */}
            <View style={styles.inputContainer}>

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

            </View>

            {/* Login Button */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Todo')}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.link}>Sign Up</Text>
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
        marginTop: 90,
        marginBottom: 30,
    },

    loginImage: {
        width: 150,
        height: 150,
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
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        height: 50,
        backgroundColor: '#007AFF',
        width: '100%',
        paddingHorizontal: 110,
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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