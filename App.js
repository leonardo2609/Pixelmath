import React, { useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';

import TelaInicial from './TelaInicial';
import TelaSobre from './TelaSobre';
import Menu from './Menu';


export default function App() {
  const [telaAtual, setTelaAtual] = useState('HOME');

  //baixando a fonte pixelada para a tela "sobre"
  const [fontsLoaded] = useFonts({
    PressStart2P: require('./assets/press-start-2p-latin-400-normal.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

 return (
  <View style={styles.container}>
    <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

    {telaAtual === 'HOME' && (
      <TelaInicial 
        aoIniciar={() => setTelaAtual('MENU')}
        aoClicarNoSobre={() => setTelaAtual('SOBRE')}
      />
    )}

    {telaAtual === 'SOBRE' && (
      <TelaSobre aoVoltar={() => setTelaAtual('HOME')} />
    )}

    {telaAtual === 'MENU' && (
      <Menu 
        aoVoltar={() => setTelaAtual('HOME')}
        abrirJogoTorre={() => setTelaAtual('JOGO DA TORRE')}
        abrirJogoRei={() => setTelaAtual('JOGO DO REI')}
      />
    )}

  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', 
  },
});
