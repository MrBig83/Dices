// import { useContext } from "react"
import "./headerStyle.css"

// import { UserContext } from "../../context/userContext"


function Header() {

  // const { setUsername } = useContext(UserContext)



  function renderLogin() {

  }

  // function login() {
  //   if(document.querySelector("input").value){
  //     setUsername(document.querySelector("input").value)
  //   }
  // }


  return (
    <div className="header">
        <img alt="Logo" />
        <div className="header-right">

          {/* <input type="text" /> */}
          <button onClick={renderLogin}>Logga in</button>
          <img alt="Cart" />
        </div>
    </div>
  )
}

export default Header