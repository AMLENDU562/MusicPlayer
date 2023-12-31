import React from "react"


function MusicCard(props)
{
    return (
        <div className="bg-red-500 rounded-lg px-4 pb-5 m-11">
        <h1 class="text-2xl text-orange-300 font-sans">{props.title}</h1>
        <img className="w-52 m-auto p-5" src={props.img}/>
        <audio  controls className="h-10">
        <source   src={props.audio} type="audio/ogg"/>
        </audio>
        </div>
    );
}

export default MusicCard;