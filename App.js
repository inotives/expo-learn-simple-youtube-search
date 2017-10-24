import React, { Component } from 'react';
import { View } from 'react-native';
import SearchBar from './components/SearchBar';
import AppHeader from './components/AppHeader';

export default class App extends Component {

  onPressSearch = term => {
    console.log(term);
  }

  render() { 
    return (
      <View style={{flex: 1, backgroundColor: '#ddd'}}>
        <AppHeader headerText='Youtube Search' />
        <SearchBar 
          onPressSearch={ this.onPressSearch }
        />
        {/*VideoList*/}

      </View>
    );
  }
}

