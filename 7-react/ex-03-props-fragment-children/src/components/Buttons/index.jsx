/* eslint-disable react/prop-types */
import styles from "./button.module.css"

export default function Button(props) {
    return (
        <a className={styles.btn} {...props}>
            {props.children}
        </a>
    )
}