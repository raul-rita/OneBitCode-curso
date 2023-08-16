/* eslint-disable react/prop-types */
import styles from "./boxButtons.module.css"

export default function BoxButtons(props) {
    return (
        <div
            {...props}
            className={`${styles.boxButtons}`}
        >
            {props.children}
        </div>
    )
}