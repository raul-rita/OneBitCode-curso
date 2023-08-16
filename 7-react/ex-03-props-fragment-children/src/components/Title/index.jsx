/* eslint-disable react/prop-types */
import styles from "./title.module.css"

export default function Title(props) {
    return (
        <h2 className={styles.title}>
            {props.children}
        </h2>
    )
}