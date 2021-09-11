import React from "react";

export default function CatOwner(props){
    return(
        <>
            <h3 style={{marginLeft: "25px"}}><span class="badge bg-dark">Kocheng.com</span></h3>
            <h4 style={{marginLeft: "25px"}}>Informasi Pemilik</h4>
            <ul className="list-group" style={{width: "20rem", margin: "0 0 25px 25px"}}>
                <li className="list-group-item">
                    <h6>Nama Pemilik: {props.nama}</h6>
                </li>
                <li className="list-group-item">
                    <h6>Asal: {props.asal}</h6>
                </li>
            </ul>
            {props.data.map((value) => (
                <>
                    <div className="card shadow" style={{width: "20rem", margin: "auto", float: "left", marginLeft: "25px"}}>
                        <img src={value.gambar} className="card-img-top" alt={value.jenis} />
                        <div className="card-body">
                            <h5 className="card-title">{value.nama}</h5>
                            <p>{value.jenis}</p>
                        </div>
                    </div>
                </>
            ))}  
        </>
    );
}