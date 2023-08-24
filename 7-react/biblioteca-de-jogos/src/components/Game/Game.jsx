import PropTypes from "prop-types"
import styles from "./Game.module.css"
import Button from "../Button/Button"

Game.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
  onRemove: PropTypes.func
}

export default function Game({ title, cover, onRemove }) {
  return (
    <div className={styles.game}>
      <img src={cover} alt="" />
      <h2>{title}</h2>
      <Button onClick={onRemove}>Remover</Button>
    </div>
  )
}