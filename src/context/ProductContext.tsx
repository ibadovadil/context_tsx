import axios from 'axios';
import {createContext,useEffect,useState} from 'react';

type ProductContextType ={}
type PropType ={
    children:any
}

export const ProductContext = createContext<ProductContextType | any>(undefined);

export const ProductProvider = (props:PropType)=>{
        const [state,setState] = useState([]);
        useEffect(()=>{
                axios
                .get('https://fakestoreapi.com/products')
                .then(res=>setState(res.data))
        },[])
        
        return(
            <ProductContext.Provider value={[state,setState]}>
                {props.children}
            </ProductContext.Provider>
        )
}