# dev-mobile-II
 Repositório destinado a registrar as atividades e projetos desenvolvidas durante o curso de desenvolvimento mobile II.

 ## Ambiente de Desenvolvimento 
 - React Native
 - Node.js - v18.17.0
 - npm v9.6.7
 - Visual Studio Code v1.77.0
 - Smartphone com Android 12.0.4

## **IMPORTANTE:** para executar o aplicativos, é necessário seguir os passos abaixo:
1. Abrir o diretorio do aplicativo com o _**Prompt de Comando**_;
    > Exemplo: **CD X:\Workspace\dev-mobile-II\ToDoList**
1. `` npm install `` (baixa as dependências);
2. `` npm start `` (executar o projeto);
3. Ler o QR-code utilizando algum smartphone; 

 ## 1 - Aplicativo Todo List (Lista de Tarefas)
 Protótipo de um aplicativo de lista de tarefas, onde o objetivo deste aplicativo foi revisar os conhecimentos em React-native e o uso seus componentes.

 - *Obs:* Ao executar o aplicativo, é exibido o erro: ```  WARN  Non-serializable values were found in the navigation state. ``` devido a função *addTarefa* ser iniciada como uma variável no app.js. Este erro pode ser desconsiderado para fins de testes.

 ![](/TodoList/assets/print_app/v1.0/ToDoList-280.jpeg)

 ## 1.1 - Login/Registro com Firebase e Gestos (Lista de Tarefas)
 Neste ponto o aplicativo já utiliza gestos para excluir as tarefas adicionadas na lista.

- *Obs:* necessário ajustar as credenciais do arquivo ```"firebase-g.js"``` e o renomear para  ```"firebase.js"```

![](/TodoList/assets/print_app/v1.1/login-280.jpeg) ![](/TodoList/assets/print_app/v1.1/cadastro-280.jpeg)

## 1.2 - Implementação do Firebase Realtime Database

O aplicativo agora armazena as tarefas criadas e suas informações na plataforma do [Firebase](https://firebase.google.com/?hl=pt). Sendo necessário realizar a conexão de um database para que a o aplicativo funcione corretamente.

Para utilizar aplicativo é necessários seguir os passos abaixo:
1. configure o arquivo **"firebase.js"** para se conectar ao seu Realtime Database;
2. Ajustar as regras:
````typescript
{
  "rules": {
    "tarefas":{
      ".read": true,
      ".write": true,
      "$tarefaId": {
        ".read": true,
        ".write": "newData.child('tarefa').child('nome').isString()",
        "completado" : {
          	".validate": "newData.isBoolean()"
        }
      },
    }
  }
}
````

Neste ponto o aplicativo deve ser capaz de realizar operações de GET, SET, UPDATE, DELETE e utilizando o console do Firebase é possível visualizar as tarefas e suas informações.

Exemplo:

![](/TodoList/assets/print_app/v1.2/firebase-todolist-420.jpeg)
- Em VERMELHO são as tarefas criadas no Firebase;
- Em AZUL são informações das tarefas;

### > Resultado no Android

![](/TodoList/assets/print_app/v1.2/ToDoList-280.jpeg)


