import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';

const CustomModal = ({ isModalVisible, toggleModal,headingText, data, setSelected }) => {

    const selectUnitHandler = (unit) => {
        setSelected(unit);
        toggleModal();
    };
    
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={toggleModal}
        >
            <View
                style={styles.modalParentView}
                onStartShouldSetResponder={toggleModal}
            >
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>{headingText}</Text>
                    {data.map((heading, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => selectUnitHandler(heading)} 
                        >
                            <Text style={styles.modalText}>
                                {heading}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </Modal>
    );
};

const styles = {
    modalParentView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        backgroundColor: 'white',
        width:'65%',
        borderRadius: 20,
        borderWidth: 4,
        borderColor: '#2A7CB0',
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        borderBottomWidth: 2,
    },
    modalText: {
        fontSize: 18,
        marginBottom: 10,
    }
};

export default CustomModal;
