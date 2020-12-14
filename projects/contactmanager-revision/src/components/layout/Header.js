import React from 'react'

function Header(props) {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger py-0 mb-3">
            <div className="container">
                <a href="/" className="navbar-brand">{props.branding}</a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

Header.defaultProp = {
    branding: "Contact Manager"
}
export default Header;
