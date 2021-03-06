import React from 'react';
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native';
// import Router from './src/routes';

// Screens
import HomeScreen from './src/Home/Home';
import InputScreen from './src/Input/Input';

// Packages
import {TabNavigator} from 'react-navigation';

import firebase from 'react-native-firebase';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // firebase things?
    };
  }

  componentDidMount() {
    // firebase things?
  }

  render() {
    return <MyApp/>
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   logo: {
//     height: 80,
//     marginBottom: 16,
//     width: 80,
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   modules: {
//     margin: 20,
//   },
//   modulesHeader: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   module: {
//     fontSize: 14,
//     marginTop: 4,
//     textAlign: 'center',
//   }
// });


const MyApp = TabNavigator(
    {

        Home: {
            screen: HomeScreen
        },

        SecondScreen: {
            screen: InputScreen
        },

    },

    {
      initialRouteName: 'Home'
    }

);