import styles from './style.module.css'
import background from './pics/banner1.jpg'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Modal from './Modal'
export default function Home() {

    const [array, set_array] = useState([]); //state thay đổi nhưng detail ở dưới ko đổi vì là props, cần edit lại Detail để chạy với state
    useEffect(() => {
        console.log('useEffect running in homepage, promise not working on firebase hosting?')
        fetch('https:firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74')
            .then(res => res.json())
            //.then(res => res.json())
            .then(data => {
                console.log(data)
                console.log('fetch promise working')
                //const data_parse = JSON.parse(data)
                //console.log(data_parse)
                const fetch_array = []
                data.map(el => fetch_array.push({ id: el._id.$oid, img: el.img1, name: el.name, price: parseInt(el.price).toLocaleString() }))
                set_array(fetch_array)
            })
    }, [])
    const banner = `url(${background})`
    return <>
        <h1>This is home page</h1>

        <div style={{ backgroundImage: banner, width: '100%', height: '30em', margin: '0 auto 0 auto' }}>
            <p>NEW INSPIRATION 2020</p>
            <h2>NEW INSPIRATION 2020</h2>
            <button>Browse collections</button>
        </div>
        <div>

            <img src="./assets/category/product_1.png" alt="" />
            <img src="./assets/category/product_2.png" alt="" />
            <img src="./assets/category/product_3.png" alt="" />
            <img src="./assets/category/product_4.png" alt="" />
            <img src="./assets/category/product_5.png" alt="" />
        </div>
        <h1>Trending Product</h1>
        <div>
            {/* {array.map(el => Detail(el))} */}
            <SET_ARRAY array={array} />

        </div>
    </>
}
function SET_ARRAY({ array }) {
    console.log('array as props below')
    console.log(array)
    if (array[0] === null || array[0] === undefined) return
    if (array[0] !== null && array[0] !== undefined) return <>
        {array.map(el => Detail(el))}
    </>
}

function Detail(props) {

    const product_id = props.id //lấy id để thu thập sản phẩm pass xuống modal
    const product = useSelector(state => state[product_id])
    console.log(product)
    const [show, set_show] = useState(false)
    function open() {
        if (document.querySelector('#close_modal') !== null) document.querySelector('#close_modal').click()
        set_show(true) //nếu có modal, click nút đóng, ko có thì set_show mở để open modal
    }
    return <div className={props.id}>
        <h3 onClick={open}>{props.name}</h3>
        <img src={props.img} alt="home page" style={{ width: '20em' }} onClick={open} />
        <p onClick={open}>{props.price}đ</p>
        <Modal show={show} set_show={set_show} data={product} />
    </div>
}
