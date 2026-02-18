import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
// import Login from './src/screens/Login';
import Signup from './src/screens/Signup';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Login /> */}
      <Signup />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
