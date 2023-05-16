import Home from './src/pages/Home';
import PlanView from './src/pages/PlanView';
import PlansFeed from './src/pages/PlansFeed';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="PlansFeed" component={PlansFeed} options={{title:"Explorar"}} />
          <Stack.Screen name="PlanView" component={PlanView} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}