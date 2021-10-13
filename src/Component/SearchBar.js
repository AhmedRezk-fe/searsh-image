import React from "react";
import ListImage from "./ListImage"
 
class SearchBar extends React.Component {

    state = {term : ""}

    onsubmitForm = (e) => {
        e.preventDefault();
        this.props.onsubmit(this.state.term);
    }
    render() {
        return (
            <div className="ui">
                <form className="ui form" onSubmit={this.onsubmitForm}>
                    <div className="field">
                        <input onChange={e => this.setState({term : e.target.value})} type="text"  />
                        <ListImage prop={this.props.image}  />
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar;