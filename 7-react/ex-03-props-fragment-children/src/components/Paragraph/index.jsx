/* eslint-disable react/prop-types */
import styles from "./paragraph.module.css"

export default function Paragraph(props) {
    return (
        <p className={styles.paragraph}>
            {props.children}
        </p>
    )
}