import style from './tasks.module.css';

function Tasks(props) {
    return props.tasks.length > 0 ? (
        <ul className={style.tasksContainer}> {/*noi vom primi deja array de tasks filtrate, asa ca nu mai avem devoie de filter dar luam tasks din props */}
            {props.tasks.map(task => (//map ne permite sa trecem prin fiecare element al array
                <div>
                    <li key={task.id}> {/*fiecare li trebuie sa aiba key */}
                    <div className={style.task}>
                    <input type="checkbox"
                        checked={task.completed}
                        onChange={(event) => props.handleCompletedChange(task, event.target.checked)} />

                    <span style={{ textDecorationLine: task.completed === true ? 'line-through' : 'none' }}>{task.name}</span>

                    {/* OR */}
                    {/* <span className={task.completed === true && 'completed'}>{task.name}</span> */}
                    </div>

                    <div>
                        <button disabled={task.completed} onClick={() => props.setInputValue(task)}>Edit</button>{/*cand vom da click pe Edit vom salva intregul obiect cu props id, completed and name, iar ulterior in input vom edita doar proprietatea name. Cand vom da click pe SAVE vom verifica daca task are id inseamna ca el este unul existent si in acest caz va trebui sa il gasim in lista si sa ii schimbam valoarea, iar daca nu avem id inseamna ca acesta este un obiect nou si va trebui sa ii setam un nou id, completed sa fie false si sa il adaugam in lista (setTasks)*/}

                        <button onClick={() => props.handleRemove(task)}>Remove</button>
                    </div>
                   
                </li>
                <hr />
                </div>
            ))}
            
        </ul>
    ) : <p>There are no tasks in the list!</p>;
    {/*daca com avea itemi in array ii vom afisa, daca nu noi vom afisa un mesaj ca nu sunt item in aceatsa litsa */ }
}

export default Tasks;