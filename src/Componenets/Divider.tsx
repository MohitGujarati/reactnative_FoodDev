import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DividerWithLines = ({text, isDarkMode}) => {
  const textColor = isDarkMode ? 'white' : 'black';
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <View style={styles.textView}>
        <Text style={[styles.text, {color: textColor}]}>{text}</Text>
      </View>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    flex: 1,
    margin: 15,
    height: 1,
    backgroundColor: 'grey',
  },
  textView: {
    marginHorizontal: 10,
  },
  text: {
    fontSize: 16,
    color: '',
  },
});

export default DividerWithLines;
