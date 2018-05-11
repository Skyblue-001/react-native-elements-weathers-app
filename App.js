import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, StatusBar } from 'react-native';
import Weather from "./Weather";

const API_KEY = "bd3c0c97f0d8f2875b3e187b3cca452e";

export default class App extends React.Component {
  state = {
    isLoaded: false,
    error: null,
    temperature:null,
    name:null
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude)
      },
      error => { 
        this.setState({
          error: error
        });
      }
    );
  }
  _getWeather = (lat,lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState({
        temperature: json.main.temp,
        name: json.weather[0].main,
        isLoaded: true
      });
     })
  }
  
  render() {
    const { isLoaded, error } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ?  <Weather /> : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the Weather</Text>
            {error ? <Text>{error}</Text> : null}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'flex-start',
    // alignItems: 'stretch',
    // flexDirection:'row',
    // flexWrap: 'wrap'
  },
  errorText: {
    color: "red",
    backgroundColor: "transparent",
    marginBottom: 10
  },
  loading: {
    flex: 1,
    backgroundColor:"#FDF6AA",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 180
  }
});
