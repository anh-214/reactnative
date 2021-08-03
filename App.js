import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Dimensions, StatusBar, ScrollView, RefreshControl, FlatList, SectionList } from 'react-native';

export default function App() {
  const [Items, setItems] = useState(2)
  const [Data,setData] = useState([
    {
      title: 'Title 1',
      data: ['Item 1-1','Item 1-2'],
    },
  ])
  const temp = Data.map((number)=>number)
  
  const [Refreshing, setRefreshing] = useState(false)
  function onRefresh(){
    setRefreshing(true)
    setItems(Items+1)
    setData([...Data,{
      title: 'Title '+Items,
      data: ['Item '+Items+'-1','Item '+Items+'-2']}
    ])
    setRefreshing(false)

  }
  return (
    <SectionList style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
        />
      }
      keyExtractor={(item,index)=> index.toString()}
      sections={Data}
      renderItem={({item})=>(
        <Text style={styles.text}>{item}</Text>
      )}
      renderSectionHeader={({section})=>(
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
    />
    // <FlatList
    //   keyExtractor={(item,index)=> index.toString()}
    //   data={Items}
    //   renderItem={({item})=>(
    //     <View style={styles.item}>
    //       <Text style={styles.text}>{item.name}</Text>
    //     </View>
    //   )}
    // />
    // <ScrollView style={styles.container}
    // refreshControl={
    //   <RefreshControl
        
    //   />
    // }>
    // { Items.map((object)=> {
    //   return (
    //     <View style={styles.item} key={object.key}>
    //       <Text style={styles.text}>{object.item}</Text>
    //     </View>
    //   )
    //   })
    // }  
    // </ScrollView>
  );
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
