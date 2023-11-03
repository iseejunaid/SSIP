import React, { useState } from 'react';
import { View, Text, Button,StyleSheet,TouchableOpacity } from 'react-native';
import {questions} from '../helpers/Questions';
import OptionButton from '../components/optionButton';
import { AntDesign } from '@expo/vector-icons';


const QuizScreen = ({route,navigation}) => {
    const {name} = route.params;
    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const { question, options } = questions[questionIndex];
    const [correctData,setCorrectData] = useState([]);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[questionIndex].correctAnswer) {
      setScore(score + 10);
      setCorrectData([...correctData,questionIndex]);
    }
    handleNext();
  };

  const handleNext = () => {
    if(questionIndex === questions.length - 1){
        navigation.navigate('Result', { score, name,correctData });
        setQuestionIndex(0);
        setCorrectData([]);
        setScore(0);
        return;
    }else{
        setQuestionIndex(questionIndex + 1);
    }
  }

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.headerButtons}>
                <TouchableOpacity
                onPress={() => navigation.pop()}
                >
                <AntDesign name="left" size={25} color="#F4F8FF" />
                </TouchableOpacity>
                <TouchableOpacity
                onPress={handleNext}>
                    <Text style={styles.skipbtn}>Skip</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.questionContainer}>
                <Text style={styles.questionheadingtxt}>Question {questionIndex+1}/</Text>
                <Text style={styles.questionheadingtxt2}>10</Text>
            </View>
        </View>        
        <View style={styles.body}>
            <View style={styles.bodyContainer}>
                <View style={styles.question}>
                    <Text style={styles.questiontxt}>{question}</Text>
                </View>
                <View style={styles.options}>
                    {options.map((option) => (
                        <OptionButton
                            key={option}
                            title={option}
                            onPress={() => handleAnswer(option)}
                        />
                        ))}
                </View>
            </View>
        </View>        
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#44455D',
    },
    header: {
        flex: 0.2,
        width: '100%',
        alignItems: 'center',
        borderColor:'grey',
        borderBottomWidth:1,
    },
    body: {
        flex: 0.8,
        width: '100%',
        alignItems:'center',
        justifyContent:'center',
    },
    headerButtons:{
        width:'95%',
        flexDirection:'row',
        flex:0.5,
        justifyContent:'space-between',
        alignItems:'flex-end',
    },
    bodyContainer:{
        flex:0.9,
        width:'93%',
        backgroundColor:'#FDFDFD',
        borderRadius:25,
        alignItems:'center',
        justifyContent:'flex-start',
    },
    question:{
        flex:0.3,
        width:'100%',
        borderBottomColor:'grey',
        borderBottomWidth:1,
        alignItems:'center',
        justifyContent:'center',
        padding:'2%',
    },
    questiontxt:{
        fontSize:20,
        fontWeight:'700',
        color:'#44455D',
    },
    options:{
        flex:0.7,
        width:'100%',
        padding:'2%',
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    questionContainer:{
        flex:0.5,
        width:'93%',
        alignItems:'flex-end',
        flexDirection:'row'
    },
    skipbtn:{
        color:'#F4F8FF',
        fontSize:20,
        marginRight:'3%'
    },
    questionheadingtxt:{
        color:'#F4F8FF',
        fontSize:30,
        fontWeight:"700",
        marginBottom:'2%'
    },
    questionheadingtxt2:{
        color:'#F4F8FF',
        fontSize:25,
        marginBottom:'2%'
    },
});

export default QuizScreen;
