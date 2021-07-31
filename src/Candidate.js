import { Component } from "react";
import Emojis from "./Emojis";
import victory from "./victory.wav";
import defeat from "./defeat.mp3";
import click from "./click.wav";
import "./Candidate.css";

class Candidate extends Component {

    static defaultProps = {
        sounds: { victory, defeat, click }
    };

    constructor(props) {
        super(props);
        this.state = { score: 0 };
        this.sounds = {
            victory: new Audio(props.sounds.victory),
            defeat: new Audio(props.sounds.defeat),
            click: new Audio(props.sounds.click)
        }
    };

    componentDidMount() {
        let score = parseInt(window.localStorage.getItem(`${this.props.name}`));
        if (!isNaN(score)) this.setState({ score });
    };
    
    handleClick = e => {
        const score = this.incrementOne(this.state.score, e.target.value);
        this.playSound(score, this.sounds);
        this.setState({ score }, () => {
            this.saveLocalStrg([this.props.name], score.toString())
        });
    };

    incrementOne(score, operation) {
        return operation === "+" ? ++score : --score;
    };

    playSound(score, sounds) {
        const { victory, defeat, click } = sounds;
        if (score === 20 && victory) victory.play();
        else if (score === -20 && defeat) defeat.play(); 
        else if (click) click.play();
    };

    saveLocalStrg(key, val) {
        window.localStorage.setItem(key, val.toString());
    };

    setOpacity(score) {
        if (score >= 0) return 1;
        if (score <= -20) return 0;
        return 1 - (0.05 * Math.abs(score));
    };

    getScoreColorClass(score) {
        if(!score) return "col-grey";
        return score > 0 ? "col-green" : "col-red";
    };

    render() {
        const { score } = this.state;
        const { name, url } = this.props;
        const showEmojis = score <= -5 || score >= 5;
        return (
            <article className="Candidate">
                <div className="Candidate__card">
                    <div className="Candidate__img-container">
                        <img className="Candidate__img" src={url} style={{ opacity: this.setOpacity(score) }} alt="Cnadidate" />
                        {showEmojis && 
                        <Emojis 
                            showGood={score > 0 ? true : false} 
                            num={Math.floor(Math.abs(score / 5))} 
                        />}
                    </div>
                    <div className="Candidate__content-container">
                        <div className="Candidate__content">
                            <p className="Candidate__title" style={{ opacity: this.setOpacity(score) }}> {name} </p>                
                            <p className={`Candidate__score-num ${this.getScoreColorClass(score)}`}> {score} </p>
                        </div>
                        <div className="Candidate__btns">
                            <button className="Candidate__btn" disabled={score <= -20} value="-" onClick={this.handleClick}>&#8722;</button>
                            <button className="Candidate__btn" disabled={score >= 20} value="+" onClick={this.handleClick}>&#43;</button>
                        </div>
                    </div>
                </div>
            </article>
        );
    };
};

export default Candidate;