import React from 'react'
import { Link } from 'react-router-dom';
import '../HotAccessoriesMenu.css' 

const HotAccessoriesMenu = ({}) => {
    return (
        <div className="HotAccessoriesMenu"> 
        <Link className="HotAccessoriesLink" to='/music'>Music Store</Link>
        <Link className="HotAccessoriesLink" to='/SmartDevices'>Smart Devices</Link>
        <Link className="HotAccessoriesLink" to='/home'>Home</Link>
        <Link className="HotAccessoriesLink" to='/Lifestyle'>Lifestyle</Link>
        <Link className="HotAccessoriesLink" to='/MobileAccessories'>Mobile Accessories</Link>
    </div>
    )
        
}

export default HotAccessoriesMenu;