import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useStopwatch } from 'react-timer-hook';

const TimerApp = () => {
  const {
    seconds,
    minutes,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });

  const [isLapsed, setIsLapsed] = useState(false);
  const [lapseconds, setLapSeconds] = useState(0);
  const [lapminutes, setLapMinutes] = useState(0);

  useEffect(() => {
    if (isLapsed) {
      setLapSeconds(seconds);
      setLapMinutes(minutes);
    }
  }, [isLapsed]);

  const handleStart = () => {
    if(isLapsed){
      setIsLapsed(false);
    }else{
      start();
    }
  };

  const handleStop = () => {
    pause();
  };

  const handleLap = () => {
    setIsLapsed(!isLapsed);
  };

  const handleReset = () => {
    setIsLapsed(false);
    setLapMinutes(0);
    setLapSeconds(0);
    reset();
  };

  return (
    <View style={styles.container}>
    <View style={{flex:0.5,width:'100%',alignItems:'center',justifyContent:'center'}}>
    <View style={{width:"70%",height: "65%",borderRadius: 500,borderWidth: 2,borderColor: 'red'}}>
    </View>
    </View>
    <View style={{flex:0.3,backgroundColor:'green',width:'100%'}}>
    </View>
    <View style={{flex:0.2,backgroundColor:'yellow',width:'100%'}}>
    </View>
      {/* {!isLapsed ? (
        <Text style={styles.timerText}>
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </Text>
      ) : (
        <Text style={styles.timerText}>
          {String(lapminutes).padStart(2, '0')}:{String(lapseconds).padStart(2, '0')}
        </Text>
      )}
      <TouchableOpacity style={styles.button} onPress={handleStart}>
        <Text>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleStop}>
        <Text>Stop</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLap}>
        <Text>Lap</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleReset}>
        <Text>Reset</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerText: {
    fontSize: 30,
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: 'green',
  },
};

export default TimerApp;
