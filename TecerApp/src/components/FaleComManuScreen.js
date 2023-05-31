import React, { useState} from 'react';
import { View, Image, Text, TouchableOpacity, Modal, StyleSheet, Linking} from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [chatbotVisible, setChatbotVisible] = useState(true); // Estado para controlar a visibilidade do chatbot

  const toggleChatbot = () => {
    setChatbotVisible(!chatbotVisible);
  };

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

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

  const openWhatsAppChat = () => {
    Linking.openURL('https://api.whatsapp.com/send?phone=');
  };


  return (
    <View style={styles.container}>
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
        <Text style={styles.username}>Fale com a Manu</Text>
      </View>

      {chatbotVisible && (
        <View style={styles.chatbotContainer}>
          <View style={styles.chatbotHeader}>
            <Text style={styles.chatbotTitle}>Manu</Text>
          </View>
          <View style={styles.chatbotMessageContainer}>
            <Text style={styles.chatbotMessage}>Olá! Em que posso ajudar?</Text>
          </View>
          <View style={styles.chatbotMessageContainer}>
            <Text style={styles.chatbotMessage}>Para atendimento fale comigo via Whatsapp!</Text>
          </View>

          {/* Botão para redirecionar para uma conversa de WhatsApp */}
          <TouchableOpacity style={styles.whatsappButton} onPress={openWhatsAppChat}>
            <Text style={styles.whatsappButtonText}>Fale pelo WhatsApp</Text>
          </TouchableOpacity>
        </View>
      )}

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
    </View>
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
    zIndex: 10,
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
    fontSize: 18,
    fontWeight: 'bold'
  },
  logoutButton: {
    marginTop: 'auto',
    marginBottom: 30,
    backgroundColor: '#0D1B40',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#0D1B40',
    borderRadius: 5,
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
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
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
  chatbotContainer: {
    backgroundColor: '#f2f2f2',
    marginTop: 'auto',
    marginBottom: 200,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  chatbotHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  chatbotTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  chatbotCloseButton: {
    fontSize: 14,
    color: 'gray',
    textDecorationLine: 'underline',
  },
  chatbotMessageContainer: {
    marginBottom: 10,
  },
  chatbotMessage: {
    fontSize: 16,
  },
  whatsappButton: {
    backgroundColor: '#25D366',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  whatsappButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default HomeScreen;
