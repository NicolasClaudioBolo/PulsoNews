 
const LOADER = "LOADER"; 
const INDEX = "INDEX";
const PAGINATION = "PAGINATION";
const PRODUCTS_BY_PAGE = "PRODUCTS_BY_PAGE"
const ALL_PRODUCTS = "ALL_PRODUCTS";

import {lastNewsArray } from '../Utils/Card.utils'

const dataInicial = {
    
    products: lastNewsArray,
    index: 0,
    page: 1,
    productsByPage: 4
};

//Reducer
export default function dataReducer(state = dataInicial, action) {
    switch (action.type) {
        case ALL_PRODUCTS:
            return { ...state, products: action.payload, loading: false, category_active: null };
   

        case PAGINATION:
            return { ...state, page: action.payload };

        case PRODUCTS_BY_PAGE:

            return { ...state, productsByPage: action.payload };


        default:
            return state;
    }
}

// export const allDataAction = () => async (dispatch) => {
//     const foods = await axios.get('http://localhost:9000/api/foods')
//     const drinks = await axios.get('http://localhost:9000/api/drinks')
//     dispatch({
//         type: ALL_PRODUCTS,
//         payload: [...drinks.data.data, ...foods.data.data]
//     });
// };
 

export const loaderAction = (load) => async (dispatch) => {
    dispatch({
        type: LOADER,
        payload: load
    });
};

 
export const indexAction = (i) => (dispatch) => {
    dispatch({
        type: INDEX,
        payload: i
    });
};

export const pageAction = (value) => (dispatch) => {
    dispatch({
        type: PAGINATION,
        payload: value
    });

}

export const productsByPageAction = (number) => (dispatch) => {
    dispatch({
        type: PRODUCTS_BY_PAGE,
        payload: number
    });

}