import React, { useState} from 'react';
import { View, Image, Text, TouchableOpacity, Modal, StyleSheet, ScrollView} from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

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
        <Text style={styles.username}>Dúvidas Frequentes</Text>
      </View>

      <ScrollView style={styles.cardsContainer}>
        <View style={styles.cardContainer}>
          <Text style={styles.questionTitle}>Pergunta 1</Text>
          <View style={styles.card}>
            <Text style={styles.cardAnswer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt tellus id tincidunt posuere.
            </Text>
          </View>
        </View>

        <View style={styles.cardContainer}>
          <Text style={styles.questionTitle}>Pergunta 2</Text>
          <View style={styles.card}>
            <Text style={styles.cardAnswer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt tellus id tincidunt posuere.
            </Text>
          </View>
        </View>

        <View style={styles.cardContainer}>
          <Text style={styles.questionTitle}>Pergunta 3</Text>
          <View style={styles.card}>
            <Text style={styles.cardAnswer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt tellus id tincidunt posuere.
            </Text>
          </View>
        </View>
      </ScrollView>
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
  questionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardsContainer: {
    flex: 1,
  },
  cardContainer:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: '#a1a6aa',
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
  },
  cardAnswer: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#fff',
  },
});

export default HomeScreen;
