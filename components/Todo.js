import React, { useState } from 'react'
import {TextInput, StyleSheet } from 'react-native'
import  uuid  from 'uuid';
import TodoList from './TodoList';

const Todo = () => {
    const [todoItems, setTodoItems] = useState(() => [
        { id: uuid(), title:'Учить английский', isComplete: false},
        { id: uuid(), title:'Разобраться с дебаг модом', isComplete: false},
        { id: uuid(), title:'Разобраться с navigation', isComplete: false},
        { id: uuid(), title:'Повторить java', isComplete: false},
        { id: uuid(), title:'Сделать todo с firebase или levelDB', isComplete: false},
    ])
    const [text,setText] = useState('')

   const changeText = text => setText(text)
   const addTodoItem = () => {
        if(text.length > 0) {
            setTodoItems([
                ...todoItems,
                {id: uuid(), title: text, isComplete: false}
            ])
        }
        setText('')
    }
    const toggleTodoItem = id => setTodoItems(todoItems.map(
        todoItem => todoItem.id === id ? {...todoItem, isComplete: !todoItem.isComplete} : todoItem
        
    ))
    const removeTodoItem = id => setTodoItems(todoItems.filter(
       todoItem => todoItem.id !== id
    ))

 return (
     <>
    <TodoList 
        todoItems={todoItems}
        toggleTodoItem={toggleTodoItem}
        removeTodoItem={removeTodoItem}

     />
    <TextInput 
        style={styles.textInput} 
        placeholder="Added task"
        value={text}
        onChangeText={changeText}
        onSubmitEditing={addTodoItem}
    />
     </>
 )
}

const styles = StyleSheet.create({
    textInput: {
        width: '100%',
        height: 40,
        paddingHorizontal: 20,
        borderWidth: StyleSheet.hairlineWidth
    }
})

export default Todo;