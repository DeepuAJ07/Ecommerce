import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductCard(props) {
    const Navigate = useNavigate()
  return (
    <div className='card m-2 cursor-pointer'style={{width:"300px"}} role='button'onClick={()=>Navigate(`/product/${props.id}`)}>
        <div className='mt-2'>
            <img src={props.Image} height={150} width={180} alt={props.title}/>
        </div>
        <div className='card-body'>
            <h5 className='card-title'>{props.title}</h5>
            <h6 className='mt-2'>Price:[`$${props.price}]</h6>
            <h6 className='mt-2'>Discount:{props.discountPercentage}</h6>
            <h6 className='mt-2'>Rating:{props.rating}</h6>
            <h6 className='mt-2'>Stock:{props.stock}</h6>
            <div>
                {props.stock>0?<button className='btn btn-success'>Available</button>:<button className='btn btn-outline-danger'>Out of Stock</button>}
            </div>
        </div>
    </div>
  )
}
