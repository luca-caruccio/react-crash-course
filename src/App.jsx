import './App.css';
import Todo from './Components/Todo.jsx';
import Title from './Components/Title.jsx';
import Modal from './Components/Modal.jsx';

function App() {
  return (
    <div>
      <Title />
      <div className='todo__wrapper'>
      
      <Todo />
      <Todo />
      <Todo />
      </div>
      <Modal />
    </div>
  );
}

export default App;
