import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const TodoItem = ({title,isComplete,toggle,remove}) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer} >
                <Text style={isComplete && styles.TextComplete}>
                    {title}
                </Text>
            </View>

            <View>
                <TouchableOpacity
                style={[ styles.button, styles.buttonSuccess]}
                onPress={toggle}
                >
                   <Text style={styles.buttonText}>
                       {isComplete ? 'Отменить':'Выполнить'}
                       </Text> 
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity
                style={[ styles.button, styles.buttonDanger]}
                onPress={remove}
                >
                   <Text style={styles.buttonText}>
                       Удалить
                       </Text> 
                </TouchableOpacity>
            </View>
        </View>
    )
}

TodoItem.defaultProps ={
    title: 'Without name',
    isComplete: false,
    toggle: () => {},
    remove: () => {}
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems:"center",
        marginHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    textContainer :{
    flex: 1
    },
    TextComplete: {
        textDecorationLine: 'line-through'
    },
    button: {
        minWidth: 100,
        margin: 3,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
        backgroundColor: '#007bff'
    },
    buttonSuccess: {
        backgroundColor: '#28a745'
    },
    buttonDanger: {
        backgroundColor: '#dc3545'
    },
    buttonText: {
    color: '#fff',
    textAlign: 'center'
    }

})

export default TodoItem;