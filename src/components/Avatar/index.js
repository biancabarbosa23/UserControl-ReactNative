import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  Alert,
  AsyncStorage,
} from 'react-native'

export default function Header() {
  const [loggedUser, setLoggedUser] = useState({})

  useEffect(() => {
    handleDataUser()
  }, [])

  async function handleDataUser() {
    try {
      const user = JSON.parse(await AsyncStorage.getItem('@CodeApi:user'))
      setLoggedUser(user)
    } catch (response) {
      Alert.alert(response.data.message)
    }
  }

  return (
    <View style={styles.header}>
      {loggedUser.image === '' ? (
        <Image
          style={styles.imageUser}
          source={require('../../../assets/ImageUserExample.png')}
        />
      ) : (
        <Image
          style={styles.imageUser}
          source={{
            uri: `http://192.168.0.97:3030/uploads/avatar/${loggedUser.image}`,
          }}
        />
      )}
      <Text style={{ color: '#fff', fontSize: 18 }}>{loggedUser.name}</Text>
      {loggedUser.nivel === 999 ? (
        <Text style={styles.descricaoUser}>administrador</Text>
      ) : (
        <Text style={styles.descricaoUser}>usuário comum</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    paddingTop: 15,
    maxHeight: 135,
    justifyContent: 'flex-end',
    alignItems: 'center',
    minWidth: '100%',
    backgroundColor: '#151515',
  },
  buttonBack: {
    position: 'absolute',
    left: 1,
    top: 1,
    marginLeft: 10,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageUser: {
    width: 80,
    height: 80,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#131313',
  },
  descricaoUser: {
    fontSize: 15,
    color: '#808080',
    marginBottom: 10,
  },
})
