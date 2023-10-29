import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const KeyboardButton = ({ onPress, text, type }) => {
    if (type === 'medium') {
        return (
            <TouchableOpacity style={styles.mediumButton} onPress={onPress}>
                <Text style={styles.medBtnText}>{text}</Text>
            </TouchableOpacity>
        );
    }
    else if (type === 'large') {
        if (text === 'C') {
            return (
                <TouchableOpacity
                    style={[styles.largeButton, { backgroundColor: '#F8ECED' }]}
                    onPress={onPress}
                >
                    <Text style={[styles.largeBtnText,{color:'#F65A63'}]}>{text}</Text>
                </TouchableOpacity>
            );
        } else {
            return (
                <TouchableOpacity style={styles.largeButton} onPress={onPress}>
                    <Text style={styles.largeBtnText}>{text}</Text>
                </TouchableOpacity>
            );
        }
    }
    else if (type === 'largeZeroBtn') {
        return (
            <TouchableOpacity style={styles.largezeroButton} onPress={onPress}>
                <Text style={styles.largeBtnText}>{text}</Text>
            </TouchableOpacity>
        );
    }
    else if(type === 'large-operator'){
        if(text === '='){
        return (
            <TouchableOpacity style={[styles.largeButton,{backgroundColor:'#2EC973'}]} onPress={onPress}>
                <Text style={[styles.largeBtnText,{color:'#FFFEFC'}]}>{text}</Text>
            </TouchableOpacity>
        );
        }
        else{
            return (
                <TouchableOpacity style={[styles.largeButton,{backgroundColor:'#FF9500'}]} onPress={onPress}>
                    <Text style={[styles.largeBtnText,{color:'#FFFEFC'}]}>{text}</Text>
                </TouchableOpacity>
            );
        }
    }
    return null;
};

const styles = StyleSheet.create({
    mediumButton: {
        backgroundColor: '#E9F0F4',
        borderRadius: 5,
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    medBtnText: {
        fontSize: 18,
        color:'#4B5158',
        fontWeight:'500'
    },
    largeButton: {
        backgroundColor: '#E9F0F4',
        borderRadius: 5,
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },
    largezeroButton: {
        backgroundColor: '#E9F0F4',
        borderRadius: 5,
        width: '47%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },
    largeBtnText: {
        fontSize: 18,
        color:'#4B5158',
        fontWeight:'700'
    },
});

export default KeyboardButton;
