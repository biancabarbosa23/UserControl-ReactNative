import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Text,
  AsyncStorage,
  FlatList,
  Alert,
  TouchableOpacity,
} from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons'

import api from '../../services/api'

import ListItems from '../../components/ListItems'
import Header from '../../components/Header'
import Avatar from '../../components/Avatar'

function UsersList({ navigation }) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    handleDataUserList()
  }, [])

  async function handleDataUserList() {
    try {
      const response = await api.get('/users')
      await AsyncStorage.setItem(
        '@CodeApi:users',
        JSON.stringify(response.data.users)
      )
      setUsers(response.data.users)
    } catch (response) {
      Alert.alert(response.data.message)
    }
  }

  return (
    <View style={styles.screen}>
      <Header />
      <TouchableOpacity
        style={styles.buttonBack}
        onPress={() => navigation.navigate('DashboardAdm')}
      >
        <SimpleLineIcons name="arrow-left" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.header}>
        <Avatar />
      </View>
      <Text style={styles.textInformativo}>
        Arraste para a esquerda para desativar ou ativar um usuário
      </Text>
      <View style={styles.divList}>
        <FlatList
          data={users}
          key={(item) => item._id}
          renderItem={({ item }) => (
            <ListItems data={item} navigation={navigation} />
          )}
          ItemSeparatorComponent={() => (
            <View backgroundColor="#181818" height={2} />
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#151515',
  },
  textInformativo: {
    fontSize: 14,
    marginBottom: 10,
    marginTop: 5,
    alignSelf: 'center',
    color: '#fff',
  },
  header: {
    marginTop: 10,
    maxHeight: 120,
  },
  buttonBack: {
    position: 'absolute',
    left: 1,
    top: 23,
    marginLeft: 10,
    width: 40,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  divList: {
    flex: 1,
    width: '100%',
  },
})

export default UsersList
