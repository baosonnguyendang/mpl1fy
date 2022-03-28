import React from 'react';
import PropTypes from 'prop-types';

const Header = (props: any) => {
    return (
        <div className="header">
            <div className="header-left">

            </div>
            <div className="header-right">
                <span>Home</span>
                <span>About Us</span>
                <span>Our Products</span>
                <span>Contact Us</span>
            </div>
        </div>
    );
};

// Header.propTypes = {
    
// };

export default Header;