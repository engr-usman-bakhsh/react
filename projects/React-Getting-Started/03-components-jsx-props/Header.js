import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => {
    const { heading } = props;
    return (
        <div>
            <h1 style={{ color: 'red', fontSize: '50px' }}>{heading}</h1>
            <h2 style={styling}>{heading}</h2>

        </div >
    )
}

Header.defaultProps = {
    heading: "My App"
};

Header.propTypes = {
    heading: PropTypes.string.isRequired,
};
const styling = {
    color: "green",
    fontSize: "30px"
}
export default Header;