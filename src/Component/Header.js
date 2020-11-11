import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => {
    return(
        <header className="content_header">
            <h4 className="text_header">{props.titulo}</h4>
        </header>
    )
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header;