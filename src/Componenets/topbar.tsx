import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  useColorScheme,
  Dimensions,
  ListRenderItem,
  TextInput,
} from 'react-native';
import React from 'react';

//getting screen dimensions
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Topbaritems = ({isDarkMode}: any) => {
  const textColor = isDarkMode ? 'white' : 'black';

  return (
    <View style={[styles.container,styles.Colspaceing]}>
      <View style={[styles.flexRow]}>
        {/* Firstcol */}
        <View style={[styles.flexCol,styles.Colspaceing,]}>
          <TextInput style={[styles.firstcolitems]} placeholder="ItemCount" />
          <TextInput style={[styles.firstcolitems,{marginTop:10}]} placeholder="ItemCount" />
          <TextInput style={[styles.firstcolitems]} placeholder="ItemCount" />
          <TextInput style={[styles.firstcolitems,{marginTop:30}]} placeholder="ItemCount" />
        </View>
        {/* Secondcol */}
        <View style={[styles.flexCol,styles.Colspaceing]}>
          <View style={[styles.flexRow, styles.customewidth,styles.rowspacing]}>
            <TextInput style={[styles.secondRowitems]} placeholder="ItemCount" />
            <TextInput style={[styles.secondRowitems]} placeholder="ItemCount" />
            <TextInput style={[styles.secondRowitems]} placeholder="ItemCount" />
          </View>
          <TextInput style={[styles.secondcolitems]} placeholder="ItemCount" />
          <TextInput style={[styles.secondcolitems]} placeholder="ItemCount" />
          <TextInput style={[styles.secondcolitems]} placeholder="ItemCount" />
        </View>
        {/* Thirdcol */}
        <View style={[styles.flexCol,styles.Colspaceing]}>
          <View style={[styles.flexRow, styles.customewidth,styles.rowspacing]}>
            <TextInput style={[styles.thirdRowitem]} placeholder="ItemCount" />
            <TextInput style={[styles.thirdRowitem]} placeholder="ItemCount" />
            <TextInput style={[styles.thirdRowitem]} placeholder="ItemCount" />
          </View>
          <TextInput style={[styles.thirdcolitem]} placeholder="ItemCount" />

          <View style={[styles.flexRow,styles.rowspacing]}>
            <TextInput style={[styles.thirdcolrowitem]} placeholder="ItemCount" />
            <TextInput style={[styles.thirdcolrowitem]} placeholder="ItemCount" />
          </View>
          <Text >Balance:0.00</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    padding: 10,
    backgroundColor: '#fff',
    elevation: 10,
    borderRadius: 20,
    height: 300,
  },

  firstcolitems:{
    height:34,
    color:'#000',
    backgroundColor:'#ffff00',
    borderRadius:8,
    borderWidth:1,
    borderColor:'#000',
    marginBottom:20,

  },

  secondRowitems:{
    height:34,
    color:'#000',
    backgroundColor:'#0000ff',
    borderRadius:8,
    borderWidth:1,
    borderColor:'#000',
    marginBottom:20,
  },

  secondcolitems:{
    height:34,
    color:'#000',
    width:190,
    marginLeft:5,
    backgroundColor:'#ff00ff',
    borderRadius:8,
    borderWidth:1,
    borderColor:'#000',
    marginTop:7,
  },

  thirdRowitem:{
    height:34,
    color:'#000',
    backgroundColor:'#408080',
    borderRadius:8,
    borderWidth:1,
    borderColor:'#000',
    
  },

  thirdcolitem:{
    height:34,
    color:'#000',
    width:105,
    backgroundColor:'#804000',
    borderRadius:8,
    borderWidth:1,
    borderColor:'#000',
    marginTop:27,
  },

  thirdcolrowitem:{
    height:34,
    color:'#000',
    backgroundColor:'#00ff00',
    borderRadius:18,
    width:50,
    borderWidth:1,
    borderColor:'#000',
    marginTop:7,
  },



  rowoneitesms: {
    borderRadius: 20,
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    margin: 1,
    height: windowHeight / 25,
    fontSize: 12,
    padding: 10,
    marginBottom:0,
    borderWidth: 1,
    borderColor: '#000',
  },
  customewidth: {
    width: windowWidth / 2,
  },
  flexRow: {
    flexDirection: 'row',
  
  },

  flexCol: {
    flexDirection: 'column',
  },
  Colspaceing:{
    marginTop:10
  },
  rowspacing:{
    marginLeft:3,
    
  }
});
export default Topbaritems;
