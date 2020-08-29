import React, { PureComponent } from 'react'
import { Popup } from './Modal';

class Content extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            show: false,
            selectedItem: ''
        }
    }

    handleClose = () => {
        this.setState({
            show: false
        });
    }    

    handleItemClick = (e) => {
        let item = e.target.id;

        this.setState({
            show: true,
            selectedItem: item
        });
    }

    renderCards = () => {

        let {data, selectedSlot } = this.props;


        return data.map(v => {
            let popClasses = ["popular"];
            let trialClasses = ["trail"];

            if(v["Plan name"] === selectedSlot) {
                popClasses.push("active");
                trialClasses.push("active");
            }

            popClasses = popClasses.join(" ");
            trialClasses = trialClasses.join(" ");

            return (
                <div className="box">
                <div className={popClasses}>Most Popular!</div>
                <div className="qualified">{v["Plan name"]}</div>
                <div className="content">
                  <div className="section1">
                    <h1>{v["Price per live transfer"]}</h1>
                    <div>Per Qualified lead</div>
                  </div>
                  <div className="section2">
                    <div>Qualified Leads Per Month</div>
                    <div>{v["Qualified Leads Per Month"]}</div>
                  </div>
                  <div className="section3">
                    <div>Platform fee per month</div>
                    <div>{v["Total platform price"]}</div>
                  </div>
                </div>
                <div className="price">{v["Final package price"]}</div>
                <div className="blank"></div>
                <div id={v["Plan name"]} className={trialClasses} onClick={e => this.handleItemClick(e)}>Start Your Trial</div>
              </div>      
            )
        });
    }

    render() {
        return (<section className="boxes">
            {this.renderCards()}
            { this.state.show && <Popup show={this.state.show} handleClose={this.handleClose} plan={this.state.selectedItem} />}
        </section>);
    }
}

export default Content