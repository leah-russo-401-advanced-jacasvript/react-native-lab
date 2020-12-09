import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Contacts from 'expo-contacts';



export default function App() {

  const [permissions, serPermissions] = useState(false);
  const [Contacts, setContacts] = useState([]);

  const getPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CONTACTS);
    setPermissions(status === 'granted' ? true : false);
  }

  const getContacts = async () => {
    const contactList = await Contacts.getContactsAsync();
    setContacts(contactsList);
  }

  useEffect( ()=> {
    getPermissions()
  }, [])
  return (
    <>
    <View style={styles.container}>
      <Text>Click to view contacts</Text>
      <Button 
        onPress={getContacts}
        title="Get Contcats"
      />
    </View>

    <View  style={styles.container}>
      <FlatList data={contacts} renderItem={
        (item)=> {
          return <Button title={item.name}/>
        }}>

      </FlatList>
    </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
