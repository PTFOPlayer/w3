import React from 'react'
import "./sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar-item">
            <span className="sidebar-title">O TechNews</span>
            <p>
                TechNews to blog o nowinkach technologicznych i przeciekach. Skupiamy się na pisaniu o tematach z branży PC
                które są w zasięgu ręki każdego entuzjasty komputerowego, oraz staramy się przybliżyć tematy 
                które są bardziej odległe międziy innymi, świat SBC i innych minikomputerów, świat serwerów i świat 
                wyspecjalizowanych stacji komputerowych oraz super komputerów.
            </p>
        </div>
        <div className="sidebar-item">
            <span className="sidebar-title">Posts</span>
            <ul className="sidebar-list">
                <li className="sidebar-list-item">Post 1</li>
                <li className="sidebar-list-item">Post 2</li>
                <li className="sidebar-list-item">Post 3</li>
                <li className="sidebar-list-item">Post 4</li>
                <li className="sidebar-list-item">Post 5</li>
                <li className="sidebar-list-item">Post 6</li>
                <li className="sidebar-list-item">Post 7</li>
                <li className="sidebar-list-item">Post 8</li>
                <li className="sidebar-list-item">Post 9</li>
                <li className="sidebar-list-item">Post 10</li>
            </ul>
        </div>
        <div className="sidebar-item">
            <span className="sidebar-title">Social media / Contact</span>
            <div className="sidebar-social">
                <i className="sidebarIcon fa-brands fa-youtube"></i>
                <i className="sidebarIcon fa-brands fa-telegram"></i>
                <i className="sidebarIcon fa-brands fa-facebook"></i>
            </div>
        </div>
    </div>
  )
}

export default Sidebar