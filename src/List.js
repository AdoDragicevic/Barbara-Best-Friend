import { Component } from "react";
import "./List.css";

class List extends Component {

    static defaultProps = { max: null };

    state = { items: [] };

    componentDidMount() {
        const items = JSON.parse(window.localStorage.getItem(`${this.props.id}`)); 
        if (items) this.setState({ items });
        else if (this.props.items) {
            const { items, max } = this.props;
            const itm = [];
            for(let i = 0; i < max; i++) itm[i] = items[i] || "";
            this.setState({ items: itm });
        }
    };

    handleChange = e => {
        const items = [ ...this.state.items ];
        const indx = e.target.dataset.indx;
        items[indx] = e.target.value;
        this.setState({ items }, () => {
            window.localStorage.setItem(this.props.id, JSON.stringify(items));
        });
    };

    render() {
        const { items } = this.state;
        const { id, title, titleColor } = this.props;
        const listItems = items.map( (item, i) => (
            <li key={`${id}-${i}`}>
                <input 
                    type="text" 
                    data-indx={i} 
                    value={item}
                    onChange={this.handleChange}
                >
                </input>
            </li> 
        )); 
        return (
            <div className="List">
                <h3 className="List__title" style={{ color: titleColor }}>{title}</h3>
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    };
};

export default List;