import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ChooseProfile from '../pages/ChooseProfile';
import WhereToInvest from '../pages/WhereToInvest';
import HowToInvest from '../pages/HowToInvest';
import TopFundos from '../pages/TopFundos';
import Fund from '../pages/Fund';

const Routes: React.FC = () => {
  const AppStack = createStackNavigator();

  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="ChooseProfile" component={ChooseProfile} />
        <AppStack.Screen name="WhereToInvest" component={WhereToInvest} />
        <AppStack.Screen name="HowToInvest" component={HowToInvest} />
        <AppStack.Screen name="TopFundos" component={TopFundos} />
        <AppStack.Screen name="Fund" component={Fund} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
