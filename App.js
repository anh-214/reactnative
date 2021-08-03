import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Dimensions, StatusBar, ScrollView, RefreshControl, FlatList, SectionList } from 'react-native';

export default function App() {
  
  return (
    <View>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight
  },
  item:{
    flex:1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontSize: 30,
    color: 'black'
  }
});
