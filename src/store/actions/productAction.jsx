import axios from 'axios'
import { getproduct } from '../reducers/productReducer';

export const asyncgetproducts = () => async (dispatch, getState) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products')
       // console.log(response.data);
        dispatch(getproduct(response.data))
    } catch (error) {
        console.log(error);
    }
}