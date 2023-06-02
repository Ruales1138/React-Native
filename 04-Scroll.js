import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

export default function App() {
  return (
    <ScrollView>
      <Text style={{fontSize: 96}}>Scroll me plz</Text>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Text style={{fontSize: 96}}>What's the best</Text>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Text style={{fontSize: 96}}>Framework around?</Text>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Text style={{fontSize: 96}}>React Native</Text>
    </ScrollView>
  );
};
