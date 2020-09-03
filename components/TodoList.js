import React from 'react'
import {FlatList } from 'react-native'
import TodoItem from './TodoItem';


const TodoList = ({todoItems, toggleTodoItem, removeTodoItem}) => (
    
    
     <FlatList
     data={todoItems}
     renderItem={({item}) => (
        <TodoItem  
            title={item.title} 
            isComplete={item.isComplete}
            toggle={() => toggleTodoItem(item.id)}
            remove={() => removeTodoItem(item.id)} />
     )}
     keyExtractor={item => item.id.toString()}
     />
    )

export default TodoList;