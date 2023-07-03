import { Button, StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


interface LoginProps {
  onLogin: (loggedIn: boolean, email: string) => void;
}


const Login = ({ onLogin }: LoginProps) => {

const [data ,setData]=useState('Hello World')


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

 

  const handleLogin = () => {
    // Perform login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    const loggedIn = true;
    onLogin(loggedIn, email);
  };

  return (
    <View style={styles.container}>
      <View style={styles.LoginContainer}>
     
    <TextInput
      style={styles.input}
      placeholder="Email"
      onChangeText={setEmail}
      value={email}
    />
    <TextInput
      style={styles.input}
      placeholder="Password"
      secureTextEntry
      onChangeText={setPassword}
      value={password}
    />
    <TouchableOpacity style={styles.button} onPress={handleLogin}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
    </View>
  </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
  
  },
  LoginContainer:{
    width:"90%",
    padding:10,
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    
  },
  input: {
    width: '80%',
    height: 40,
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  button: {
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
