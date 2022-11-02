import ReactDOM from 'react-dom';
import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Modal({ show, set_show, data }) {
    //const url = `/details/${data._id.$oid}`
    //const url = data._id.$oid
    //console.log(url) //url phải là const mới chạy được? URL để click trực tiếp qua Navlink
    if (show === false) return //button id=close_modal để click và khi open sp mới, bị click()
    const url =(data===undefined)? null: `/details/${data._id.$oid}`
    console.log(url)
    if (show === true) return ReactDOM.createPortal(
        <div style={{ textAlign: 'justify', width: '70%', margin: '0 auto 0 auto' }}>
            <button onClick={() => set_show(false)} id='close_modal' style={{ color: 'white', backgroundColor: 'black', float: 'right' }}><b>X</b></button>
            <div style={{ width: '90%', display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '2em' }}>
                <img style={{ height: '30em' }}  src={data.pics_asset[0]} alt='display product' />
                <div>
                    <div style={{ width: '100%' }}>
                        <h3>{data.name}</h3>
                        <p>{parseInt(data.price).toLocaleString()} VNĐ</p>
                        <p>{data.long_desc}</p>
                        <NavLink to={url}><button>To Details</button></NavLink>
                    </div>
                </div>
            </div>

        </div>
        , document.querySelector('#modal'))
}


