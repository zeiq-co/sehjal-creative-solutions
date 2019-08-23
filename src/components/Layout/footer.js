import React, { Component } from "react"

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <a href="/" className="footer-text">
          © {new Date().getFullYear()}
          {` `} Sehjal Creative Solutions.
        </a>
      </footer>
    )
  }
}
export default Footer
