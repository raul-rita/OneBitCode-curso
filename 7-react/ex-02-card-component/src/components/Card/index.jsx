/* eslint-disable react/prop-types */
import styles from "./Poster.module.css"
import Button from "../Button"

const Card = ({title, posterImg}) => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <img src={posterImg} alt={title} />
                <div>
                    <h1>{title}</h1>
                    <p>Um poster decorativo épico do filme Star Wars, com modldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
                    <Button text="Comprar agora" />
                </div>
            </div>
        </div>
    )
}

export default Card