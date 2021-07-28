import { Component } from "react";
import "./Emojis.css";

class Emojis extends Component {

    static defaultProps = {
        good: ["😀", "😇", "❤️", "👑"],
        bad: ["😔", "🥵", "💔", "💩"]
    };

    renderEmojis({ num, showGood, good, bad }) {
        const emojis = [];
        const target = showGood ? good : bad;
        for(let i = 0; i < num; i++) {
            emojis.push( 
                <span key={i} className={`Emojis__emoji Emojis__emoji--${i+1}`}> 
                    {target[i]} 
                </span> 
            );
        }
        return emojis;
    };

    render() {
        return (
            <div className="Emojis">
                <div className="Emojis__container">
                    {this.renderEmojis(this.props)} 
                </div>         
            </div>
        );
    };
};

export default Emojis;