import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './componentes/Header';
import TodoList from './componentes/ToDoList';

export default function App() {
  const [tarefas, setTarefas] = useState([
    { id: 1, text: 'Estudar React Native', completado: false },
    { id: 2, text: 'Fazer exercícios', completado: false },
    { id: 3, text: 'Ler um livro', completado: false },
  ]);

  const deleta = (tarefaId) => {
    setTarefas((Tarefas) => {
      let novasTarefas = Tarefas.filter((item) => item.id !== tarefaId)
      return novasTarefas
    })
  }

  const trocaEstado = (tarefaId) => {
    setTarefas((Tarefas) => 
    {
     let novasTarefas = Tarefas.map((item) => 
     item.id === tarefaId ? { ...item, completado: !item.completado } : item ) 
     return novasTarefas
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <TodoList itens={tarefas} trocaEstado={trocaEstado} deleta={deleta} />
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