import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { useState, useEffect } from "react";
export default function App() {
  const [goalList, setGoalList] = useState("");
  const [enteredGoalText, setEnteredGoalText] = useState("cric");
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function dataInput(data1) {
    setEnteredGoalText(data1);
  }

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  // console.log(enteredGoalText);
  //   useEffect(()=>  console.log(courseGoals)
  // ,[courseGoals]  )

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setEnteredGoalText("");
    endGoalHandler();

    // setEnteredGoalText("");
  }

  function endGoalHandler() {
    setModalIsVisible(false);
  }

  // function goalInputHandler(enteredText) {
  //   // console.log(enteredText)
  //   setEnteredGoalText(enteredText);
  // }

  function deleteGoalHandler(id) {
    console.log("delete");
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="add new goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      <GoalInput
        data={dataInput}
        onAddGoal={addGoalHandler}
        visible={modalIsVisible}
        onCancel={endGoalHandler}
      />
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                id={itemData.item.id}
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 70,
    
  },

  goalContainer: {
    flex: 5,
    paddingHorizontal: 20,
    marginTop: 24,
  },
});
