import style from './taskInput.module.css';

function TaskInput(props) {
    return (
        <div className={style.inputContainer}>
            <input className={style.inputBar} type="text"
                placeholder='Add a new task'
                value={props.inputValue.name}
                onInput={(event) => props.setInputValue({
                    ...props.inputValue, name: event.target.value
                })} />{/*rescriem doar proprietatea name, restul cu rest operator adaugam */}

            <button className={style.btn} onClick={() => { props.handleSave() }}>Save</button>
        </div>
    );
}

export default TaskInput;