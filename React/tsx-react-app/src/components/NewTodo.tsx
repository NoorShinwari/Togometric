import  React, {useRef} from 'react';
import './NewTodo.css'



 interface NewTodoProps {
    onAddTodo: (todoText: string)=> void;
}
 
const NewTodo: React.FC<NewTodoProps> = (props) => {

const textInputRef = useRef<HTMLInputElement>(null);
    const todoSumbitHandleer = (event: React.FormEvent)=>{
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddTodo(enteredText);

    };
    return ( <form onSubmit={todoSumbitHandleer}>
<div>
    <label htmlFor='todo-text'>
Todo Text
    </label>
        <input type='text' id='todo-text' ref={textInputRef}></input>
</div>
<button type='submit'>ADD TODO</button>
    </form> );
}
 
export default NewTodo;