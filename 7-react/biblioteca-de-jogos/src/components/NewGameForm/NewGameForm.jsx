import { useState } from "react"
import PropTypes from "prop-types"
import TextInput from "../TextInput/TextInput"
import styles from "./NewGameForm.module.css"
import Button from "../Button/Button"

NewGameForm.propTypes = {
  addGame: PropTypes.func
}

export default function NewGameForm({ addGame }) {

  const [title, setTitle] = useState("")
  const [cover, setCover] = useState("")

  const handleSubmit = (ev) => {
    ev.preventDefault()
    addGame({ title, cover })
    setTitle("")
    setCover("")
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form__box}>

      <TextInput
        id="title"
        label="Título:"
        value={title}
        setValue={setTitle}
        placeholder="Digite o nome do jogo..."
      />

      <TextInput
        id="cover"
        label="Capa:"
        value={cover}
        setValue={setCover}
        placeholder="Digite o link na web da capa do jogo..."
      />

      <Button type="submit">Adicionar</Button>
    </form>
  )
}