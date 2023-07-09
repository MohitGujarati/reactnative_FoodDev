import {Dimensions, StyleSheet} from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
  container: {
    width:windowWidth/2,
    backgroundColor:'#ff0000',
    elevation:10,
    borderRadius:20,
    height:300

  },
});

