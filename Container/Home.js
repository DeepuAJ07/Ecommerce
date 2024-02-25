import React from 'react'
import Header from '../Component/Header'
import { Routes,Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Product from './Product'
import CartPage from './CartPage'
import CheckOut from './CheckOut'
import Sucess from './Sucess'

export default function Home () {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path="/"element={<Dashboard/>}/>
            <Route path="/product/:id" element={<Product/>}/>
            <Route path='/CartPage'element={<CartPage/>}/>
            <Route path='/Checkout/'>
                <Route path=''element={<CheckOut/>}/>
                <Route path=':id'element={<CheckOut/>}/>
            </Route>
            <Route path='/sucess'element={<Sucess/>}/>
        </Routes>
        </div>
  )
}
