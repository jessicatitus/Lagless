import NavigationBar from 'react-native-navbar'
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LocationAutocompleteScreen from './LocationAutocompleteScreen';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
          <NavigationBar
            title={{ title: 'Lagless', tintColor: 'black', }}
            leftButton={{ title: '*', }}
            rightButton={{ title: 'i', }}
            style={{ backgroundColor: "white", }}
            statusBar={{ tintColor: "white", }}
          />
        <LocationAutocompleteScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});
