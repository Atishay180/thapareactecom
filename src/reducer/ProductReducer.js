import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from "axios"
import { setFeatureProducts, setIsError, setIsLoading, setProducts } from '../store/productSlice';


const ProductReducer = () => {
    const API = "https://api.pujakaitem.com/api/products";

    const dispatch = useDispatch()

    const getApiData = async(url) => {
        dispatch(setIsLoading(true))

        try {
            const res = await axios.get(url);
            const products = await res.data;

            const featuredData = products.filter((currentElement) => currentElement.featured === true)
            dispatch(setIsLoading(false))
            dispatch(setFeatureProducts(featuredData))
            dispatch(setProducts(products))
        } catch (error) {
            dispatch(setIsLoading(false))
            dispatch(setIsError(true))
        }
    }

    useEffect(() => {
        getApiData(API)
    }, [])
    
    return null;
}

export default ProductReducer