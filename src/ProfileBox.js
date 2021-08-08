import { Component } from "react";
import List from "./List";
import "./ProfileBox.css";

class ProfileBox extends Component {
    
    state = { indx: 0 };

    changeProfile = e => {
        let { indx } = this.state;
        const length = this.props.candidates.length;
        const operation = e.target.name;
        indx += operation === "+" ? 1 : -1;
        if (indx < 0) indx = length-1;
        else if (indx >= length) indx = 0;
        this.setState({ indx });
    };

    render() {
        const candidate = this.props.candidates[this.state.indx];
        return (
            <div className="ProfileBox">
                <div className="ProfileBox__header">
                    <div className="ProfileBox__img-container">
                        <img 
                            className="ProfileBox__img" 
                            src={candidate.url.sm} 
                            alt="Candidate"
                        >
                        </img>
                    </div>
                    <h1 className="ProfileBox__title"> {candidate.name} </h1>
                    <p className="ProfileBox__description">Keep track of good and bad traits</p>
                    <div className="ProfileBox__btns">
                        <button className="ProfileBox__btn btn" name="-" onClick={this.changeProfile}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <button className="ProfileBox__btn btn" name="+" onClick={this.changeProfile}>
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
                <div className="ProfileBox__body">
                    <List
                        items={candidate.traits.good} 
                        max={5}
                        title="Good"
                        titleColor="yellowgreen" 
                        id={`${candidate.name}-good`} 
                        key={`${candidate.name}-good`} 
                    />
                    <List 
                        items={candidate.traits.bad} 
                        max={5} 
                        title="Bad"
                        titleColor="#EF476F" 
                        id={`${candidate.name}-bad`} 
                        key={`${candidate.name}-bad`} 
                    />
                </div>
            </div>
        );
    };
};

export default ProfileBox;