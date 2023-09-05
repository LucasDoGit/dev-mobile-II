import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Pressable } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebase from "../servicos/firebase";
import Header from "../componentes/Header";

const TelaLogin = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);

  const handleLogin = async () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoginFailed(false)
        // Signed in
        //const user = userCredential.user;
        console.log('Usuario logado com sucesso:', userCredential.user.email);
        navigation.navigate('Home');
      })
      .catch((error) => {
        setLoginFailed(true);
        //const errorCode = error.code;
        console.log('Erro ao fazer login: ', error.message);
      })
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.container2}>
        <Text style={styles.header}>Faça Login</Text>
        {loginFailed && <Text style={styles.loginFailed}>Usuário ou Senha Inválidos</Text>}
        <TextInput placeholder="E-mail" value={email} onChangeText={(text) => setEmail(text)} style={styles.input}/>
        <TextInput placeholder="Senha" value={password} onChangeText={(text) => setPassword(text)} secureTextEntry style={styles.input}/>
        <Button title="Login" onPress={handleLogin} />
        <Text style={styles.headerRegister}>É novo aqui? Cadastre-se</Text>
        <Pressable onPress={() => navigation.navigate('addUser')}>
          <Text style={styles.register}>Registrar novo usuario</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    container2: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    header: {
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
    loginFailed: {
      color: 'red',
      marginBottom: 10
    },
    headerRegister: {
      fontSize: 18,
      marginTop: 20,
      marginBottom: 20,
      textTransform: 'uppercase'
    },
    register: {
      textDecorationLine: 'underline',
      color: '#0b0b0d',
      textTransform: 'uppercase',
      padding: 10,
      borderRadius: 7,
      backgroundColor: '#ffffe8'
    },
});

export default TelaLogin;