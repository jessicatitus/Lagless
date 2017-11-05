import NavigationBar from 'react-native-navbar'
import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  DatePickerIOS,
} from 'react-native'
import Autocompletecomponent from './autocomplete';

class LocationAutocompleteScreen extends Component {
  render() {
    return (
    <View style={styles.container}>

      <Autocompletecomponent
        id="origin"
        placeholder="Origin"
      />

      <Autocompletecomponent
        id="destination"
        placeholder="Destination"
      />

      <PickerComponent/>
    </View>
  )}
}

class PickerComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      display: false,
      date: new Date(),
      text: ''
    }
  }

  toggleDisplay = ()=> this.setState({display: !this.state.display})

  render(){
    return(
      <View>
        <TextInput
          onFocus={this.toggleDisplay}
          onBlur={this.toggleDisplay}
          style={{height: 40, borderColor: 'lightgray', borderWidth: 1, backgroundColor: 'white', width: 200, textAlign: 'center', marginLeft: 90, marginTop: 25}}
          value={this.state.text}
          placeholder='Arrival Date'
        />

        {
            !this.state.display ? null :
            (<DatePickerIOS
              date={(this.state && this.state.date) || new Date()}
              onDateChange={(newDate) => (
                this.setState({
                  date: newDate,
                  text: newDate.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
                })
              )}
              mode={'date'}
              timeZoneOffsetInMinutes={-1 * new Date().getTimezoneOffset()}
            />)
        }
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 25
  },
  textInput: {
    backgroundColor: 'white'
  },
  datePickerIOS: {
    textAlign: 'center',

  }
});

export default LocationAutocompleteScreen;
