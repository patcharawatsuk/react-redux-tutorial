import React from 'react'
import {useDispatch} from 'react-redux'

import {addToCart} from '../store/slices/cartSlice'
import { useAppDispatch } from '../store/store'
import { Product } from '../types'

interface Props {
  product: Product
}

export default function Item({product}: Props) {
  const dispatch = useAppDispatch()

  return (
    <div className='product' >
        <h4>{product.title}</h4>
        <p>{product.price}</p>
        <button onClick={() => dispatch(addToCart({...product, quantity: 1}))}> Add To Cart</button>
      </div>
  )
}
