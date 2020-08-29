import React, { Component } from 'react'

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    renderNavbar = () => {

        let { data, selected, handleClick } = this.props;
        let _d = Object.keys(data).map(v => {
         
            if(v === selected) {
                return (
                    <li onClick={e => handleClick(e)} key={v} id={v}>
                        <a className="bttn active" id={v}>{v}</a>
                    </li>
                );
            }else{
                return (
                    <li onClick={e => handleClick(e)} key={v} id={v}>
                        <a className="bttn" id={v}>{v}</a>
                    </li>
                );
            }
            
          
        });

        return (<ul>{_d}</ul>);
    }
    render() {
        return <nav className="main-nav">{this.renderNavbar()}</nav>
    }
}

export default Navbar