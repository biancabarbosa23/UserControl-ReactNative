import React, { useState, useEffect } from 'react'
import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Image,
  AsyncStorage,
  Alert,
} from 'react-native'

import api from '../../services/api'

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState(null)
  const [password, setPassword] = useState(null)

  useEffect(() => {
    checkToken()
  }, [])

  async function checkToken() {
    const token = await AsyncStorage.getItem('@CodeApi:token')
    if (!token) return

    handleNavigation()
  }

  async function signIn() {
    try {
      const response = await api.post('/login', {
        usuario,
        password,
      })

      const { user, token } = response.data

      await AsyncStorage.multiSet([
        ['@CodeApi:token', token],
        ['@CodeApi:user', JSON.stringify(user)],
      ])

      setUsuario(null)
      setPassword(null)

      handleNavigation()
    } catch (response) {
      Alert.alert(response.data.message)
    }
  }

  async function handleNavigation() {
    const user = JSON.parse(await AsyncStorage.getItem('@CodeApi:user'))

    if (user.nivel === 1) navigation.navigate('DashboardUser')

    if (user.nivel === 999) navigation.navigate('DashboardAdm')

    return
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.form}>
        <View style={styles.divLogo}>
          <Image
            style={styles.logo}
            source={require('../../../assets/Mind-Branco.png')}
            style={{ width: 250, height: 55 }}
            resizeMode="contain"
          />
        </View>
        <TextInput
          placeholder="Insira seu E-mail ou CPF"
          style={styles.input}
          value={usuario}
          onChangeText={(value) => setUsuario(value)}
        />
        <TextInput
          placeholder="Senha"
          style={styles.input}
          secureTextEntry={true}
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        <TouchableOpacity style={styles.btnEntrar} onPress={signIn}>
          <Text style={styles.btnTextEntrar}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnCadastro}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.btnTextCadastro}>Criar uma conta</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  divLogo: {
    minWidth: '100%',
    alignItems: 'center',
    minHeight: 100,
    justifyContent: 'center',
    padding: 6,
    marginBottom: 15,
  },
  form: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  input: {
    backgroundColor: '#dddd',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 20,
    borderRadius: 7,
    padding: 15,
  },
  btnEntrar: {
    backgroundColor: '#2BAE66FF',
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  btnTextEntrar: {
    color: '#fff',
    fontSize: 20,
  },
  btnCadastro: {
    marginTop: 30,
  },
  btnTextCadastro: {
    color: '#fff',
    fontSize: 18,
  },
})
