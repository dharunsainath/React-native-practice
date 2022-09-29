import { StyleSheet, View, Text, TextInput, Button, Modal, Image } from "react-native";
import { useState } from "react";

function GoalInput({ data, onAddGoal, visible, onCancel}) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  //   const [courseGoals, setCourseGoals] = useState([]);
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  data(enteredGoalText);

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
      <Image style={styles.image} source={require('../assets/images/goal.png')}/>
      
        <TextInput
          style={styles.textInput}
          placeholder="your course goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          placeholderTextColor="white" 
        ></TextInput>
        <View style={styles.buttonContainer}>
        <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color='white' />
          </View>
          <View style={styles.button}>
            <Button title="Add goal" onPress={addGoalHandler} color='white' />
          </View>
          
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    padding: 16,
    backgroundColor: "#311b6b"
  },
  image:{
    width: 100,
    height: 100,
    margin: 20

  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
    
    
  },
  textInput: {
    borderWidth: 1,
    color: 'white',
    
    borderColor: "#cccccc",
    padding: 8,
    borderRadius: "10%",
    width: "70%",
    width: '90%',
    marginRight: 2,
  },
});
