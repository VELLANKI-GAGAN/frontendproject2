import React, { Component } from 'react'
import './css/Page4.css'

export default class page4 extends Component {
  render() {
    return (
      <div>
        <header>
            <nav>
                <div className='logo'>My website</div>
                <ul id='navlist'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
                <div className='menu' onClick={()=>this.menuClick()}>&#9786;</div>
            </nav>
        </header>
        <section>
       <h1>Welcome to Responsive Webpage</h1>
       <p>This is an example webpage which can adopt any screen size</p>
        </section>
        <footer>
        Copyright @ 2025 All rights reserved.
        </footer>
      </div>
    )
  }
}
