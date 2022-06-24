import React, { Component } from 'react'

export default class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div>
                    <a href='https://localhost:8888' className='navbar-brand'>
                        Student Management App
                    </a>
                </div>
            </nav>
        </header>
      </div>
    )
  }
}
