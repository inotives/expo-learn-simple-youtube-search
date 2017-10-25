import React, { Component } from 'react';
import { View } from 'react-native';
import YTSearch from 'youtube-api-search';

//Components
import SearchBar from './components/SearchBar';
import AppHeader from './components/AppHeader';
import VideoList from './components/VideoList';

const API_KEY = 'key-in-your-youtube-apikey-here';

export default class App extends Component {

  state = {
    loading: false,
    videos:[]
  }

  componentWillMount (){
    this.searchYT("Little Baby Bum")
  }

  onPressSearch = term => {
    this.searchYT(term);
  }

  searchYT = term => {
    this.setState({loading: true});
    YTSearch({key: API_KEY, term}, videos => {
      console.log(videos)
      this.setState({
        loading: false,
        videos
      });
    })
  }

  render() { 
    const {loading, videos} = this.state
    return (
      <View style={{flex: 1, backgroundColor: '#ddd'}}>
        <AppHeader headerText='Youtube Search' />
        <SearchBar 
          loading={loading}
          onPressSearch={ this.onPressSearch }
        />

        <VideoList videos={videos} />

      </View>
    );
  }
}

