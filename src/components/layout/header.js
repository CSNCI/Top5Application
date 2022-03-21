import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import IpAddress from './ip_address'
function Header() {
  return (
    <section className="App-header">
      <div className="Header-top"></div>
      <section className="Header-bottom">
        <span className="Logo">
          <img src="../img/top5_logo.png" alt="Logo" />
        </span>
        <span>The Most Famous People of All Time in Ireland</span>
      </section>
      <section className="Header-navBar">
        <a
          href="../"
          className="btn btn-dark btn-lg active mx-5 mt-2"
          role="button"
          aria-pressed="true"
        >
          Home Page
        </a>
        <IpAddress />
      </section>
    </section>
  )
}

export default Header
