import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
// import Flex from './assets/components/Flex';
// import FlexDirectionBasics from './assets/components/FlexDirectionBasics';
// import DirectionLayout from './assets/components/DirectionLayout';
// import JustifyContentBasics from './assets/components/JustifyContentBasics';
import AlignItemsLayout from './assets/components/AlignItemsLayout';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* <Flex /> */}
      {/* <FlexDirectionBasics /> */}
      {/* <DirectionLayout/> */}
      {/* <JustifyContentBasics/> */}
      <AlignItemsLayout/>
      <StatusBar />
    </View>
  );
}

