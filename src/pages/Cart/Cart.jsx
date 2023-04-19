import React, { useState } from 'react'
import './Cart.scss'
import { useSelector } from 'react-redux'

function Cart() {

    const selector = useSelector((state)=>state)
    const [count, setCount] = useState(1)
    const minus = () => { if (count <= 0) { setCount(0) } else { setCount(count - 1) } }
    const plus = () => { setCount(count + 1) }
    // console.log(selector.shop.cartItems);
  return (
    <div className='shopping__cart'>
            <h2 className='shopping__title'>Shopping Cart</h2>
        <div className="shopping__inner container">
            <ul className="shopping__products">
              {
                selector.shop.length > 0 ? selector.shop.map((item, index)=>(
                    <li key={index} className='shopping__item'>
                    <img src={item.img} alt="" />
                    <div className="shopping__item--title">
                        <div className="shopping__name">{item.name}</div>
                        <div className="shopping__price">$ {item.price.split('$').join('').split(',').join('.') * count},00</div>
                    </div>
                    <span className='counter__shop'>
                            <button onClick={minus} className='banner__btn'>-</button>
                            <button className='banner__btn'>{count}</button>
                            <button onClick={plus}  className='banner__btn'>+</button>
                     </span>

                </li>
                )):null 
              }

            </ul>
        </div>
    </div>
  )
}

export default Cart