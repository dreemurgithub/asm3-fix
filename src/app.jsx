import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Shop from './ShopPage';
import Navbar from './Navbar';
import Footer from './Navbar/Footer';
import Login from './Log/Login'
import Register from './Log/register'
import Checkout from './Checkout';
import Detail from './Details';
export default function App() {
    // while (localStorage.route===undefined&&localStorage.homepage===undefined) {
    //     setTimeout(()=>window.location.reload(),500)
    //     console.log('reloading')

    // }
    //while dùng để đợi lệnh fetch trong store.jsx ghi localstorage cho url và homepage, nếu localstorage null sẽ ko hiển thị được
    const [url_list, set_url] = useState([])

    useEffect(() => {
        console.log('useEffect running in app.jsx')

        fetch('https:firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74')
            .then(res => res.json())
            .then(data => {
                const url = []
                data.map(el => url.push(`/details/${el._id.$oid}`))
                console.log('url is below')
                console.log(url)
                set_url(url)
            })
    }, [])
    //const url_list =JSON.parse(localStorage.route)


    return (<>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path={url_list[0]} element={<Detail />} />
                <Route path={url_list[1]} element={<Detail />} />
                <Route path={url_list[2]} element={<Detail />} />
                <Route path={url_list[3]} element={<Detail />} />
                <Route path={url_list[4]} element={<Detail />} />
                <Route path={url_list[5]} element={<Detail />} />
                <Route path={url_list[6]} element={<Detail />} />
                <Route path={url_list[7]} element={<Detail />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    </>
    )
}
