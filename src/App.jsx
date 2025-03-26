import './App.css';
import Todo from './Components/Todo.jsx';
import Title from './Components/Title.jsx';
import Modal from './Components/modal.jsx';
import React, { useState } from 'react';
import Counter from './Components/Counter.jsx';

function App() {
  return <Counter />
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }}/>
        <button onClick={ () => setShowModal(true)}>Add todo</button>
      </div>
      <div className='todo__wrapper'>
      
      <Todo 
      
      title="Finish Frontend Simplified"
      />
      <Todo 
      
      title="Finish the Interview Section"
      />
      <Todo 
      
      title="Land a Six-Figure Job"
      />
      </div>
      {false && <Modal title="Are you sure?"/>}
    </div>
  );
}

export default App;
