import React, {useEffect, useRef, useState } from 'react'
import './AboutSwipper.scss'
import { API_URL } from '../../components/Lib/Api';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
function AboutSwipper() {
    const dispatch = useDispatch()
    const [data, setdata] = useState([])
    const [btnAct, setBtnAct] = useState(1)
    const spinnerRef = useRef()
    const [heart, setHeart] = useState(true)
    const [count, setCount] = useState(1)
    const { slug } = useParams()
    useEffect(() => {
        fetch(`${API_URL}`)
            .then((res) => res.json())
            .then((data) => setdata(data))
            .finally(() => { spinnerRef.current.style.display = 'none' })
    }, [])


    const imgBanner = data.find((item) => item.id === slug)
    const minus = () => { if (count <= 0) { setCount(0) } else { setCount(count - 1) } }
    const plus = () => { setCount(count + 1) }
    const fill = (e) => {
        console.log(e.target.id);
        if (!e.target.id == imgBanner.id) {
            localStorage.setItem('fill', !true)
            setHeart(true)
            console.log(window.localStorage.getItem('fill'));
        } else {
            setHeart(!heart)
            window.localStorage.setItem('fill', JSON.stringify(heart))
            console.log(window.localStorage.getItem('fill'));
        }
    }
    const addCart= ()=>{
      const dis =  dispatch({type:'img',payload:{
            img: imgBanner.img,
            name:imgBanner.name,
            price:imgBanner.price}})
            JSON.stringify(window.localStorage.setItem('datas', dis))

    }
    return (
        <>
            <div ref={spinnerRef} className='spinner'>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            <div className='about'>

                <div className="about__inner container">
                    <ul className='about__list'>
                        {
                            data && data
                                .slice(0, 4)
                                .filter((item) => item)
                                .map((item, ind) => (
                                    <li className='about__item' key={ind}>
                                        <Link to={`/about/${item.id}`}><img src={item.img} alt="" /></Link>
                                    </li>
                                ))
                        }
                    </ul>

                    {
                        data && data.map((item, index) => (
                            <div className='img_banner' key={index}>
                                {item.id == imgBanner.id ?
                                    <>
                                        <img src={imgBanner.img} alt="" />
                                        <div className="banner__info">
                                            <h2>{item.name}</h2>
                                            <b >$ {item.price.split('$').join('').split(',').join('.') * count},00</b>
                                            <ul className='banner__star'>
                                                <li >
                                                    <i className="bi bi-star-fill"></i>
                                                </li>
                                                <li>
                                                    <i className="bi bi-star-fill"></i>
                                                </li>
                                                <li>
                                                    <i className="bi bi-star-fill"></i>
                                                </li>
                                                <li>
                                                    <i className="bi bi-star-fill"></i>
                                                </li>
                                                <li>
                                                    <i className="bi bi-star-fill"></i>
                                                </li>
                                                <span>1 customer review</span>
                                            </ul>
                                            <p>{item.description}</p>
                                            <span className='btn1'>
                                                <div>
                                                <button onClick={minus} className='banner__btn'>-</button>
                                                <button className='banner__btn'>{count}</button>
                                                <button onClick={plus} className='banner__btn'>+</button>
                                                </div>
                                            <button onClick={addCart}
                                            className='banner__cart'>ADD TO CART</button>
                                            </span>
                                            <ul className='banner__socialMedia'>
                                                <li className='socialMedia_item'>
                                                    <i id={item.id} onClick={fill} className={JSON.parse(window.localStorage.getItem('fill')) ? "bi bi-heart-fill" : "bi bi-heart"}></i>
                                                </li>
                                                <li className='socialMedia_item'></li>
                                                <li className='socialMedia_item'>
                                                    <Link className='text-secondary'>
                                                        <i className="bi bi-envelope"></i>
                                                    </Link>
                                                </li>
                                                <li className='socialMedia_item'>
                                                    <Link className='text-secondary'>
                                                        <i className="bi bi-facebook"></i>
                                                    </Link>
                                                </li>
                                                <li className='socialMedia_item'>
                                                    <Link className='text-secondary'>
                                                        <i className="bi bi-instagram"></i>
                                                    </Link>
                                                </li>
                                                <li className='socialMedia_item'>
                                                    <Link className='text-secondary'>
                                                        <i className="bi bi-twitter"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                            <h6 className='mt-5'>SKU: <span className='text-secondary m-2'>12</span></h6>
                                            <h6>Categories:<span className='text-secondary m-2'>{item.types}</span></h6>
                                        </div>
                                    </> : null
                                }

                            </div>
                        ))
                    }

                </div>
                <ul className='container about__btn__list'>
                    <button onClick={() => { setBtnAct(1) }} className={btnAct == 1 ? 'about__btnLink btnLinkActive' : 'about__btnLink'}>Description</button>
                    <button onClick={() => { setBtnAct(2) }} className={btnAct == 2 ? 'about__btnLink btnLinkActive' : 'about__btnLink'}>Aditional information</button>
                    <button onClick={() => { setBtnAct(3) }} className={btnAct == 3 ? 'about__btnLink btnLinkActive' : 'about__btnLink'}>Reviews(0)</button>
                </ul>

                {data && data.map((item, ind) => (

                    <p key={ind} className='container p-0 mt-5' >
                        {item.id == slug && btnAct == 1 ? item.description : null}
                        {item.id == slug &&btnAct==2 ? 
                        <div className="additioanal">
                            <span>Weight:  <span   className='text-secondary'> 0.3 kg</span></span><br />
                           <span> Dimentions:<span className='text-secondary'>15 x 10 x 1 cm</span></span> <br />
                            <span>Colours:   <span className='text-secondary'>Black, Browns, White</span></span><br />
                            <span>Material:  <span className='text-secondary'>Metal</span></span>
                        </div>:null}
                    </p>
                ))}

                <h3 className='container p-0 mt-5 pb-5'>Similar Items</h3>
                <ul className='d-flex container p-0 justify-content-between'>
                    {
                        data && data.slice(7, 10).map((item, ind) => (
                            <li key={ind} className='about__similar'>
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
        </>

    )
}

export default AboutSwipper