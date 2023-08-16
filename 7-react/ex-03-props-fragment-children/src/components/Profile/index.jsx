/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import profile from "./profile.module.css"
import Title from "../Title"
import Paragraph from "../Paragraph"
import Button from "../Buttons"
import BoxButtons from "../Buttons/BoxButtons"
import Avatar from "../Avatar"

function handleClick(event) {
    console.log(event)
    alert("Você me seguiu.")
}

export default function Profile({profileImg, profileName, job, telNumber, email, linkedinUrl, github, twitterUrl}) {
    return (
        <div className={profile.card}>
            <Avatar>
                <img src={profileImg} alt={profileName} />
            </Avatar>
            <Title>
                <span>{profileName}</span>
                <button 
                    onClick={handleClick}
                    className={profile.followButton}
                >
                    Seguir
                </button>
            </Title>
            <Paragraph>{job}</Paragraph>
            <Paragraph>{telNumber}</Paragraph>
            <Paragraph>{email}</Paragraph>
            <BoxButtons>
                <Button href={github.url} target="_blank">{github.name}</Button>
                <Button href={linkedinUrl} target="_blank">LinkedIn</Button>
                <Button href={twitterUrl} target="_blank">Twitter</Button>
            </BoxButtons>
        </div>
    )
}