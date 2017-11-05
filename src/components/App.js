import NavigationBar from 'react-native-navbar'

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LocationAutocompleteScreen from './LocationAutocompleteScreen';


const Root = () => (
  <Router>
   <Stack key="root">
     <Scene key="lagless" component={Lagless} title="Lagless"/>
     <Scene key="register" component={Register} title="Register"/>
     <Scene key="home" component={Home}/>
   </Stack>
 </Router>
);

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
        <Button title="Go to Register page" onPress={Actions.register} />
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
