import { Component } from "react";
import "./Why.css";

class Why extends Component {

    static defaultProps = {
        imgs: ["why1.jpg", "why2.jpg", "why3.jpg", "why4.jpg", "why5.jpg", "why6.jpg", "why8.jpg", "why10.jpg", "why11.jpg", "why12.jpg", "why13.jpg", "why14.jpg"]
    };

    render() {
        const { imgs } = this.props;
        const img = imgs[Math.floor(Math.random() * imgs.length)];
        return (
            <div className="Why">
                <div className="Why__img-box">
                    <img className="Why__img" src={`imgs/${img}`} alt="Funny and random"></img>
                </div>
                <div className="Why__btns">
                    <button className="Why__btn" onClick={this.props.history.goBack}>
                        Now go back! 
                        <i className="far fa-arrow-alt-circle-left"></i> 
                    </button>
                </div>
            </div>
        );
    };
};

export default Why;