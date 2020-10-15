import React, { useState } from 'react'
import { TextInputMask } from 'react-native-masked-text'
import {
  KeyboardAvoidingView,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  AsyncStorage,
} from 'react-native'

import api from '../../services/api'

export default function Login({ navigation }) {
  const [name, setName] = useState(null)
  const [cpf, setCpf] = useState(null)
  const [cpfField, setCpfField] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  async function handleRegister() {
    try {
      if (!cpfField.isValid()) return Alert.alert('CPF não é valido!')

      const response = await api.post('/register', {
        name,
        cpf: cpfField.getRawValue(),
        email,
        password,
      })

      const { dataUserToCreate, token } = response.data

      await AsyncStorage.multiSet([
        ['@CodeApi:token', token],
        ['@CodeApi:user', JSON.stringify(dataUserToCreate)],
      ])

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
          placeholder="Digite seu nome"
          style={styles.input}
          onChangeText={(value) => setName(value)}
        />
        <TextInputMask
          placeholder="CPF"
          type={'cpf'}
          value={cpf}
          style={styles.input}
          onChangeText={(text, ref = null) => {
            setCpf(text)
          }}
          ref={(ref) => {
            setCpfField(ref)
          }}
        />
        <TextInput
          placeholder="Digite seu e-mail"
          style={styles.input}
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput
          placeholder="Digite sua senha"
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
        />

        <TouchableOpacity style={styles.btnCadastrar} onPress={handleRegister}>
          <Text style={styles.btnTextCadastrar}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnVoltar}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.btnTextVoltar}>Voltar</Text>
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
    minHeight: 150,
    justifyContent: 'center',
    padding: 6,
    marginTop: 20,
  },
  form: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#ddd',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 20,
    borderRadius: 7,
    padding: 15,
  },
  btnCadastrar: {
    marginTop: 15,
    backgroundColor: '#2BAE66FF',
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  btnTextCadastrar: {
    color: '#fff',
    fontSize: 20,
  },
  btnVoltar: {
    marginTop: 15,
    backgroundColor: '#FF0000',
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginBottom: 10,
  },
  btnTextVoltar: {
    color: '#fff',
    fontSize: 20,
  },
})
