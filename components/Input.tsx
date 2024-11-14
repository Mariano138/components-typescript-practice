import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import TaskList from "./TaskList";

interface TaskMap {
  name: string;
  id: number;
  completed: boolean;
}

const Input = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [taskArray, setTaskArray] = useState<TaskMap[]>([]);

  const handleAddTask = () => {
    if (newTask === "") return;

    const taskMap: TaskMap = {
      name: newTask,
      id: newTask.length,
      completed: false,
    };
    setTaskArray((tasks) => [...tasks, taskMap]);
    setNewTask("");
  };

  const toggleTaskCompleted = (taskId: number) => {
    setTaskArray((prevTask) =>
      prevTask.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <View>
      <TextInput
        placeholder="Write a task..."
        value={newTask}
        onChangeText={(text) => setNewTask(text)}
      />
      <Button title="Add" onPress={handleAddTask} />
      <TaskList
        taskArray={taskArray}
        toggleTaskCompleted={toggleTaskCompleted}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
