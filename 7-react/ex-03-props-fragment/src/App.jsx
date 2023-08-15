import Profile from "./components/Profile"
import raul from "./assets/eu.jpg"


function App() {

  return (
    <>
      <Profile 
        profileImg={raul}
        profileName="Raul Rita"
        job="Fullstack Javascript Developer"
        telNumber="16 9 9763-2363"
        email="raul.vinicius@live.com"
        githubUrl={{url:"https://github.com/raul-rita", name:"GitHub"}}
        linkedinUrl="https://likedin.com/raul-rita"
        twitterUrl="https://twitter.com"
      />
    </>
  )
}

export default App
