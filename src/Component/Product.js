import React, { useState, useEffect } from 'react'
import '../App.css';
import Skeleton from 'react-loading-skeleton';
import { NavLink, useNavigate } from 'react-router-dom';

const Product = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let ComponentMounted = true
    useEffect((items) => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");

            if (ComponentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                
                setLoading(false);

            }
            return () => {
                ComponentMounted = false;
            }
        }
        getProducts();
    }, []);

    
    const Loading = () => {
        return (
            <>
               <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div> 
            </>
        )
    }
    const filterProduct= (cat) => {
        const updatedList=data.filter((x)=>x.category === cat);
        setFilter(updatedList);
    }
    const ShowProducts = () => {
        return (
            <>
                <div className='button'>
                    <button className='btn btn-outline-dark me-3' onClick={()=>setFilter(data)}>All</button>
                    <button className='btn btn-outline-dark me-3' onClick={()=>filterProduct("men's clothing")}> Men's Clothing</button>
                    <button className='btn btn-outline-dark me-3' onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className='btn btn-outline-dark me-3' onClick={()=>filterProduct("jewelery")}>Jewelery</button>
                    <button className='btn btn-outline-dark me-3' onClick={()=>filterProduct("electronics")}>Electronics</button>
                </div>
                {filter.map((product,index) => {
                    return (
                        <>
                            <div className='col-md-3 mb-4' key={index}>
                                <div className="card text-center p-4" key={product.id} >
                                    <img src={product.image} className="card-img-top" alt={product.title}/>
                                        <div className="card-body">
                                            <h5 className="card-tit">{product.title.substring(0,12)}</h5>
                                            <p className="card-txt">${product.price}</p>
                                            <NavLink to={`/product/${product.id}`} className="btn btn-outline-dark" >Buy Now</NavLink>
                                        </div>
                                </div>
                            </div>
                        </>
                    )
                }
                )}
            </>
        )
    }
    return (
        <div>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col mb-5'>
                        <h1 className='prod text-center'>Latest Product</h1><hr />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default Product
