import { Component } from "react";
import Emojis from "./Emojis";
import victory from "./victory.wav";
import defeat from "./defeat.mp3";
import "./Candidate.css";

class Candidate extends Component {

    static defaultProps = { 
        victorySound: victory, 
        defeatSound: defeat 
    };

    constructor(props) {
        super(props);
        this.state = { score: 0 };
        if (props.victorySound && props.defeatSound) {
            this.victorySound = new Audio(props.victorySound);
            this.defeatSound = new Audio(props.defeatSound);
        }
    };

    componentDidMount() {
        let score = parseInt(window.localStorage.getItem(`${this.props.name}`));
        if (!isNaN(score)) this.setState({ score });
    };

    incrementOne = e => {
        let { score } = this.state;
        e.target.value === "+" ? score++ : score--;
        if (score === 20 && this.victorySound) this.victorySound.play();
        if (score === -20 && this.defeatSound) this.defeatSound.play(); 
        this.setState({ score }, () => this.saveLocalStrg([this.props.name], score.toString()));
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
                            <button className="Candidate__btn" disabled={score <= -20} value="-" onClick={this.incrementOne}>&#8722;</button>
                            <button className="Candidate__btn" disabled={score >= 20} value="+" onClick={this.incrementOne}>&#43;</button>
                        </div>
                    </div>
                </div>
            </article>
        );
    };
};

export default Candidate;