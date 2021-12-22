import React from 'react'
import './Header.css'

export default function Header({black}) {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="#">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'/>
                </a>
            </div>
            <div className="header--user">
                <a href="#">
                    <img src='https://i.pinimg.com/originals/2b/90/0d/2b900d5612554cd0b5edf7d8e848c3ea.png'/>
                </a>
            </div>
        </header>
    )
}
