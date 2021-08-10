import React from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';

export default class App extends React.Component {
  state = {
    objetive: []
  }

  componentDidMount() {
    axios.get(`http://192.168.0.21:3000/`)
      .then(res => {console.log(res.data) })
  }

  render() {
    return (
      <View>
        <Text>Objetivos Crear</Text>
      </View>
    )
  }
}