import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductListItem from '../Component/ProductListItem'
import { modifyItem, removeItem } from '../redux/reducer/cart'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductList } from '../data/ProductList'

export default function CheckOut() {
    const params = useParams()
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const list = useSelector((state)=>state.cart.list)
   
    const[state,setstate]=useState(params.id?[{...ProductList.find((element)=>element.id===parseInt(params.id)),count:1}]
    :list)
    const incrementItem=(item)=>{
        const index = state.findIndex(
            (product) => product.id === item.id
          );
setstate((state)=>[...state.slice(0,index),{...item,count:item.count+1},
...state.slice(index+1)])
    }

    const decrementItem=(item)=>{
        if(item.count===1){
            removeItemFromCart(item);
        }else{
            const index = state.findIndex(
                (product) => product.id === item.id
              );
    setstate((state)=>[...state.slice(0,index),{...item,count:item.count-1},
    ...state.slice(index+1)])
        }
       
            }

            const removeItemFromCart=(item)=>{
                const index = state.findIndex(
                    (product) => product.id === item.id
                  );
        setstate((state)=>[...state.slice(0,index),
        ...state.slice(index+1)])
            }
            
    
  return (
    <>
    {state.length>0?<>{state.map((item)=>(<ProductListItem {...item} key={item.id} incrementItem={()=>incrementItem(item)} decrementItem={()=>decrementItem(item)} removeItem={()=>{removeItemFromCart(item)}}/>))}
    <button className='btn btn-success' onClick={()=>Navigate('/Sucess')}>Place Order</button></>:(<h3>No elements in the Checkout</h3>)}
    </>
  )
}
