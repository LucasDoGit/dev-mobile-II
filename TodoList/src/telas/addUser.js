import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from "../servicos/firebase";

function TelaAddUser({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [createFailed, setCreateFailed] = useState(false);
    
    const registrar = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            console.log('usuario criado com sucesso:', userCredential.user.email)
            setCreateFailed(false)
            navigation.navigate('Login')
            //const user = userCredential.user;
        })
        .catch((error) => {
            //const errorCode = error.code;
            console.log('Erro ao criar usuário: ', error.message)
            setCreateFailed(true)
        });
    };
    
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Faça o seu cadastro</Text>
            {createFailed && <Text style={styles.createFailed}>Falha ao criar usuário, tente novamente!</Text>}
            <TextInput placeholder="E-mail" value={email} onChangeText={(text) => setEmail(text)} style={styles.input}/>
            <TextInput placeholder="Senha" value={password} onChangeText={(text) => setPassword(text)} secureTextEntry style={styles.input}/>
            <Button title="Registrar" onPress={registrar} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 24,
        marginBottom: 20,
        textTransform: 'uppercase'
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 7,
        padding: 10,
      },
      createFailed: {
        color: 'red',
        marginBottom: 10
      }
})

export default TelaAddUser;