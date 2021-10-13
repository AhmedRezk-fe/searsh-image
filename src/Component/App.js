import React from "react";
import SearchBar from "./SearchBar";
import Unsplash from "../api/unsplash"

class App extends React.Component {
    state={image : []}

    onsubmit = async term => {
        const response = await Unsplash.get("/search/photos",{
            params : {query : term}
        });

        this.setState({image :response.data.results })
       
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar image={this.state.image} onsubmit={this.onsubmit} />
            </div>
        )
    }
}

export default App;