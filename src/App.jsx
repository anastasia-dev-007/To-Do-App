import './App.css';
import Filter from './components/Filter';
import Input from './components/Input';
import TasksList from './components/TasksList';

function App() {
  return (
    <div>
      <h1>TO DO APP</h1>
      
      <Input />

      <Filter />

      <TasksList />
    </div>
  );
}

export default App;
