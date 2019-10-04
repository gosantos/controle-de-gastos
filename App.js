import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';
import Constants from 'expo-constants';


export default function App() {
  const [expense, onChangeText] = useState('Mercado - 12,89');
  const [expenses, setExpenses] = useState([])

  const addExpenseHandler = (newExpense) => {
    const {expense} = newExpense
    console.log("handleExpenseButton: ", expense)
    setExpenses(currentExpenses => [
      ...currentExpenses,
      { id: Math.random().toString(), title: expense }
    ])
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={expense => onChangeText(expense)}
        value={expense} />

      <Button title="Add" onPress={() => addExpenseHandler({ expense })} />

      <FlatList
        data={expenses}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  textInput: {
    fontSize: 32,
    borderColor: 'gray',
    borderWidth: 1,
  }
});
