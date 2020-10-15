import React, { useState } from 'react'
import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native'

export default function Login() {
  const [usuario, setUsuario] = useState()
  const [password, setPassword] = useState()

  return (
    <KeyboardAvoidingView behavior="padding">
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
          onChangeText={(value) => setUsuario(value)}
        />
        <TextInput
          placeholder="Senha"
          style={styles.input}
          secureTextEntry="true"
          onChangeText={(value) => setPassword(value)}
        />

        <TouchableOpacity style={styles.btnEntrar}>
          <Text style={styles.btnTextEntrar}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCadastro} onPress={() => {}}>
          <Text style={styles.btnTextCadastro}>Criar uma conta</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  divLogo: {
    minWidth: '100%',
    alignItems: 'center',
    minHeight: 150,
    justifyContent: 'center',
    padding: 6,
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
