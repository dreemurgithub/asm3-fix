import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
export default function Navbar() {
    const [url_list, set_url] = useState([])
    useEffect(() => {
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
    // const url_list =JSON.parse(localStorage.route)
    // console.log(url_list)
    // console.log('navbar')
    //navbar seem not working
    return <>
        <nav>
            <ul>
                <NavLink to='/'>
                    <li>Home</li>
                </NavLink>
                <NavLink to='/shop'>
                    <li>Shop</li>
                </NavLink>
                <NavLink to='/checkout'>
                    <li>Checkout</li>
                </NavLink>
                <NavLink to='/login'>
                    <li>Login</li>
                </NavLink>
                <NavLink to='/register'>
                    <li>Register</li>
                </NavLink>
                <NavLink to={url_list[0]}>
                    <li>Detail 0</li>
                </NavLink>
                <NavLink to={url_list[1]}>
                    <li>Detail 1</li>
                </NavLink>
                <NavLink to={url_list[2]}>
                    <li>Detail 2</li>
                </NavLink>
                <NavLink to={url_list[3]}>
                    <li>Detail 3</li>
                </NavLink>
                <NavLink to={url_list[4]}>
                    <li>Detail 4</li>
                </NavLink>
                <NavLink to={url_list[5]}>
                    <li>Detail 5</li>
                </NavLink>
                <NavLink to={url_list[6]}>
                    <li>Detail 6</li>
                </NavLink>
                <NavLink to={url_list[7]}>
                    <li>Detail 7</li>
                </NavLink>






            </ul>
        </nav>
    </>
}