import style from './statuses.module.css'

function Statuses (props) {
    return (
        <ul className={style.list}>
            <li className={props.status === null ? 'active' : null} style={{ color: props.status === null ? 'blue' : 'black' }} onClick={() => props.setStatus(null)}>All</li>
            <li className={props.status === false ? 'active' : null} style={{ color: props.status === false ? 'blue' : 'black' }} onClick={() => props.setStatus(false)}>Pending</li>
            <li className={props.status === true ? 'active' : null} style={{ color: props.status === true ? 'blue' : 'black' }} onClick={() => props.setStatus(true)}>Completed</li>
        </ul>
    );
}

export default Statuses;