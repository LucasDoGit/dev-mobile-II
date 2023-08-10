import { useNavigation } from '@react-navigation/native';
import { Button, FlatList } from 'react-native';

const TodoList = ({ itens, trocaEstado, deleta }) => {
    const navigation = useNavigation();
    const navegaAddTarefa = () => {
        navigation.navigate('addTarefa');
    };
    return (
        <View style = {StyleSheet.container}>
            <FlatList>
                data={item}
                renderItem={({ item }) => (
                    <ToDoItem item={item} trocaEstado={trocaEstado} deleta={deleta} />
                )}
                keyExtractor={item => item.id}
            </FlatList>
            <Button title="Adicionar Tarefa" onPress={navegaAddTarefa}/>
        </View>
    );
};

const styles = StylesSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})

export default TodoList;