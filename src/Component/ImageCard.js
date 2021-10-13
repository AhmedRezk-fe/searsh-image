import React from "react";

class ImageCard extends React.Component {
    constructor (props){
        super(props);
        this.state= {spans : 0}
        this.rizk = React.createRef();
        
    }
    componentDidMount(){
        this.rizk.current.addEventListener("load" , this.setSpans)
    }
    setSpans = () => {
       const height = this.rizk.current.clientHeight;
       const spans = Math.ceil(height / 10);
       this.setState({spans})
       console.log(height)
    }
    render(){
        const {description , urls} = this.props.image;
        return(
            <div  style={{gridRowEnd : `span ${this.state.spans}` }}>
                <img  
                    ref={this.rizk}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        )
    }
}
export default ImageCard;