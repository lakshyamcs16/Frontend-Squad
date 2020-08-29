import React, { PureComponent } from 'react'
import data from '../data.json';
import Navbar from './Navbar';
import Content from './Content';

class Container extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            data: data,
            selected: "$300K-$400K",
            planName: "Qualified 40"
        }
    }

    handleNavbarClick = (e) => {
        e.preventDefault();
        let id = e.target.id;

        this.setState({
            selected: id
        })
    }

    render() {
        console.log(this.state);
        return (
            <div className="wrapper">
                <Navbar data={this.state.data} selected={this.state.selected} handleClick={this.handleNavbarClick}/>
                <Content data={this.state.data[this.state.selected]} selectedSlot={this.state.planName}/>
            </div>
        )
    }
}

export default Container