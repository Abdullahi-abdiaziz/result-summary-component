import React from "react";

export default function Items(props) {
    return (
        <div className="group hover:cursor-pointer mt-4">
            <div className={`${props.item.bgcolor} flex p-3 rounded-lg`}>
                <img className="group-hover:animate-wiggle" src={props.item.icon} alt="" />
                <h4 className={`${props.item.color} ml-2 font-semibold`}> {props.item.category} </h4>
                <p className="ml-auto font-bold">{props.item.score} <span className="text-gray-400"> / 100</span></p>
            </div>
        </div>
    )
}