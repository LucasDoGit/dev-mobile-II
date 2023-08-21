import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';

const TodoItem = ({ item, trocaEstado, deleta }) => {
    return (
      <View style={styles.todoItem}>
        <Switch 
            value={item.completado}
            onValueChange={() => trocaEstado(item.id)}    
        />
        <Text style={item.completado ? styles.completedText : styles.text}>
            {item.text}
        </Text>
        <TouchableOpacity onPress={() => deleta(item.id)}>
            <Text style={styles.deleteButton}>Excluir</Text>
        </TouchableOpacity>
      </View>  
    );
};

const styles = StyleSheet.create({
    todoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    text: {
        fontSize: 18,
    },
    completedText: {
        fontSize: 18,
        textDecorationLine: 'line-through',
        color: '#ccc',
    },
    deleteButton: {
        color: 'red',
        fontSize: 18,
    },
});

export default TodoItem;