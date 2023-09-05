import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Platform } from 'react-native';
import Header from '../componentes/Header';
import DateTimePicker from '@react-native-community/datetimepicker';

const TelaAddTarefa = ({ navigation, route }) => {
    const [tarefa, setTarefa] = useState({nome: '', descricao: '', data: new Date(Date.now())});
    const [showDataPicker, setShowDataPicker] = useState(false);

    const adicionaTarefa = () => { 
        route.params.addTarefa(tarefa);
        setTarefa({nome: '', descricao: '', data: new Date(Date.now())});
        navigation.goBack();
    };

    const saveDate = (event, value) => {
        setTarefa({...tarefa, data: value});
        if (Platform.OS === 'android') {
            setShowDataPicker(false);
        }
    }

    return (
        <View style={styles.container}>
            <Header />
            <TextInput 
                style={styles.input}
                placeholder="Nome da Tarefa"
                value={tarefa.nome}
                onChangeText={(value) => setTarefa({...tarefa, nome: value})}
            />
            <TextInput 
                style={[styles.input, styles.descricao]}
                placeholder="Descrição"
                multiline ={true}
                value={tarefa.descricao}
                onChangeText={(value) => setTarefa({...tarefa, descricao: value})}
            />
                        {!showDataPicker && (
                <View style={styles.dateButton}>
                <Button title={tarefa.data.toLocaleString().split(' ')[0]} 
                onPress={() => setShowDataPicker(true)} />
                </View>
            )}
            {showDataPicker && (
                <DateTimePicker 
                value={tarefa.data}
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={saveDate}
                style={styles.datePicker}
                />
            )}
            <Button title="Salvar" onPress={adicionaTarefa} />
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    descricao: {
        height: 120
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1, 
        marginBottom: 10,
        marginTop: 10,
        padding: 10,
    },
    dateButton: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    datePicker: {
        width: 320,
        height: 260,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    }
});

export default TelaAddTarefa;