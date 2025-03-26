import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from './components/navigation/app.navigation';
import { SafeAreaView, StatusBar, Platform, StatusBar as RNStatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {

  return (
    // <SafeAreaProvider>
    <SafeAreaView style={{
      flex: 1, backgroundColor: 'transparent',
      paddingTop: Platform.OS === "android" ? RNStatusBar.currentHeight : 0 // Fix status bar trên Android
    }}>
      <StatusBar translucent={true} barStyle='default' backgroundColor="transparent" />
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </SafeAreaView>
    // </SafeAreaProvider>

  );
}

export default App;
