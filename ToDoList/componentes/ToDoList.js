import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ToDoItem from '../componentes/ToDoItem';
import { useNavigation } from '@react-navigation/native';

const ToDoList = ({ itens, trocaEstado, deleta }) => {
    const navigation = useNavigation();
    const navegaAddTarefa = () => {
        navigation.navigate('addTarefa');
    };
    return (
        <View style = {styles.container}>
            <FlatList
                data={itens}
                renderItem={({ item }) => (
                    <ToDoItem item={item} trocaEstado={trocaEstado} deleta={deleta} />
                )}
                keyExtractor={item => item.id}
            />
            <Button title="Adicionar Tarefa" onPress={navegaAddTarefa}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})

export default ToDoList;