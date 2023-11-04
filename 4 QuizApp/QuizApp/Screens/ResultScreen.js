import React, { useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,FlatList} from 'react-native';
import { questions } from '../helpers/Questions';
import { AntDesign } from '@expo/vector-icons';

const Result = ({route,navigation}) => {
  const score = route.params.score;
  const name = route.params.name;
  console.log(route);
  const percentage = (score / 100) * 100;

  const getColor = () => {
    if (percentage < 50) {
      return '#F44336';
    } else if (percentage >= 50 && percentage < 75) {
      return '#FF9800';
    } else if (percentage >= 75) {
      return '#4CAF50';
    }
  }

  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headertxt}>Result</Text>            
        </View>        
        <View style={styles.body}>
          <View style={styles.resultDetailsContainer}>
            {
              name ? (
                <Text style={styles.resultdetailtxt}>
                  {name}, you scored {score} out of 100
                </Text>
              )
              :
              (
                <Text style={styles.resultdetailtxt}>
                  You scored {score} out of 100
                </Text>
              )
            }
            <View style={{flexDirection:'row'}}>
              <Text style={styles.resultdetailtxt}>Percentage : </Text>
              <Text style={[styles.resultdetailtxt,{color:getColor()}]}>{percentage}%</Text> 
            </View>
            <Text style={[styles.resultdetailtxt,{alignSelf:'flex-start'}]}>
                Details are:
            </Text>

          </View>
          <View style={styles.correctAnswersContainer}>
          <FlatList
            data={questions}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={styles.flatlistcontainer} key={index}>
                <View style={styles.item}>
                  <Text style={styles.title}>{item.question}</Text>
                  </View>
                  <View style={{ width: '30%', padding: '2%', alignItems: 'center' }}>
                  {route.params.correctData.includes(index) ? (
                    <AntDesign name="checkcircle" size={24} color="green" />
                  ) : (
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <AntDesign style={{padding:'3%'}} name="closecircle" size={24} color="red" />
                      <Text style={[styles.title, { fontWeight: 'bold' }]}>{item.correctAnswer}</Text>
                    </View>
                  )}
                </View>
              </View>
            )}
          />
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => navigation.popToTop()}>
            <Text style={styles.buttonText}>Play Again</Text>
          </TouchableOpacity>
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
      flex: 0.1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor:'grey',
      borderBottomWidth:1,
  },
  body: {
      flex: 0.8,
      width: '100%',
      alignItems:'center',
      justifyContent:'center',
      padding:'2%',
  },
  headertxt:{
      fontSize:30,
      fontWeight:'bold',
      color:'#FDFDFD',
  },
  resultDetailsContainer:{
      flex:0.2,
      width:'93%',
      alignItems:'center',
      justifyContent:'center',
  },
  correctAnswersContainer:{
      flex:0.65,
      width:'93%',
      backgroundColor:'#FDFDFD',
      borderRadius:25,
      padding:'0.5%',
      alignItems:'center',
      justifyContent:'center',
  },
  buttonContainer:{
      flex:0.15,
      width:'93%',
      alignItems:'center',
      justifyContent:'center',
  },
  resultdetailtxt:{
      fontSize:18,
      fontWeight:'bold',
      color:'#FDFDFD',
  },
  startButton: {
    backgroundColor: '#1ED8B6',
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#F4F8FF',
    fontSize: 20,
  },
  item: {
    width:'70%',
    padding:'3%',
    marginVertical: '2%',
    borderRightWidth:1,
    borderColor:'#1ED8B6',
    alignSelf:'center',
  },
  title: {
    fontSize: 18,
  },
  flatlistcontainer:{
    width:'100%',
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'center',
    borderBottomWidth:1,
    borderColor:'#1ED8B6',
  }
});

export default Result;
