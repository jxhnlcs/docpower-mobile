import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Image, StyleSheet, Text } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Aqui você pode fazer as validações necessárias
    if (cpf === '12345678900' && senha === 'senha123') {
      navigation.navigate('Home');
    } else {
      Alert.alert('Erro', 'CPF ou senha inválidos');
    }
  };

  const handleForgotPassword = () => {
    // Lógica para lidar com o esquecimento de senha
    Alert.alert('Esqueceu sua senha', 'Entre em contato com o suporte');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.loginText}>LOGIN</Text>
      <TextInput
        placeholder="CPF"
        value={cpf}
        onChangeText={text => setCpf(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={text => setSenha(text)}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Esqueceu sua senha" onPress={handleForgotPassword} style={styles.forgotPasswordButton} />
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} style={styles.button} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#909d9e',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 30,
    borderRadius: 100,
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    alignSelf: 'center',
  },
  input: {
    width: '80%',
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  buttonContainer: {
    marginBottom: 10,
  },
  button: {
    flex: 1,
  },
  forgotPasswordButton: {
    width: 'auto',
    backgroundColor: 'transparent',
    marginTop: 10,
    alignSelf: 'flex-start',
    textDecorationLine: 'underline',
    color: 'white',
  },
});

export default LoginScreen;
