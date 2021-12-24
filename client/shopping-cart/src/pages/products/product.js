import React, { Component } from 'react'
import Header from '../../components/header/header'
import './styles.css'
import categories from '../../server/categories/index.get.json'
import productImage from '../../assests/static/images/products/fruit-n-veg/apple.jpg'
import products from '../../server/products/index.get.json'
import { connect } from 'react-redux'
import { addToCart } from '../../redux/action/cartAction'
import { MdKeyboardArrowDown } from "react-icons/md";
import { useLocation, useParams } from 'react-router-dom'
const Products = (props) => {
    const params = useLocation();
    const [productsArray, setProducts] = React.useState([])
    const [toggleDropDown, setToggle] = React.useState(false)
    React.useEffect(() => {
        if(params.state.fetch=='all'){
            fetchAllProducts()
        } else {

            fetchProductsById(params.state.category);
        }
    }, [])
    const addToCart = (data) => {
        props.add(data)
    }
    const fetchAllProducts = () => {
        setProducts(products)

    }

    const openDropDown = () => {
        setToggle(!toggleDropDown)
    }
    const fetchProductsById = (id) => {
        const filterProducts = products.filter((data) => {
            return data.category === id
        })
        setProducts(filterProducts)
    }
    return (
        <main>
            <Header />
            <div className='partition'>
                <div className='menu'>
                    <div className='menu-list'>
                        <span onClick={() => fetchAllProducts()}>{'All Products'}</span>
                    </div>
                    {categories.map((data) => {
                        return (
                            <div key={data.id} className='menu-list'>

                                <span onClick={() =>{fetchProductsById(data.id)}}>{data.name}</span>

                            </div>

                        )
                    })}
                </div>

                <div className='content'>
                    <div className={toggleDropDown ? 'drop-down-menu-open' : 'drop-down-menu-close'}>
                        <div>
                        <div className='menu-list' ><span>{'Select Category'}</span><br /></div>
                            {categories.map((data) => {
                                return (
                                    <div key={data.id} className='menu-list' onClick={() =>{setToggle(!toggleDropDown);  fetchProductsById(data.id)}}><span>{data.name}</span><br /></div>
                                )
                            })}
                        </div>
                        <div><MdKeyboardArrowDown size={20} onClick={() => openDropDown()} /></div>


                    </div>
                    {productsArray.length > 0 ? (productsArray.map((data) => {
                        return (
                            <div key={data.id} className='product-card'>
                                <div className='title'>
                                    <span>{data.name}</span>
                                </div>
                                <div className='card-content'>
                                    <div className='product-image'>
                                        <img src={process.env.PUBLIC_URL+`${data.imageURL}`} />
                                    </div>
                                    <div className='card-body'>
                                        <div className='product-description'>
                                            <span>{data.description}</span>
                                        </div>
                                        <div className='card-footer'>
                                            <div className='price'>
                                                <span>₹ {data.price}</span>
                                            </div>
                                            <div className='buy-btn' onClick={() => addToCart(data)}>
                                                Buy Now
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })) : (<div className='no-product'>No Product Found</div>)}
                    { }

                </div>
            </div>
        </main>
    )
}
const mapStateToProps = (state) => {
    return { state }
}
const mapDispatchToProps = (dispatch) => {
    return {
        add: (data) => { dispatch(addToCart(data)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products)