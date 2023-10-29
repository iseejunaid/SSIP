import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TopResult from './components/topResult';
import Keyboard from './components/keyboard';
import { useState } from 'react';

export default function App() {
  const [history, setHistory] = useState('');
  const [current, setCurrent] = useState('0');

  const handlePress = (buttonPressed) => {
    if(buttonPressed == 'C'){
      setCurrent('0');
      setHistory('');
    }
    else if(buttonPressed == '='){
      setHistory(current);
      calculate();
    }
    else if(buttonPressed == 'bkspce'){
      setCurrent(current.slice(0, -1));
    }
    else if(current == '0'){
      setCurrent(buttonPressed);
      
    }else{
      setCurrent(current+buttonPressed);
    }
  }

  const calculate = () => {
    try {
      let result = current;
      result = result.replace(/(\d+) *\^2/g, '$1**2');
      result = result.replace(/(\d+) *%/g, '($1/100)');
      result = eval(result);
      result = Math.round(result * 10000) / 10000;
      setCurrent(result);
    } catch (error) {
      setCurrent('Error');
    }
  }
  

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{flex:0.4,width:"100%"}}>
        <TopResult history={history} result={current}/>
      </View>
      <View style={{flex:0.6,width:"100%"}}>
        <Keyboard onPress={handlePress}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});