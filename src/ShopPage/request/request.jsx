import ReactDOM from 'react-dom';
import React from 'react';
import { useSelector } from 'react-redux';

function Modal({ show,set_show, data}) {
    // const store_state = useSelector(state=>state)
    // const related = []
    //  for (const props_name in store_state){
    //     console.log(`category is: ${store_state[props_name].category}`)
    //      if (store_state[props_name].category===data.category) related.push(store_state[props_name])
    //  }
    //  console.log(related)

    if (show === false) return
    if (show === true) return ReactDOM.createPortal(
        <div style={{ textAlign: 'justify',width: '100%'}}>
            <button onClick={()=>set_show(false)} id='close_modal' style={{ color: 'white', backgroundColor: 'black',float:'right' }}><b>X</b></button>
            <div style={{ height: '35em', width: '90%', display: 'grid', gridTemplateColumns: '12em 30em 1fr', gap:'2em',margin:'0 auto 0 auto' }}>
                <div style={{ height: '30em', width: '12em' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>  {data.pics_asset.map(el => show_pic(el))}  </div>
                </div>
                <img style={{ height: '30em' }} id='display_click'
                    src={data.pics_asset[0]} alt='display product' />
                <div style={{ width: '100%' }}>
                    <h3>{data.name}</h3>
                    <p>{data.short_desc}</p>
                    <p><b>Category: </b>{data.category}</p>
                    <p>{parseInt(data.price).toLocaleString()}đ</p>
                </div>
            </div>
            <button>Description</button>
            <pre style={{ font: 'inherit' }}>{data.long_desc}</pre>
            
        </div>
        , document.querySelector('#modal'))
}

function show_pic(pic) {
    function show(e){  document.querySelector('#display_click').src = e.target.src  }
    return <>
        <img src={pic} alt='product details first' className='scroll_pics' style={{ width: '10em' }} onClick={show}/>

    </>
}

export default Modal