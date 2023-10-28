import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useStopwatch } from 'react-timer-hook';

const TimerApp = () => {
  const {
    seconds,
    minutes,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });

  const [isStart, setIsStart] = useState(false);
  const [idindex, setIdIndex] = useState(0);

  const [DATA, setData] = useState([]);
  useEffect(() => {
    
  }, [idindex]);

  const Item = ({ min, sec }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.timerText}>{min} : {sec}</Text>
      </View>
    );
  };
  

  const handleStartStop = () => {
    if(isStart){
      setIsStart(false);
      pause();
    }
    else{
      setIsStart(true);
      start();
    }
  };

  const handleLap = () => {
    if(isStart){
      const newItem = {
        id: idindex.toString(),
        min: String(minutes).padStart(2, '0'),
        sec: String(seconds).padStart(2, '0'),
      };
      setData([...DATA, newItem]);
      setIdIndex(idindex + 1);
    }
  };

  const handleReset = () => {
    setData([]);
    setIdIndex(0);
    reset();
  };

  return (
    <View style={styles.container}>
    <View style={{flex:0.5,width:'100%',alignItems:'center',justifyContent:'center'}}>
    <View style={{width:"52%",height: "50%",borderRadius: 500,borderWidth: 2,borderColor: '#F24448',alignItems:'center',justifyContent:'center'}}>
      <Text style={styles.timerText}>
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </Text>
    </View>
    </View>
    <View style={{flex:0.3,width:'100%',alignItems:'center'}}>
      <FlatList
          style={{width:'100%'}}
          data={DATA}
          renderItem={({item}) => <Item min={item.min} sec={item.sec} />}
          keyExtractor={item => item.id}
        />
    </View>
    <View style={{flex:0.2,width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
      <TouchableOpacity 
        style={styles.button}
        onPress={handleReset}>
        <Text style={[styles.timerText, { fontSize: 20 }]}>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={handleStartStop}>
        { isStart ? 
          <Text style={[styles.timerText, { fontSize: 20 }]}>Stop</Text>
          :
          <Text style={[styles.timerText, { fontSize: 20 }]}>Start</Text>
        }
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={handleLap}>
        <Text style={[styles.timerText, { fontSize: 20 }]}>Lap</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#232241'
  },
  timerText: {
    fontSize: 30,
    color: '#ffffff',
  },
  button: {
    backgroundColor: '#F24448',
    width:'25%',
    height:'25%',
    alignItems:'center',
    justifyContent:'center',
  },
  item: {
    padding: 10,
    alignItems:'center',
    marginBottom: '5%',
  },
};

export default TimerApp;
