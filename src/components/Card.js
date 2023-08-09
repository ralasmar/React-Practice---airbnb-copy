import React from "react"

//can use JS conditional logic and reference in function using curly braces
export default function Card(props){
    let badgeText 
    if (props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online"){
        badgeText = "ONLINE"
    } 

    return (
       <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`${props.item.coverImg}`} className="card--image"/>
            <div className="card--stats">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/1235px-Red_star.svg.png" className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className = "card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price} / person </span></p>
       </div> 
    )
}