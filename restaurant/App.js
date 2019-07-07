/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Alert, Platform, StyleSheet, Text, View,ImageBackground ,Picker,
       Image, Button} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import Welcome from './welcome';
import RestaurantList from './RestaurantList';
import MenuList from './MenuList';
import OrderPage from './OrderPage';
import CheckOut from './CheckOut';



const NavigationApp = createStackNavigator ({
  welcome: {screen: Welcome},
  resturantList: {screen: RestaurantList},
  menuList: {screen: MenuList},
  orderPage: {screen: OrderPage},
  checkout: {screen: CheckOut}
  });

const Container = createAppContainer(NavigationApp);

type Props = {};
export default class App extends Component<Props> {


  render() {
    return (
      <Container />
    );
  }
}
