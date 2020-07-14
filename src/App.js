import React, { useState, useEffect } from 'react';
import { Button, FormControl,Input,InputLabel } from '@material-ui/core'
import Todo from './Todo';
import './App.css';
import db from'./firebase';
import firebase from 'firebase';


function App() {
  const [todos, setTodos]=useState([]);
  const [input, setInput]=useState('');
  //when app loads, new todos from database fetch
 useEffect(() => {
   //this code fires when app loads
   db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
     //console.log(snapshot.docs.map(doc => doc.data()));
    setTodos(snapshot.docs.map(doc => ({id:doc.id ,todo: doc.data().todo})))
   })
 },[]);

const addTodo=(event) => {
event.preventDefault(); //stop refresh
db.collection('todos').add({
  todo:input,
  timestamp: firebase.firestore.FieldValue.serverTimestamp()
})
setInput(''); //clear the input
}

  return (
    <div className="App">
      <h1>hello</h1>
      
      <form>
      

    <FormControl>
    <InputLabel>write todo </InputLabel>
    <Input val={input} onChange={event => setInput(event.target.value)}/>
    </FormControl>

      <Button disabled={!input} type="submit"onClick={addTodo} variant="contained" color="primary">
  add todo
</Button>
      {/*<button type="submit"onClick={addTodo}>add todo</button>*/}
      </form>
      <ul>
        {todos.map( todo => (
          <Todo todo={todo}/>
         
        ))}
      </ul>
    </div>
  );
}

export default App;
