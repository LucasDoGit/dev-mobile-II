import React, { useState, useRef, useEffect } from 'react';
import { Animated, View, Text, TouchableOpacity, StyleSheet, Switch, LayoutAnimation, UIManager, Platform } from 'react-native';

if(Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const TodoItem = ({ item, trocaEstado, deleta }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const animationValue = useRef(new Animated.Value(0)).current
    const expanded = () => {
        LayoutAnimation.spring()
        setIsExpanded(!isExpanded)
    }

    useEffect(() => {
        Animated.timing(animationValue, {
            toValue: item.completado ? 0.25 : 1, //ajusta a opacidade conforme necessario
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, [item.completado])

    return (
      <Animated.View style={[styles.container, {opacity: animationValue}]}>
        <View style={styles.todoItem}>
            <Switch 
                value={item.completado}
                onValueChange={() => trocaEstado(item.id)}    
            />
        <TouchableOpacity onPress={expanded}>
            <Text style={item.completado ? styles.completedText : styles.text}>
                {item.tarefa.nome}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleta(item.id)}>
            <Text style={styles.deleteButton}>Excluir</Text>
        </TouchableOpacity>
        </View>
        {isExpanded &&  (
            <View>
                <Text style={styles.text}><Text style={{fontWeight: 'bold'}}>&#8226; Data: </Text>{item.tarefa.data.toLocaleString().split(' ')[0]}</Text>
                <Text style={styles.text}><Text style={{fontWeight: 'bold'}}>&#8226; Descrição: </Text>{item.tarefa.descricao}</Text>
            </View>      
        )}
      </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#ededed',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    todoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff'
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