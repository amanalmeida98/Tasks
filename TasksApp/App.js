import React, {useState} from 'react';
import { Text, Button, View, StyleSheet, FlatList} from 'react-native';
import { NavigationContainer, useLinkBuilder } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from './components/Header';
import uuid from 'uuid-random';
import { TouchableOpacity } from 'react-native-gesture-handler';


  function HomeScreen() {
    const [items, setItems] = useState([
      {id: '1', text: 'task1'},
      {id: '2', text: 'task2'},
      {id: '3', text: 'task3'},
      {id: '4', text: 'task4'},
    ]);
    
    const pressHandler = (id) => {
      console.log(id);
      setItems(prevItems => {
          return prevItems.filter(item => item.id != id);
      });
    }
  
    
  return (
    <View style={styles.container}>
      <Header/>
      <FlatList 
        data={items} 
        renderItem={({item}) => (
          <ListItem item={item} pressHandler={pressHandler}/>)
        }
        keyExtractor={item => item.id}
      />
      </View>
  );
};


function SettingsScreen() {
  return (
    <View style={styles.container}>
    <Text style={styles.text}> Other Tasks </Text>
  </View>
  );
}

const Tab = createBottomTabNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="My Tasks" component={HomeScreen} />
        <Tab.Screen name="Other Tasks" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const ListItem = ({item, pressHandler}) => {
  return(
      <View style = {styles.listItemView}>
          <Text style ={styles.listItemText}>{item.text}</Text>
          <Button title = 'Delete' onPress ={() => pressHandler(item.id)}> </Button>  
      </View>
  );
}
const styles = StyleSheet.create({
  listItem: {
      padding: 25,
      backgroundColor: '#f8f8f8',
      borderBottomWidth: 1,
      borderColor: '#eee',
  },
  listItemView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  listItemText: {
      fontSize: 18,
      color: 'black'
  },
  container: {
    flex: 1,
    padding:60 ,
  },
});


export default App;