import React from 'react';
import './Header.scss'
import propTypes from 'prop-types';
import { ReactComponent as PrintIcon } from '../icons/print.svg'

const Header = ({ onClick }) => {
    return (
        <header className='Header'>
            <div className='ui-container'>
                <div className="Header_content">
                    <span className='Header_logo'>CV builder</span>
                    <button className='ui-button isLink' onClick={onClick}>
                        <PrintIcon style={{ marginRight: '0.6rem'}} />
                        Print
                    </button>
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    onClick: propTypes.func,
}

Header.defaultProps = {
    onClick: () => {},
}

export default Header;