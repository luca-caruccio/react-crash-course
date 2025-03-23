import './App.css';
import Todo from './Components/Todo.jsx';
import Title from './Components/Title.jsx';
import Modal from './Components/modal.jsx'
function App() {
  return (
    <div>
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }}/>
        <button>Add todo</button>
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
      { <Modal title="Are you sure?"/> }
    </div>
  );
}

export default App;
