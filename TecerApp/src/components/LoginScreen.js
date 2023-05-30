import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Alert, Image, StyleSheet, Text } from 'react-native';
import HomeScreen from './HomeScreen';
import logo from '../assets/logo.png';


const LoginScreen = ({ navigation }) => {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Validações necessárias
    if (isValidCPF(cpf) && senha === 'senha123') {
      Alert.alert('Sucesso', 'CPF válido');
      navigation.navigate('HomeScreen');
    } else {
      Alert.alert('Erro', 'CPF ou senha inválidos');
    }
  };

  const handleForgotPassword = () => {
    // Lógica para lidar com o esquecimento de senha
    Alert.alert('Esqueceu sua senha', 'Entre em contato com o suporte');
  };

  const formatCPF = (value) => {
    let cpf = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona ponto após os 3 primeiros dígitos
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona ponto após os 6 primeiros dígitos
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona hífen antes dos últimos 2 dígitos
    return cpf;
  };

  const isValidCPF = (value) => {
    const cpf = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

    if (cpf.length !== 11) {
      return false;
    }

    // Verificação dos dígitos verificadores
    let sum = 0;
    let remainder;
    for (let i = 1; i <= 9; i++) {
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }

    if (remainder !== parseInt(cpf.substring(9, 10))) {
      return false;
    }

    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }

    if (remainder !== parseInt(cpf.substring(10, 11))) {
      return false;
    }

    return true;
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.loginText}>L   O   G   I   N</Text>
      <TextInput
        placeholder="CPF"
        value={formatCPF(cpf)}
        onChangeText={(text) => setCpf(text.replace(/\D/g, ''))}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={(text) => setSenha(text)}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordButtonText}>Esqueceu sua senha</Text>
      </TouchableOpacity>
        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
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
    width: 300,
    height: 300,
    borderRadius: 100,
  },
  loginText: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    alignSelf: 'center',
  },
  input: {
    width: '80%',
    height: 50,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  forgotPasswordButton: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: 20,
  },
  forgotPasswordButtonText: {
    textDecorationLine: 'underline',
    color: 'white',
  },
  loginButton: {
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D1B40',
    color: '#fff',
    borderRadius: 10,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default LoginScreen;
