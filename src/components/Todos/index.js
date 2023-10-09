import Todo from "../Todo"
import styles from './Todos.module.css'

export default function Todos({
    subText
}) {

    return (
        <div className={styles.itemContainer}>
            {
                subText.map((text, index) => {
                    return (
                        <div key={index}>
                            <Todo listItem={text} />
                        </div>
                    )
                })
            }
        </div>
    )
}