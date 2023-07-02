import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Discounted from '../Componenets/Discounted';
import ProfileDetails from '../Componenets/ProfileDetails';

const Home = () => {
  return (
    <View>
      <ProfileDetails />
      <Discounted />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
