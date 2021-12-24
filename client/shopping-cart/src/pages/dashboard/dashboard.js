import React, { Component } from 'react'
import fruits from '../../assests/static/images/category/fruits.png'
import './styles.css'
import offer1 from '../../assests/static/images/offers/offer1.jpg'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import categories from '../../server/categories/index.get.json'
import banners from '../../server/banners/index.get.json'
import Header from '../../components/header/header';
import Modal from '../../components/modal/modal';
import Footer from '../../components/footer/footer';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [categoryData, setCategoryData] = React.useState(categories)
    const [bannerData, setBannerData] = React.useState(banners)
    const navigate = useNavigate();

    console.log(categoryData)
    const navigateTo = (data) => {
        navigate('/products', {
            state: {
                category: data.id,
            }
        })
    }
    return (
        <main>


            <Header />
            <div className='content'>
                <div className='banner-carousel'>

                    <Carousel dynamicHeight={true} showIndicators={false} showStatus={false} infiniteLoop={true} stopOnHover={true} showThumbs={false} autoPlay>
                        {bannerData.map((data) => {

                            return (<div>
                                <img src={process.env.PUBLIC_URL + `${data.bannerImageUrl}`} alt={data.bannerImageAlt} />

                            </div>)
                        })
                        }

                    </Carousel>
                </div>
                {categoryData.map((data, index) => {
                    return index % 2 == 0 ? (<div key={index} className='category-card-left'>
                        <div className='category-img'>
                            <img src={process.env.PUBLIC_URL + `${data.imageUrl?data.imageUrl:'/fruits.png'}`}/>
                        </div>
                        <div className='category-card-content'>
                            <span className='card-title'>{data.name}</span>
                            <span className='card-subtitle'>{data.description}</span>
                            <div className='explore-btn' onClick={() => { navigateTo(data) }}>
                                {`Explore ${data.name}`}
                            </div>
                        </div>
                    </div>) : (<div key={index} className='category-card-left'>

                        <div className='category-card-content'>
                            <span className='card-title'>{data.name}</span>
                            <span className='card-subtitle'>{data.description}</span>
                            <div className='explore-btn' onClick={() => { navigateTo(data) }}>
                                {`Explore ${data.name}`}
                            </div>
                        </div>
                        <div className='category-img'>
                            <img src={process.env.PUBLIC_URL + `${data.imageUrl?data.imageUrl:'/fruits.png'}`} />
                        </div>
                    </div>)
                })}
            </div>
            <Footer />
        </main>
    )
}
export default Dashboard