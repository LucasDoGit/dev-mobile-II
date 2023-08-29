import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}> Lista de Tarefas </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#d7c685',
        padding: 20,
        alignItems: 'center',
    },
    headerText: {
        paddingTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0b0b0d'
    },
});

export default Header;