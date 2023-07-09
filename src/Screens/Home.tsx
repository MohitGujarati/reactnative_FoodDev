import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';
import Discounted from '../Componenets/Discounted';
import ProfileDetails from '../Componenets/ProfileDetails';
import Explore from '../Componenets/Explore';
import DividerWithLines from '../Componenets/Divider';
import Topbaritems from '../Componenets/topbar';


interface HomeProps {
  email: string;
}

const Home = ({email}:HomeProps) => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const textColor = isDarkMode ? 'black' : 'white';
  return (

    <View style={[{backgroundColor: textColor}]}>
      <Button
        title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        onPress={toggleDarkMode}
      />
      <Topbaritems isDarkMode={isDarkMode}/>
      <ProfileDetails isDarkMode={isDarkMode} email={email} />
      <Discounted isDarkMode={isDarkMode} />
      <DividerWithLines text={'Explore'} isDarkMode={isDarkMode} />
      <Explore isDarkMode={isDarkMode} />
      <DividerWithLines text={'ALL RESTURANTS '} isDarkMode={isDarkMode} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
