import React from 'react';
import { useRef } from 'react';
import Button from './Button';

function Task(props) {
    const elementRef = useRef(null);

  const handleDelete = () => {
    elementRef.current.remove();
  };
    return (
       <li ref= {elementRef}key={props.node.id} className={"flex items-center mb-2"}
            
              onClick={() => {
                props.set(
                  props.List.map((t) =>
                    t.id === props.node.id ? { ...t, done: !t.done } : t
                  )
                );
              }}>
            <span
              className={props.node.done ? 'text-grey-500 line-through bg-gray-500' : ''}
            >
              {props.node.text}
            </span>
            {/* <button
              className="ml-2 text-red-500 hover:text-red-700 "
              onClick={handleDelete}
            >
              X
            </button> */}
            <Button class = {"ml-2 text-red-500 hover:text-red-700 "}text = {"X"} on = {handleDelete}/>
            <Button class = {"left-7"}text = {"edit"}></Button>
          </li>
    );
}

export default Task;