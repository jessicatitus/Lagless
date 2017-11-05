import  React, { Component }  from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity
} from 'react-native';

import Autocomplete from 'react-native-autocomplete-input';
import Airports from '../../airports.json';

class Autocompletecomponent extends Component {

  state = { airports: [], query: '' }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({ airports: Airports });
  }

  findAirport(query) {
    if (query === '' || !query) {
      return [];
    }
    const { airports } = this.state;
    const regex = new RegExp(`${query.trim()}`, 'i');
    return airports.filter(airport => airport.City.search(regex) >= 0);
  }

  render() {
    const { query } = this.state;
    const airportslist = this.findAirport(query);
    return (

      <View>
        <Autocomplete
          containerStyle={styles.autocompleteContainer}
          data={airportslist}
          defaultValue={query}
          onChangeText={text => this.setState({ query: text })}
          placeholder={this.props.placeholder}
          renderItem={({ City, Country }) => (
            <TouchableOpacity onPress={() => this.setState({ query: `${City}, ${Country}` })} style={styles.touchableOpacity}>
              <Text style={styles.itemText}>
                {City}, {Country}
              </Text>
            </TouchableOpacity>
          )}
        />
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
  autocompleteContainer: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 25
  },
  touchableOpacity: {
    opacity: 1
  },
  itemText: {
    fontSize: 15,
    margin: 2,
    color: 'black'
  },
  descriptionContainer: {
    // `backgroundColor` needs to be set otherwise the
    // autocomplete input will disappear on text input.
    backgroundColor: '#F5FCFF',
    marginTop: 8
  },
  infoText: {
    textAlign: 'center'
  },
  titleText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center'
  },
  directorText: {
    color: 'grey',
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'center'
  },
  openingText: {
    textAlign: 'center'
  }
});
export default Autocompletecomponent;
