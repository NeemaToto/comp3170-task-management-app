import Todos from "../Todos"
import { useState } from "react";
import styles from './TodoForm.module.css'

export default function TodosForm() {
    const [enteredText, setEnteredText] = useState("");
    const [submittedText, setSubmittedText] = useState([]);

    function textChangeHandler(text) {
        setEnteredText(text.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        setSubmittedText([...submittedText, enteredText]);
        setEnteredText("");
    };

    return (
        <div className={styles.itemContainer}>
            <form onSubmit={submitHandler}>
                <input
                    placeholder="Add a task..."
                    type="text"
                    value={enteredText}
                    onChange={textChangeHandler}
                />
                <button type="submit">Add</button>
            </form>
            <Todos subText={submittedText} />
        </div>
    )
}