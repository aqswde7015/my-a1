import React, { useState } from 'react';
import AddTAsk from './component/AddTAsk';
import TaskList from './component/TaskList';
import "./App.css"
function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo) {
      setTodoList([...todoList, { id: Date.now(), text: newTodo }]);
      setNewTodo('');
    }
  };


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Danh sách các việc cần làm</h1>

      <AddTAsk new = {newTodo} func = {setNewTodo} add = {handleAddTodo}/>
      <TaskList List = {todoList} set = {setTodoList}/>
      
    </div>
  );
}

export default App;
