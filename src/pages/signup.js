import * as React from "react"
import './layout2.css'
// markup
function shoot(){
  alert("New user registered!");
}
const IndexPage = () => {
  return (
    <main className="box2">
      <form className="form"> 
        <div className = "container">
        <label for="email">Email:&nbsp;</label><br />
        <input type="text" placeholder="Enter email" required></input><br /> <br />    
        <label for="uname">New Username:</label><br />
        <input type="text" placeholder="Enter username" required></input><br /><br />
        <label for="uname">Password:</label><br />
        <input type="password" placeholder="Enter password" required></input><br /> <br />
        <label for="uname">Confirm Password:</label> <br />
        <input type="password" placeholder="Enter password again" required></input><br /> <br />
        <button> Submit </button>
        </div>
      </form>
    </main>
  )
}

export default IndexPage