import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';

const foodImg =
  'data:image/png;base64,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'; // Replace with the actual image file path

const thingList = [
  {
    id: 1,
    title: 'Offer',
    subtitle: 'More',
    image: foodImg, // Replace with the actual image file path
  },
  {
    id: 2,
    title: 'Gourmets',
    subtitle: 'Selection',
    image: foodImg, // Replace with the actual image file path
  },
  {
    id: 3,
    title: 'Healthy',
    subtitle: 'Curated dishes',
    image: foodImg, // Replace with the actual image file path
  },
  {
    id: 4,
    title: 'Specials',
    subtitle: 'Limited Edition',
    image: foodImg, // Replace with the actual image file path
  },
  {
    id: 5,
    title: 'Breakfast',
    subtitle: 'Start Your Day',
    image: foodImg, // Replace with the actual image file path
  },
  // Add more items as needed
];

const Explore = ({isDarkMode}) => {
  const textColor = isDarkMode ? 'white' : 'black';
  const cardColor= isDarkMode?'black':'white'
  const renderCard = ({item}) => (
    <View style={[styles.card,{backgroundColor: cardColor},{borderColor: textColor}]}>
      <Image
        source={{uri: foodImg}}
        style={[styles.image, styles.marginbottom10]}
      />
      <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
      <Text
        style={[styles.subtitle, styles.marginbottom10, {color: textColor}]}>
        {item.subtitle}
      </Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={thingList}
        renderItem={renderCard}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    width: 110,
    height: 120,
    borderWidth:1,
    borderRadius: 10,
    
  },
  image: {
    margin:15,
    borderRadius: 10,
    borderWidth: 1,
    width: 50,
    height: 50,
  },
  title: {
    justifyContent: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 'normal',
  },
  marginbottom10: {
    marginBottom: 10,
  },
  textBlack: {
    color: 'black',
  },
});
