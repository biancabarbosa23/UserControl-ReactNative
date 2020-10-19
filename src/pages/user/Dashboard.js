import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  AsyncStorage,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native'

import Header from '../../components/Header'
import Avatar from '../../components/Avatar'

export default function Dashboard({ navigation }) {
  const [loggedUser, setLoggedUser] = useState([])

  useEffect(() => {
    checkToken()
  })

  async function checkToken() {
    const token = await AsyncStorage.getItem('@CodeApi:token')
    const user = JSON.parse(await AsyncStorage.getItem('@CodeApi:user'))
    if (!token) navigation.navigate('Login')
    if (user) setLoggedUser(user)
  }

  async function logOut() {
    await AsyncStorage.clear()

    navigation.navigate('Login')
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Header />
      <Avatar />
      <View style={styles.divButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ProfileMe')}
        >
          <Text style={styles.btnText}>Ver Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSair} onPress={logOut}>
          <Text style={styles.btnText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  divButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSair: {
    marginTop: 30,
    backgroundColor: '#FF0000',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  button: {
    marginTop: 15,
    backgroundColor: '#2BAE66FF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
  },
})
