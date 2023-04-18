import React, { useEffect, useState } from 'react'
import './Shop.scss'
import { Link} from 'react-router-dom'
import { API_URL } from '../../components/Lib/Api'
function Shop() {
  const [data, setdata] = useState([])
  const [filter, setfilter] = useState([])

  useEffect(() => {
    fetch(`${API_URL}`)
        .then((res) => res.json())
        .then((data) => setdata(data))   
}, [])
const renge = (e)=>{
  console.log(e.target.value);
  setfilter(e.target.value)
}
  return (
    <div className='shop'>
      <h2 className="shop__title container">Shop The Latest</h2>
      <div className="shop__inner container">
        <div className="shop__aside">
         <div className='search-block'>
         <i className="bi bi-search"></i>
          <input
           type="text"
            className='shop__search'
            placeholder='Search...' />
         </div>
          <select id="shopBy">
            <option value="">Shop By</option>
          </select>

          <select id="sortBy">
            <option value="">Sort By</option>
          </select>

          <input onChange={renge} type="range" className='shop__range' />
            <p htmlFor="">Price: $ {filter}   <span>Filter</span></p>

         <label className='swich1' htmlFor="switch">On sale
         <input type="checkbox" id="switch" /><label className='label' htmlFor="switch"></label>
         </label>
         <label className='swich1' htmlFor="switch2">In stock
         <input type="checkbox" id="switch2" /><label className='label' htmlFor="switch2"></label>
         </label>
        </div>

        <div className="shop__main">
          <ul className='shop__list'>
            {
              data && data.map((item,index)=>(
                <li key={index} className='shop__item'>
                    <Link to={`/about/${item.id}`}>
                    <img src={item.img} alt="" />
                    <h4>{item.name}</h4>
                    <span>{item.price}</span>
                    </Link>
                </li>
              ))
            }
          </ul>
        </div>

      </div>
    </div> 
  )
}

export default Shop