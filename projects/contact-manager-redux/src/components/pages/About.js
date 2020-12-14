import React from 'react'

function About() {
    // add "props" if you want to add params in page
    return (
        <div>
            <h3 className="display-3">
                {/* {props.match.params.id} */}
                About Contact Manager</h3>
            <p className="lead">This is a simple app to manage contacts</p>
            <p className="text-secondary">
                latest version
            </p>
        </div>
    )
}

export default About;