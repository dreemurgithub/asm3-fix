import React from 'react';
import { useSelector } from 'react-redux';

export default function Detail() {//working, but weirdly, just use this for portal
  let id = window.location.pathname.replace('/details/', '')
  const data = useSelector(state => state[id])
  console.log(data)

  return <>
    <div style={{ textAlign: 'justify', width: '100%', margin: '0 auto 0 auto' }}>
      <div style={{ height: '35em', width: '90%', display: 'grid', gridTemplateColumns: '20em 30em auto', gap: '2em' }}>
        <div style={{ height: '30em', width: '12em' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>  {data.pics_asset.map(el => show_pic(el))}  </div>
        </div>
        <img style={{ height: '30em' }} id='display_click'
          src={data.pics_asset[0]} alt='display product' />
        <div >
          <h3>{data.name}</h3>
          <p>{data.short_desc}</p>
          <p><b>Category: </b>{data.category}</p>
          <p style={{ width: '30em' }}>{parseInt(data.price).toLocaleString()}đ</p>
        </div>
      </div>
      <button>Description</button>
      <pre style={{ font: 'inherit' }}>{data.long_desc}</pre>

    </div>
  </>
}
function show_pic(pic) {
  function show(e) { document.querySelector('#display_click').src = e.target.src }
  return <>
    <img src={pic} alt='product details first' className='scroll_pics' style={{ width: '10em' }} onClick={show} />

  </>
}
