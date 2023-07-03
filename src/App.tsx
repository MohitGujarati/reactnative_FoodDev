import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './Screens/Home'
import Login from './Screens/Login'

const App = () => {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [email, setEmail] = React.useState('');

  const handleLogin = (loggedIn: boolean, email: string) => {
    setLoggedIn(loggedIn);
    setEmail(email);
  };
  return (
    <View style={{ flex: 1 }}>
    {loggedIn ? (
      <Home email={email} />
    ) : (
      <Login onLogin={handleLogin} />
    )}
  </View>
  )
}

export default App

const styles = StyleSheet.create({})