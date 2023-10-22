import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native';
import conversionFactors from '../helpers/conversionFactors.json';
import CustomModal from './Modal';

const Header = ({ unit, setUnit }) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const conversionHeadings = Object.keys(conversionFactors);


    return (
        <View style={styles.header}>
            <TouchableOpacity
                style={styles.headerButton}
                onPress={toggleModal}
            >
                <Text style={styles.headerText}>{unit}</Text>
            </TouchableOpacity>

            <CustomModal 
            isModalVisible={isModalVisible} 
            toggleModal={toggleModal} 
            headingText = 'Conversions'
            data = {conversionHeadings}
            setSelected= {setUnit} />
        </View>
    );
};
const styles = StyleSheet.create({
    header: {
        flex: 0.1,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
    },
    headerButton:{
        height: '60%',
        justifyContent:'center',
        alignItems: 'center',
        width:'45%',
        borderWidth:2,
        borderColor: '#2A7CB0',
        borderRadius: 10,

    },
    headerText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    }
});

export default Header;
