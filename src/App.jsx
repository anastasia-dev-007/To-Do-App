import { useState } from 'react';
import TaskInput from './components/TaskInput/TaskInput';
import Statuses from './components/Statuses/Statuses';
import Tasks from './components/Tasks/Tasks';

function App() {
  const defaultTaskValue = {
    id: null,
    name: '',
    completed: false,
  };
  const [inputValue, setInputValue] = useState(defaultTaskValue);
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState(null);//daca este null, inseamna ca filtram tot, daca false, atunci doar cele Pending si daca True, atunci doar cele completed

  const handleSave = () => {
    console.log(inputValue);

    if (inputValue.id === null) {
      inputValue.id = tasks.length + 1;

      setTasks([...tasks, inputValue]);
    } else {
      const index = tasks.findIndex(item => item.id === inputValue.id);

      if (index !== -1) {
        tasks[index] = inputValue; //pentru tasks de pe pozitia index setam o alta valoare, adica inputValue
      }

      setTasks([...tasks]); //dupa ce taskul a fost modificat detam un nou array utilizand rest operator
    }

    setInputValue(defaultTaskValue);
  };

  const handleRemove = (task) => {
    setTasks([...tasks.filter(item => item.id !== task.id)]);

    //OR

    // const index = tasks.findIndex(item => item.id === task.id);

    // if (index !== -1) {
    //   tasks.splice(index, 1);
    // }

    // setTasks([...tasks]);
  };

  const handleCompletedChange = (task, checked) => {
    const index = tasks.findIndex(item => item.id === task.id);

    if (index !== -1) {
      tasks[index] = { ...task, completed: checked };
    }

    setTasks([...tasks]);
    console.log(tasks);
  };

  const handleClearAll = () => {
    setTasks([]);
    setInputValue(defaultTaskValue);
  };

  return (
    <div className='mainContainer'>
      <p style={{fontSize: '25px', textAlign: 'center', margin: '20px' }}><b>TO DO APP</b></p>
      <TaskInput inputValue={inputValue}
        setInputValue={setInputValue}
        handleSave={handleSave} />

      {/* <div>
        <input type="text"
          placeholder='Add a new task'
          value={inputValue.name}
          onInput={(event) => setInputValue({
            ...inputValue, name: event.target.value
          })} />{/*rescriem doar proprietatea name, restul cu rest operator adaugam 
          
          <button onClick={() => { handleSave() }}>Save</button>
      </div> */}
      <div className='filter'>
        <Statuses status={status} setStatus={setStatus} />
        {/* <ul>
          <li className={status === null ? 'active' : null} style={{ color: status === null ? 'blue' : 'black' }} onClick={() => setStatus(null)}>All</li>
          <li className={status === false ? 'active' : null} style={{ color: status === false ? 'blue' : 'black' }} onClick={() => setStatus(false)}>Pending</li>
          <li className={status === true ? 'active' : null} style={{ color: status === true ? 'blue' : 'black' }} onClick={() => setStatus(true)}>Completed</li>
        </ul> */}

        <button className='btn' onClick={() => handleClearAll()}>Clear All</button>
      </div>

      <hr/>

      <Tasks tasks={tasks.filter(task => {
        if (status === null) {
          return true;
        } else if (status === true) {
          return task.completed === true;
        } else {
          return task.completed === false;
        }

        //OR
        // return status === null ? true : task.completed === status;

      })
      }
        handleCompletedChange={handleCompletedChange}
        setInputValue={setInputValue}
        handleRemove={handleRemove} />
      {/* <div>
        <ul>
          {tasks.filter(task => {
            if (status === null) {
              return true;
            } else if (status === true) {
              return task.completed === true;
            } else {
              return task.completed === false;
            }

            //OR

            // return status === null ? true : task.completed === status;

          }).map(task => (//map ne permite sa trecem prin fiecare element al array
            <li key={task.id}> {/*fiecare li trebuie sa aiba key */}
      {/* <input type="checkbox"
                checked={task.completed}
                onChange={(event) => handleCompletedChange(task, event.target.checked)} />
              <span style={{ textDecorationLine: task.completed === true ? 'line-through' : 'none' }}>{task.name}</span> */}

      {/* OR */}
      {/* <span className={task.completed === true && 'completed'}>{task.name}</span> */}
      {/* <div>
                <button disabled={task.completed} onClick={() => setInputValue(task)}>Edit</button>{/*cand vom da click pe Edit vom salva intregul obiect cu props id, completed and name, iar ulterior in input vom edita doar proprietatea name. Cand vom da click pe SAVE vom verifica daca task are id inseamna ca el este unul existent si in acest caz va trebui sa il gasim in lista si sa ii schimbam valoarea, iar daca nu avem id inseamna ca acesta este un obiect nou si va trebui sa ii setam un nou id, completed sa fie false si sa il adaugam in lista (setTasks)*/}
      {/* <button onClick={() => handleRemove(task)}>Remove</button>
              </div> */}
      {/* </li>
          ))}
        </ul>
      </div> */}
       
    </div>


  );
}

export default App;
