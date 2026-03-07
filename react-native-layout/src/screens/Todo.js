import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'

export default function Todo({ navigation }) {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')
    const [search, setSearch] = useState('')

    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, { id: Date.now().toString(), text: input, completed: false }])
            setInput('')
        }
    }

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

    const deleteTodo = (id) => {
        Alert.alert(
            'Delete Task',
            'Are you sure you want to delete this task?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => setTodos(todos.filter(todo => todo.id !== id))
                },
            ]
        )
    }

    const filteredTodos = todos.filter(todo =>
        todo.text.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <View style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Login')}>
                    <Ionicons name="arrow-back" size={24} color="#007AFF" />
                </TouchableOpacity>
                <Text style={styles.title}>My Todos</Text>
            </View>

            {/* Search Input */}
            <View style={styles.inputWrapper}>
                <Ionicons name="search-outline" size={20} color="#888" style={styles.icon} />
                <TextInput
                    placeholder="Search todos"
                    style={styles.input}
                    value={search}
                    onChangeText={setSearch}
                />
            </View>

            {/* Add Todo Input */}
            <View style={styles.addContainer}>
                <View style={[styles.inputWrapper, { flex: 1 }]}>
                    <Ionicons name="create-outline" size={20} color="#888" style={styles.icon} />
                    <TextInput
                        placeholder="Enter a new task"
                        style={styles.input}
                        value={input}
                        onChangeText={setInput}
                    />
                </View>
                <TouchableOpacity style={styles.addButton} onPress={addTodo}>
                    <Ionicons name="add" size={24} color="#fff" />
                </TouchableOpacity>
            </View>

            {/* Empty State */}
            {filteredTodos.length === 0 && (
                <View style={styles.emptyContainer}>
                    <Ionicons name="clipboard-outline" size={50} color="#ccc" />
                    <Text style={styles.emptyText}>No tasks yet</Text>
                </View>
            )}

            {/* Todo List */}
            <FlatList
                data={filteredTodos}
                keyExtractor={item => item.id}
                style={styles.list}
                renderItem={({ item }) => (
                    <View style={styles.todoItem}>
                        <TouchableOpacity onPress={() => toggleTodo(item.id)} style={styles.todoContent}>
                            <Ionicons
                                name={item.completed ? "checkmark-circle" : "ellipse-outline"}
                                size={24}
                                color={item.completed ? "#4CAF50" : "#888"}
                            />
                            <Text style={[styles.todoText, item.completed && styles.completedText]}>
                                {item.text}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => deleteTodo(item.id)}>
                            <Ionicons name="trash-outline" size={20} color="#FF3B30" />
                        </TouchableOpacity>
                    </View>
                )}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 30,
    },

    backButton: {
        marginRight: 15,
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
    },

    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 14,
        height: 50,
        backgroundColor: '#f9f9f9',
        marginBottom: 15,
    },

    icon: {
        marginRight: 5,
    },

    input: {
        flex: 1,
        fontSize: 15,
        color: '#333',
    },

    addContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },

    addButton: {
        width: 50,
        height: 50,
        backgroundColor: '#007AFF',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginBottom: 15,
    },

    list: {
        flex: 1,
    },

    todoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
        marginBottom: 10,
    },

    todoContent: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },

    todoText: {
        fontSize: 15,
        color: '#333',
        marginLeft: 10,
        flex: 1,
        marginRight: 10,
    },

    completedText: {
        textDecorationLine: 'line-through',
        color: '#888',
    },

    emptyContainer: {
        alignItems: 'center',
        marginTop: 60,
    },

    emptyText: {
        fontSize: 14,
        color: '#ccc',
        marginTop: 10,
    },
})