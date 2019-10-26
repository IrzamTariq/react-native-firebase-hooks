import React from 'react';
import {StyleSheet,View,Dimensions} from 'react-native';
import MainNav from './src/MainNav';
import Detail from './src/DetailNav'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'

const Switch=createSwitchNavigator({
  Main:{screen:MainNav},
  Detail:{screen:Detail},
})

const Contain=createAppContainer(Switch)
const App= () => {
  return (
    <Contain/>
  );
};


export default App;
