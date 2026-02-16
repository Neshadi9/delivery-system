import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

export function App(){
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isSignupOpen, setIsSignupOpen] = useState(false)
  function toggleLogin(){
    setIsLoginOpen(prevIsLoginOpen => !prevIsLoginOpen)
  }
  function toggleSignUp(){
    setIsSignupOpen(prevIsSignupOpen => !prevIsSignupOpen)
  }

  return(
    <>
      <Header toggleLogin={toggleLogin} toggleSignup={toggleSignUp}/>
      <Hero />
      <LoginModal 
        isLoginOpen={isLoginOpen} 
        onClose={toggleLogin}
        switchToSignup={()=>{
          toggleLogin()
          toggleSignUp()
        }} 
        
        />
      <SignupModal 
        isSignupOpen={isSignupOpen}
        onClose={toggleSignUp}
        switchToLogin={()=>{
          toggleSignUp()
          toggleLogin()
        }}  />
    </>
  )
}