import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Text>RTK</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
