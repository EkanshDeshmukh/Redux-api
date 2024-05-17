import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncgetproducts } from '../store/actions/productAction'
import { deleteproduct } from '../store/reducers/productReducer'

const Products = () => {
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.productReducer)
    // console.log(products);
    useEffect(() => {
        dispatch(asyncgetproducts())
    }, [])

    const DeleteHandler = (productId) => {
        dispatch(deleteproduct(productId));
        
    };

    return (
        <div className='m-auto container p-10 mt-5 bg-red-100 '>
            <h1 className='text-2xl font-bold text-red-900'>Product List</h1>
            <ul>
                {
                    products && products.map((p) => (
                        <li key={p.id}>
                            <h1 className='font-semibold'>{p.title}
                                <span onClick={() => DeleteHandler(p.id)} className='text-red-600 cursor-pointer font-black'>X</span>
                            </h1>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Products
