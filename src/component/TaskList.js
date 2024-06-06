import React from 'react';
import Task from './Task';

function TaskList(props) {
    return (
        <ul className="list-none">
        {props.List.map((todo) => (
          <Task node = {todo} set = {props.set} List = {props.List}/>
        ))}
      </ul>
    );
}

export default TaskList;