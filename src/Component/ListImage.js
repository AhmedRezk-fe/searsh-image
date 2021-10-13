import React from "react";
import ImageCard from "./ImageCard";
import "./imageList.css"


const ListImage = (props) =>{
    const img =  props.prop.map((image , i) => {
        return <ImageCard  image={image} key={i} />

    })
    return(
        <div className="image-list">
            {img}
        </div>
    )
}

export default ListImage; 