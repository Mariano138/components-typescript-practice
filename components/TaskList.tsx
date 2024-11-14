import { FlatList, StyleSheet, Text } from "react-native";
import React from "react";
import Task from "./Task";

type taskMap = {
  name: string;
  id: number;
  completed: boolean;
};

type Props = {
  taskArray: taskMap[];
  toggleTaskCompleted: (id: number) => void;
};

const TaskList = ({ taskArray, toggleTaskCompleted }: Props) => {
  const renderTask = ({ item }: { item: taskMap }) => {
    return <Task item={item} toggleTaskCompleted={toggleTaskCompleted} />;
  };
  return (
    <FlatList
      data={taskArray}
      renderItem={renderTask}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default TaskList;

const styles = StyleSheet.create({});
