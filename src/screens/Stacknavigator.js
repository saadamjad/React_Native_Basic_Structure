import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './Home';
import Login from './Login';
import Welcome from './Welcome';
import Register from './Register';
import Category from './Category';
import ProductDetails from './ProductDetails';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Welcome: {
      screen: Welcome,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Login: {
      screen: Login,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Register: {
      screen: Register,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Category: {
      screen: Category,
      navigationOptions: () => ({
        header: null,
      }),
    },
    ProductDetails: {
      screen: ProductDetails,
      navigationOptions: () => ({
        header: null,
      }),
    },
  },
  {
    initialRouteName: 'ProductDetails',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
