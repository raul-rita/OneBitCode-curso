/* eslint-disable react/prop-types */
import styles from "./avatar.module.css"

export default function Avatar(props) {
    return (
        <div className={styles.avatar}>
            {props.children}
        </div>
    )
}