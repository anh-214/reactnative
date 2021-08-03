import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Dimensions, StatusBar, ScrollView, RefreshControl, FlatList, SectionList } from 'react-native';

export default function App() {
  const [name,setName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  function onClickHandler (){
    setSubmitted(!submitted)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nhập tên của bạn:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Nhập ở đây"
        onChangeText={(value)=>setName(value)}
      />
      <Button
        title= {submitted ? 'Submit' : 'Clear'}
        onPress={onClickHandler}
      />
      {!submitted ? 
      <Text style={styles.text}>Tên của bạn là: {name}</Text>
      :
      null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight,
    alignItems: 'center'
  },
  text:{
    fontSize: 30,
    color: 'black'
  },
  textInput:{
    borderWidth:1,
    margin:10,
    padding:10,
    borderRadius:20,
    width: '50%',
    textAlign: 'center'
  }
});
