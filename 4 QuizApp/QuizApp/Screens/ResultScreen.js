import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Result = ({route,navigation}) => {
  const score = route.params.score;
  const name = route.params.name;
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

          </View>
          <View style={styles.buttonContainer}>

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
      alignItems:'center',
      justifyContent:'center',
  },
  buttonContainer:{
      flex:0.15,
      width:'93%',
      backgroundColor:'#FDFDFD',
      borderRadius:25,
      alignItems:'center',
      justifyContent:'center',
  },
  resultdetailtxt:{
      fontSize:18,
      fontWeight:'bold',
      color:'#FDFDFD',
  }
});

export default Result;
