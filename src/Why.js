import { Component } from "react";
import "./Why.css";

class Why extends Component {

    static defaultProps = { numOfImgs: 39 };

    getRandUrl = () => {
        const randNum = Math.floor(Math.random() * this.props.numOfImgs +1);
        return `imgs/why/why${randNum}.jpg`;
    };

    render() {
        return (
            <div className="Why">
                <div className="Why__img-box">
                <img 
                    className="Why__img" 
                    src={this.getRandUrl()}
                    alt="Funny and random">
                </img>
                </div>
                <div className="pos-fix-bottom">
                    <button className="Why__btn btn" onClick={this.props.history.goBack}>
                        Now go back! 
                        <i className="far fa-arrow-alt-circle-left"></i> 
                    </button>
                </div>
            </div>
        );
    };
};

export default Why;