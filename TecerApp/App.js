import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/components/LoginScreen';
import HomeScreen from './src/components/HomeScreen';
import DocumentosPessoaisScreen from './src/components/DocumentosPessoaisScreen';
import DocumentosPessoaJuridicaScreen from './src/components/DocumentosPessoaJuridicaScreen';
import FinanceiroScreen from './src/components/FinanceiroScreen';
import SeusImpostosScreen from './src/components/SeusImpostosScreen';
import SolicitacoesScreen from './src/components/SolicitacoesScreen';
import HonorariosScreen from './src/components/HonorariosScreen';
import DuvidasFrequentesScreen from './src/components/DuvidasFrequentesScreen';
import FaleComManuScreen from './src/components/FaleComManuScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DocumentosPessoaisScreen" component={DocumentosPessoaisScreen} />
        <Stack.Screen name="DocumentosPessoaJuridicaScreen" component={DocumentosPessoaJuridicaScreen} />
        <Stack.Screen name="FinanceiroScreen" component={FinanceiroScreen} />
        <Stack.Screen name="SeusImpostosScreen" component={SeusImpostosScreen} />
        <Stack.Screen name="SolicitacoesScreen" component={SolicitacoesScreen} />
        <Stack.Screen name="HonorariosScreen" component={HonorariosScreen} />
        <Stack.Screen name="DuvidasFrequentesScreen" component={DuvidasFrequentesScreen} />
        <Stack.Screen name="FaleComManuScreen" component={FaleComManuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
