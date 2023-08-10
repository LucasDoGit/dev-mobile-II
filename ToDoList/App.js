import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './componentes/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Aplicativo ToDoList</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});