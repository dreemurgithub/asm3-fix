import React from 'react';
import Modal from './request/request'
import { useSelector, useStore } from 'react-redux'
import { useState } from 'react';
function Shop() {
    const store_state = useSelector(state => state)
    const array = Object.keys(useSelector(state => state)).map(el => store_state[el])
    return (
        <>
            <h1>Shop page</h1>
            {array.map(el=>Detail(el))}
        </>
    )
}
function Detail(props) {
    return <>
        <div key={props._id.$oid} className={props._id.$oid} >
            <img src={props.pics_asset[0]} alt={props.short_desc} style={{ width: '10em' }} />
            <h3>{props.name}</h3>
            <p>{parseInt(props.price).toLocaleString()}đ</p>
            <div>
                {/* <Modal show={show} set_show={set_show} data={props}/> */}
            </div>
        </div>
    </>
}



export default Shop