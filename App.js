import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View,ScrollView, Keyboard } from 'react-native';
import { useState } from 'react';
import Item from './components/Item';

export default function App() {
  const [text, setText] = useState("");
  const [task, setTask] = useState([]);
  const HandleTaskItem = () =>{
    setTask([...task,text]);
    setText(null);
    Keyboard.dismiss();
  }
  const deleteTask = (index) =>{
    let tasksCopy = [...task];
    tasksCopy.splice(index,1);
    setTask(tasksCopy);
  }
  return (
    <>
      <View style={styles.container}>
        {/* app header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Task Manager</Text>
        </View>
        {/* tasks map by javascript method */}
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
          <View>
            {
              task.map((taskItem,key)=>{
                return(
                  <TouchableOpacity key={key} onPress={()=>deleteTask(key)}>
                    <Item text={taskItem}/>
                  </TouchableOpacity>
                );
              })
            }
          </View>
        </ScrollView>
        
        {/* input side */}
        <View style={styles.inputSide}>
          <TextInput
            style={styles.input}
            placeholder='Add New Task'
            value={text}
            onChangeText={text=>setText(text)}
          />
          <TouchableOpacity style={styles.addBtnTask} onPress={HandleTaskItem}>
            <Text style={styles.addBtnTaskTxt}>+</Text>
          </TouchableOpacity>
        </View>
        {/* {task.map((text,index)=>{
          return(
              <TouchableOpacity key={index} onPress={() => deleteTask(index)}>
                <Item text={text}/>
              </TouchableOpacity>
            
          )
        })} */}
        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  header:{
    marginTop: 45,
    marginLeft: 10
  },
  headerText:{
    fontSize: 32,
    color: 'black'
  },
  inputSide:{
    width: "100%",
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  input:{
    backgroundColor: '#fff',
    color: '#000',
    margin: 20,
    width: 270,
    height: 60,
    padding: 10,
    borderRadius: 20,
  },
  addBtnTask:{
    backgroundColor: '#fff',
    borderRadius: 50,
    height: 60,
    width: 60,
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtnTaskTxt:{
    fontSize: 25,
  },
  scrollContent:{
    paddingBottom: 100,
  }
});
