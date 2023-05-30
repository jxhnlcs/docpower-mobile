import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DocumentosPessoaisScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Documentos Pessoais</Text>
      {/* Conteúdo adicional da tela */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default DocumentosPessoaisScreen;
