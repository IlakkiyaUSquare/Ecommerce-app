import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { NavLink, useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import {addItem,delItem} from '../redux/action/index'



const ProductDetail = () => {
    const {id} = useParams();
    const navigate = useNavigate()
    const [product, SetProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const[cartBtn,setCartBtn]=useState("Add to Cart")
    const dispatch =useDispatch()
    const handleCart =(product)=>{
        if(cartBtn=== "Add to Cart"){
            dispatch(addItem(product))
            setCartBtn("Remove from Cart")
        }
        else{
            dispatch(delItem(product))
            setCartBtn("Add to Cart")
        }
    }

    

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            SetProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);

    const Loading = () => {
        return (
            <>
            <div className='col-md-6'>
                    <Skeleton height={400} />
                </div>
                <div className='col-md-6'>
                    <Skeleton height={50} width={300} style={{lineHeight:2}} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} style={{marginLeft:6}}/>
                </div> 
            </>
        )
    }
    const ShowProduct  = () =>{
        return(
            <>
            <div className='col-md-6 ' >
                <img src={product.image} className='abt' alt={product.title} height="300px" width="300px"/>
            </div>
            <div className='col-md-6'>
                <h4 className='text-uppercase text-black-50'>{product.category}</h4><hr/>
                <h1 className='display-8 fw-bold'>{product.title}</h1>
                <p className='lead fw-bolder '>Rating {product.rating && product.rating.rate}<i className="fa fa-star"></i></p>
                <h3 className='display-6 fw-bold my-4'>${product.price}</h3>
                <p className='lead1'>{product.description}</p>
                <button onClick={()=>handleCart(product)} className='btn btn-primary  mt-4 px-4 py-2 fs-7 '>{cartBtn}</button>
            </div>
            
            </>
            
        )
    }

    return (
        <div>
            <div className='container py-5'>
                <div className='row py-5'>
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
                
            </div>
        </div>
    )
}

export default ProductDetail




