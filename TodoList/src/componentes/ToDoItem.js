import React, { useState, useRef, useEffect, useTransition } from 'react';
import { Animated, PanResponder, View, Text, TouchableOpacity, StyleSheet, Switch, LayoutAnimation, UIManager, Platform } from 'react-native';

if(Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const TodoItem = ({ item, trocaEstado, deleta }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const animationValue = useRef(new Animated.Value(0)).current
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(PanResponder.create({
        onMoveShouldSetPanResponder: () => true, // Em movimento ele ativa o define o PanResponder
        onPanResponderMove: Animated.event([null, {dx: pan.x}], { useNativeDriver: false }), // Em movimento atualiza os valores definidos.
        onPanResponderRelease: (_, gestureState) => { // Ao soltar o elemento ele atualiza/verifica os valores. 
            if(gestureState.dx < -200) {
                deleta(item.id)
            }
            else {
                Animated.spring(
                    pan,
                    {toValue: {x: 0, y: 0},
                useNativeDriver: false},
                ).start()
            }
        },
    })).current

    const expanded = () => {
        LayoutAnimation.spring()
        setIsExpanded(!isExpanded)
    }

    useEffect(() => {
        Animated.timing(animationValue, {
            toValue: item.completado ? 0.25 : 1, //ajusta a opacidade conforme necessario
            duration: 1000,
            useNativeDriver: false,
        }).start();
    }, [item.completado])

    return (
      <Animated.View {...panResponder.panHandlers} // funcao que busca todas os objetos do panResponder
            style={[pan.getLayout(), styles.container, {opacity: animationValue}]}>
        <View style={styles.todoItem}>
            <Switch 
                value={item.completado}
                onValueChange={() => trocaEstado(item.id)}    
            />
            <View style={styles.textContainer}>
                <TouchableOpacity onPress={expanded}>
                    <Text style={item.completado ? styles.completedText : styles.text}>
                        {item.tarefa.nome}
                    </Text>
                </TouchableOpacity>
            </View>
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
        backgroundColor: '#ffffe8',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    todoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#ebe3b7'
    },
    text: {
        fontSize: 18,
        color: '#0b0b0d',
    },
    completedText: {
        fontSize: 18,
        textDecorationLine: 'line-through',
        color: 'green',
    },
    deleteButton: {
        color: 'red',
        fontSize: 18,
    },
    textContainer: {
        flex: 1,
        alignItems: 'center'
    },
});

export default TodoItem;