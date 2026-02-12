import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
// import LotsOfStyles from './assets/components/LotsOfStyles';
// import FixedDimensionsBasics from './assets/components/FixedDimensionsBasics';
import FlexDimensionsBasics from './assets/components/FlexDimensionsBasics';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LotsOfStyles /> */}
      {/* <FixedDimensionsBasics /> */}
      <FlexDimensionsBasics />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'center',
  },
});
