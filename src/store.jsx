import { createStore } from "redux";
const store = createStore(reducer);
function reducer(state = fetching(), action) {
    return state
}

function fetching() {
    console.log('fetching from link')
    const new_state = {}//return state cho store của redux
    const url_list =[] //return list url cho route
    fetch('https:firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74')
        .then(res => res.json()).then(data => {
            //console.log(data)
            console.log('above is data from fetch')
            data.forEach(element => {
                new_state[`${element._id.$oid}`] = element
                new_state[`${element._id.$oid}`]['pics_asset'] = [element.img1, element.img2, element.img3, element.img4]
                new_state[`${element._id.$oid}`]['amount'] = 0
                url_list.push(`/details/${element._id.$oid}`)
                localStorage.setItem('route',JSON.stringify(url_list)) //overwrite localstorage để tạo URL và route
                // const array = [] //return hình ảnh img1 xuống localstorage rồi chuyển qua home page
                // data.map(el=>{
                //     array.push({img:el.img1,name:el.name,price:parseInt(el.price).toLocaleString(),id:el._id.$oid })
                // })
                // localStorage.setItem('homepage',JSON.stringify(array))
            });
        })
    return new_state
}
export default store;
