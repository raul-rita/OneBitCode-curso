/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import profile from "./profile.module.css"
import styles from "../../styles/styles.module.css"


export default function Profile({profileImg, profileName, job, telNumber, email, linkedinUrl, githubUrl, twitterUrl}) {
    return (
        <div className={profile.card}>
            <img className={styles.profilePhoto} src={profileImg} alt={profileName} />
            <h1 className={styles.title}>{profileName}</h1>
            <p className={styles.paragraph}>{job}</p>
            <p className={styles.paragraph}>{telNumber}</p>
            <p className={styles.paragraph}>{email}</p>
            <div className={styles.boxButtons}>
                <a className={styles.btn} href={githubUrl.url} target="_blank">{githubUrl.name}</a>
                <a className={styles.btn} href={linkedinUrl} target="_blank">LinkedIn</a>
                <a className={styles.btn} href={twitterUrl} target="_blank">Twitter</a>
            </div>
        </div>
    )
}