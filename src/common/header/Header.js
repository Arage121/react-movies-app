import React, {Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';

class Header extends Component{
    render(){
        return(
            <div className="header">
            <Button id="btn" variant="contained">Login</Button>
            </div>
        );
    }
}

export default Header;