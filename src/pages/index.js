import * as React from "react"
import { Link } from 'gatsby'
import  './layout.css'
// markup
const IndexPage = () => {
  return (
    <main className="box">
      <form className="form">
        <div className="container">
        <label for="uname">Username:</label><br />
        <input type="text" placeholder="Enter username"></input><br /><br />
        <label for="uname">Password:</label><br />
        <input type="text" placeholder="Enter password"></input><br /> <br />
        <p className="line"> If you don't have an account <Link to = "/signup" className="signup"> sign up </Link></p>
        </div>
      </form>
    </main>
  )
}

export default IndexPage
