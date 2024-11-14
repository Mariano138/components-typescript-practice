import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

type task = {
  name: string;
  id: number;
  completed: boolean;
};

type Props = { item: task; toggleTaskCompleted: (id: number) => void };

const Task = ({ item, toggleTaskCompleted }: Props) => {
  const handleTaskCompleted = () => {
    toggleTaskCompleted(item.id);
  };
  return (
    <View>
      <Text>{item.name}</Text>
      <TouchableOpacity onPress={handleTaskCompleted}>
        <Text>{item.completed ? "✔" : "❌"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({});
