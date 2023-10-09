import styles from './Todo.module.css'
import { useState } from 'react'

export default function Todo({
    listItem
}) {
    const [strikeThrough, setStrikeThrough] = useState('')

    function handleStyle() {
        setStrikeThrough('line-through')
    }

    function handleDelete(event) {
        const target = event.target;
        const ele = target.parentElement;
        ele.remove();
    }

    return (
        <div className={styles.Container}>
            <div className={styles.itemContainer}>
                <div className={styles.task_box}>
                    <input type="checkbox" onClick={() => handleStyle()} />
                    <p style={{ textDecoration: `${strikeThrough}` }}>{listItem}</p>
                </div>
                <button className={styles.button} onClick={(e) => handleDelete(e)}>Delete</button>
            </div>
        </div>
    )
}