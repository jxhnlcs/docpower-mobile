import React, { useState, useEffect } from 'react';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import * as Print from 'expo-print';
import { View, Image, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';


const HomeScreen = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  const [tableData, setTableData] = useState([
    ['Documento 1', 'Baixar'],
    ['Documento 2', 'Baixar'],
    ['Documento 3', 'Baixar'],
  ]);

  const handleDownloadPDF = async (documentName) => {
    try {
      const options = {
        html: `<h1>${documentName}</h1><p>Conteúdo do documento</p>`,
        fileName: `${documentName}.pdf`,
        directory: 'Documents',
      };
  
      const file = await RNHTMLtoPDF.convert(options);
      await Print.printAsync({ uri: file.filePath });
    } catch (error) {
      console.error('Erro ao gerar o PDF:', error);
    }
  };  
  
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  }

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
        <Text style={styles.username}>Nome do Usuário</Text>
      </View>

      <View style={styles.container}>
  {/* ...outros elementos de tela... */}
  <Table>
    <Row data={['Documento', 'Ação']} style={styles.tableHeader} textStyle={styles.tableHeaderText} />
    <Rows
    data={tableData}
    style={styles.tableRow}
    textStyle={{ ...styles.tableRowText }}
    onPress={(rowData) => handleDownloadPDF(rowData[0])}
  />
  </Table>
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
  tableHeader: {
    height: 40,
    backgroundColor: '#0D1B40',
  },
  tableHeaderText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  tableRow: {
    height: 40,
    backgroundColor: '#f2f2f2',
  },
  tableRowText: {
    textAlign: 'center',
    fontSize: 14,
  },
});

export default HomeScreen;
