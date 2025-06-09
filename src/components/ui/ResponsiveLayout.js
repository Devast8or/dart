import React from 'react';
import './ui.module.scss';

const ResponsiveLayout = ({ children }) => {
    return (
        <div className="responsive-layout">
            {children}
        </div>
    );
};

export default ResponsiveLayout;