import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './src/components/Main';
import { AppProvider } from './src/context/RecipesContext';
import SearchRecipeScreen from './src/screen/SearchRecipeScreen';
import RecipeDetails from './src/screen/RecipeDetails';
import mobileAds from 'react-native-google-mobile-ads';
import BannerAds from './src/components/BannerAds';
import StartingScreen from './src/screen/StartingScreen';
import Toast from 'react-native-toast-message';


const Stack = createStackNavigator();
export default App = () => {
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    mobileAds()
      .initialize()
      .then(adapterStatuses => {
        console.log('AdMob initialized', adapterStatuses);
      });
  }, []);


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if(isLoading){
    return <StartingScreen/>
  }

  return (
  <SafeAreaProvider>
    <NavigationContainer>
      <AppProvider>
        <StatusBar />
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name="Main" options={{ headerShown: false }} component={Main} />
          <Stack.Screen 
            name="SearchRecipe" 
            component={SearchRecipeScreen} 
            options={{
              headerTitle: 'Resultado de búsqueda',
              headerBackTitleVisible: false,
            }} 
          />
          <Stack.Screen name="RecipeDetails" component={RecipeDetails} options={{
              headerTitle: 'Detalles de la receta',
              headerBackTitleVisible: false,
            }} />
        </Stack.Navigator>
          <BannerAds /> 
       <Toast />
      </AppProvider>
    </NavigationContainer>
  </SafeAreaProvider>
  );
}

