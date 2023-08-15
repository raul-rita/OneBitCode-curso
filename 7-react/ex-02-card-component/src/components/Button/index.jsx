/* eslint-disable react/prop-types */
import styles from "./Button.module.css"

export default function Button(props) {
    return (
        <button className={styles.btn}>{props.text}</button>
    )
}