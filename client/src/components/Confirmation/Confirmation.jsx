import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"

function Confirmation() {

localStorage.removeItem("DiceCart")
const [isPaymentVerified, setIsPaymentVerified] = useState(false)


useEffect(()=> {
  const sessionId = localStorage.getItem("SessionId")
  console.log(sessionId);
  const verifyPayment = async () => {

    const response = await fetch (`http://localhost:3000/api/verify-session`, {
      method: "POST", 
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({sessionId}) 
    })
    const {verified} = await response.json()
    if (verified){
      setIsPaymentVerified(true)
      localStorage.removeItem("SessionId")
    } else {
      setIsPaymentVerified(false)
    }
  }

  verifyPayment()
}, [])


  return (
    <>
    {isPaymentVerified ? <h1>Tack för ditt köp</h1> : <h1>Något gick fel med betalningen</h1>}
    <NavLink to="/"><button>Tillbaka till butiken</button></NavLink>
    
    </>
    
  )
}

export default Confirmation