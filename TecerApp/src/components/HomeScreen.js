import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, Modal, StyleSheet, Alert, BackHandler, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';


const HomeScreen = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  useEffect(() => {
    const backAction = () => {
      if (menuVisible) {
        setMenuVisible(false);
        return true; // Impede o comportamento padrão de sair do aplicativo
      }
  
      if (navigation.isFocused()) {
        setLogoutModalVisible(true);
        return true; // Impede o comportamento padrão de sair do aplicativo
      }
  
      return false;
    };
  
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
  
    return () => backHandler.remove(); // Remove o ouvinte quando o componente for desmontado
  }, [navigation, menuVisible]);

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  }

  const Button = ({ screenName, iconName, buttonText, iconLibrary }) => (
    <TouchableOpacity style={styles.button} onPress={() => navigateToScreen(screenName)}>
      {iconLibrary === 'FontAwesome5' && <Icon name={iconName} size={20} color="#fff" />}
      {iconLibrary === 'MaterialCommunityIcons' && <Icon2 name={iconName} size={20} color="#fff" />}
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const confirmLogout = () => {
    setLogoutModalVisible(true);
  };

  const logout = () => {
    setLogoutModalVisible(false);
    navigation.navigate('LoginScreen');
  };

  

  const cancelLogout = () => {
    setLogoutModalVisible(false);
  };

  return (
    <ScrollView style={styles.container}>
      {menuVisible && (
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.backButton} onPress={toggleMenu}>
            <Image source={require('../assets/back_arrow.png')} style={styles.backButtonIcon} />
          </TouchableOpacity>
          <View style={styles.userContainer}>
            <Image source={require('../assets/user_avatar.png')} style={styles.userAvatar} />
            <Text style={styles.username}>Nome do Usuário</Text>
          </View>
          <TouchableOpacity style={styles.logoutButton} onPress={confirmLogout}>
            <Text style={styles.logoutButtonText}>Sair</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
        <Image source={require('../assets/menu_icon.png')} style={styles.menuButtonIcon} />
      </TouchableOpacity>

      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.username}>Nome do Usuário</Text>
      </View>

      <View style={styles.buttonsContainer}>
        {/* Primeira linha de botões */}
        <View style={styles.buttonRow}>
          <Button
            screenName="DocumentosPessoaisScreen"
            iconName="file-account"
            buttonText="Documentos pessoais"
            iconLibrary="MaterialCommunityIcons"
          />
          <Button
            screenName="DocumentosPessoaJuridicaScreen"
            iconName="file-document"
            buttonText="Documentos Pessoa Jurídica"
            iconLibrary="MaterialCommunityIcons"
          />
        </View>
        {/* Segunda linha de botões */}
        <View style={styles.buttonRow}>
          <Button
            screenName="FinanceiroScreen"
            iconName="coins"
            buttonText="Financeiro"
            iconLibrary="FontAwesome5"
          />
          <Button
            screenName="SeusImpostosScreen"
            iconName="calculator"
            buttonText="Seus Impostos"
            iconLibrary="FontAwesome5"
          />
        </View>
        {/* Terceira linha de botões */}
        <View style={styles.buttonRow}>
          <Button
            screenName="SolicitacoesScreen"
            iconName="file-search"
            buttonText="Solicitações"
            iconLibrary="MaterialCommunityIcons"
          />
          <Button
            screenName="HonorariosScreen"
            iconName="handshake"
            buttonText="Honorários"
            iconLibrary="MaterialCommunityIcons"
          />
        </View>
        {/* Quarta linha de botões */}
        <View style={styles.buttonRow}>
          <Button
            screenName="DuvidasFrequentesScreen"
            iconName="question"
            buttonText="Dúvidas Frequentes"
            iconLibrary="FontAwesome5"
          />
          <Button
            screenName="FaleComManuScreen"
            iconName="account-question"
            buttonText="Fale com a Manu"
            iconLibrary="MaterialCommunityIcons"
          />
        </View>
      </View>

      <Modal
        visible={logoutModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={cancelLogout}
      >
        <View style={styles.logoutModalContainer}>
          <View style={styles.logoutModalContent}>
            <Text style={styles.logoutModalTitle}>Confirmar Logout</Text>
            <Text style={styles.logoutModalText}>Deseja sair da conta?</Text>
            <View style={styles.logoutModalButtonsContainer}>
              <TouchableOpacity style={styles.logoutModalButton} onPress={logout}>
                <Text style={styles.logoutModalButtonText}>Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.logoutModalButton} onPress={cancelLogout}>
                <Text style={styles.logoutModalButtonText}>Não</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menuContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  backButtonIcon: {
    width: 30,
    height: 30,
  },
  userContainer: {
    alignItems: 'center',
    marginTop: 100,
  },
  userAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  username: {
    marginBottom: 20,
    fontSize: 18,
  },
  logoutButton: {
    marginTop: 'auto',
    marginBottom: 30,
    backgroundColor: '#0D1B40',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#0D1B40',
    borderRadius: 5
  },
  logoutButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  menuButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  menuButtonIcon: {
    width: 30,
    height: 30,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom: 50
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    width: '48%',
    height: 80,
    backgroundColor: '#0D1B40',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  logoutModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  logoutModalContent: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 10,
  },
  logoutModalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  logoutModalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  logoutModalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoutModalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#0D1B40',
    borderRadius: 5,
  },
  logoutModalButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default HomeScreen;
