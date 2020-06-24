// import React from 'react';
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';

// import Home from './Home';
// import Login from './Login';
// import Welcome from './Welcome';
// import Register from './Register';
// import Category from './Category';
// import ProductDetails from './ProductDetails';
// import AboutUs from './AboutUs';

// const AppNavigator = createStackNavigator(
//   {
//     Home: {
//       screen: Home,
//       navigationOptions: () => ({
//         header: null,
//       }),
//     },
//     Welcome: {
//       screen: Welcome,
//       navigationOptions: () => ({
//         header: null,
//       }),
//     },
//     Login: {
//       screen: Login,
//       navigationOptions: () => ({
//         header: null,
//       }),
//     },
//     Register: {
//       screen: Register,
//       navigationOptions: () => ({
//         header: null,
//       }),
//     },
//     Category: {
//       screen: Category,
//       navigationOptions: () => ({
//         header: null,
//       }),
//     },
//     ProductDetails: {
//       screen: ProductDetails,
//       navigationOptions: () => ({
//         header: null,
//       }),
//     },
//     AboutUs: {
//       screen: AboutUs,
//       navigationOptions: () => ({
//         header: null,
//       }),
//     },
//   },
//   {
//     initialRouteName: 'AboutUs',
//   },
// );

// const AppContainer = createAppContainer(AppNavigator);

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }
import React from 'react';
import { createSwitchNavigator, createDrawerNavigator,
  createStackNavigator, createAppContainer,
  createBottomTabNavigator } from "react-navigation";


import Home from './Home';
import Login from './Login';
import Welcome from './Welcome';
import Register from './Register';
import Category from './Category';
import ProductDetails from './ProductDetails';
import AboutUs from './AboutUs'
import SideBar from './SideBar'
import MyProfile from './MyProfile';
import MyOrders from './MyOrders';

import Favourite from './Favourite';
import Search from './Search';
import Password from './Passwrod';
import TryAgain from './TryAgain';
import Calculator from './Calculator';
// import Step1 from './Step1';
// import Step2 from './Step2';
// import Step3 from './Step3';
// import Step4 from './Step4';
// import Step5 from './Step5';


const LoginNavigation = createStackNavigator({
  Welcome:{screen:Welcome},

  // Step1:{screen:Step1},
  // Step2:{screen:Step2},
  // Step3:{screen:Step3},
  // Step4:{screen:Step4},
  // Step5:{screen:Step5},

},{
  initialRouteName: "Welcome",
  headerMode: "none"
});



const HomeNavigator = createStackNavigator({
  Home: { screen: Home },
  Category:{screen:Category},
  ProductDetails:{screen:ProductDetails},
  Search:{screen:Search},


},{
  initialRouteName: "Home",
  headerMode: "none"
});



const Drawer = createDrawerNavigator(
  {
    Home: { screen: HomeNavigator },


    AboutUs:{screen:AboutUs},
    MyProfile:{screen: MyProfile},
    MyOrders:{screen:MyOrders}, 
    Favourite:{screen:Favourite},
    Login: { screen: Login },
    Register: { screen: Register },
    Password:{screen:Password},
    TryAgain:{screen:TryAgain},
    Calculator:{screen:Calculator}

  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    overlayColor: 'rgba(0, 0, 0, 0.7)',
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer }
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

const AppSwitchNavigator = createSwitchNavigator(
  {
    // Login: {screen: LoginNavigation},
    Dashboard: {screen: AppNavigator},
   
   
    
  }
);

const AppContainer = createAppContainer(AppSwitchNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}