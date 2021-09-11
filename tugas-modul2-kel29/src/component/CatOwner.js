import React from "react";

export default function CatOwner(props){
    return(
        <>
            <h3>Nama: {props.nama}</h3>
            <h4>Asal: {props.asal}</h4>
            {props.data.map((value) => (
                <>
                    <h4>Nama: {value.nama}</h4>
                    <h4>Jenis: {value.jenis}</h4>
                    <img src={value.gambar} />
                </>
            ))}
        </>
    );
}