import PropTypes from "prop-types"
import styles from "./TextInput.module.css"

TextInput.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  label: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string
}

export default function TextInput({ value, setValue, label, id, placeholder }) {

  return (
    <div className={styles.input__box}>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        name={id}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  )
}