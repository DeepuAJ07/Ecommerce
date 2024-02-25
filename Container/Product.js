import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductList } from '../data/ProductList'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../redux/reducer/cart'

export default function Product() {
    const params = useParams()
   
    const props = ProductList.find((element)=>element.id===parseInt(params.id))
 
    const dispatch = useDispatch()
    const Navigate = useNavigate()
const[alert,setalert]=useState(false)
    const addToCart=()=>{
        setalert(true)
        setTimeout(()=>{
            setalert(false)
        },3000)
        dispatch(addItem(props))
       
    }
    const list = useSelector((state)=>state.cart.list)
    const element = list.find((item)=>item.id===props.id)
 
  return (
    <div className='card mt-4 align-items-center'>
        {alert&& <span className='alert alert-sucess'>Item added to the Cart</span>}
        <div className='mt-2'>
            <img src={props.Image} height={350} width={400} alt={props.title}/>
        </div>
        <div className='card-body mt-3'>
            <h5 className='card-title'>{props.title}</h5>
            <h6 className='mt-2'>Price:[`$${props.price}]</h6>
            <h6 className='mt-2'>Discount:{props.discountPercentage}</h6>
            <h6 className='mt-2'>Rating:{props.rating}</h6>
            <h6 className='mt-2'>Stock:{props.stock}</h6>
            <div className='mt-4'>
                {props.stock>0?(
                <>
                <button className='btn btn-success'onClick={()=>Navigate(`/Checkout/${props.id }`)}>Buy Now</button>
               
                {
element?.count > 0 ? (<button className='btn btn-outline-warning ms-4'onClick={()=>Navigate('/CartPage')}>Go to Cart</button>):( <button className='btn btn-success ms-4'onClick={addToCart}>Add to Cart</button>)
                }  
               
                </>):<button className='btn btn-outline-danger'>Out of Stock</button>}
            </div>
        </div>
    </div>
  )
}
