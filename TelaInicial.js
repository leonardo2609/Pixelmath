import React from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, Text, Alert, BackHandler } from 'react-native';

export default function TelaInicial({ aoClicarNoSobre }) {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('./assets/pixelmath.png')} 
        style={styles.background}
        resizeMode="stretch" // "stretch" garante que ocupe a tela toda no 360x640
      >
        {/* Área de botões usando posicionamento absoluto */}
        <View style={styles.menuContainer}>
          //alerta para testar o botão de inicio enquanto nao tem menu 
          <TouchableOpacity 
            style={[styles.botaoInvisivel, { top: '64%' }]} 
            onPress={() => Alert.alert('Iniciar', 'Jogo Iniciado!')}
          >
          </TouchableOpacity>

          //sobre 
          <TouchableOpacity 
            style={[styles.botaoInvisivel, { top: '76%' }]} 
            onPress={aoClicarNoSobre}
          >
          </TouchableOpacity>

          //sair do app 
          <TouchableOpacity 
            style={[styles.botaoInvisivel, { top: '87%' }]} 
            onPress={() => BackHandler.exitApp()} 
          >
          </TouchableOpacity>

        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  menuContainer: {
    flex: 1,
    position: 'relative',
  },
  botaoInvisivel: {
    position: 'absolute',
    left: '22%',     // Centraliza horizontalmente (ajuste conforme seu desenho)
    width: '56%',    // Largura da área de clique
    height: '9%',     // Altura da área de clique
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Deixe 'transparent' depois de ajustar!
    borderRadius: 10,
  },
});