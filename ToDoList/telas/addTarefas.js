import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Header from '../componentes/Header';

const TelaAddTarefa = ({ navigation, route }) => {
    const [text, setText] = useState('');

    const adicionaTarefa = () => { 
        route.params.addTarefa(text);
        setText('');
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Header />
            <TextInput 
                style={styles.input}
                placeholder="Nova tarefa"
                value={text}
                onChangeText={(value) => setText(value)}
            />
            <Button title="Salvar" onPress={adicionaTarefa} />
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1, 
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default TelaAddTarefa;