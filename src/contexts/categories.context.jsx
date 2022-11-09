import React, { createContext, useReducer, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const categoriesReducer = (state, action) =>{
    const { type, payload } = action; 

    switch(type){
        case CATEGORIES_MAP_ACTION_TYPES.SET_CATEGORIES_MAP:
            return {
                ...state,
                categoriesMap: payload
            };
        default:
            throw new Error(`Unhandled categories ${type}`);
    };
};
const CATEGORIES_MAP_ACTION_TYPES = {
    SET_CATEGORIES_MAP: "SET_CATEGORIES",
};
const INITIAL_STATE = {
    categoriesMap: {},
};

export const CategoriesProvider = ({ children }) => {
    // const [categoriesMap, setCategoriesMap] = useState({});
    // Wrote data to db;
    // useEffect(() => {
    //     addCollectionAndDocuments("categories", SHOP_DATA);
    // }, []);
    // Get data from db

    const [state, dispatch] = useReducer(categoriesReducer, INITIAL_STATE);
    const { categoriesMap } = state;
    const setCategoriesMap = (categoriesMap) =>{
        dispatch({type:CATEGORIES_MAP_ACTION_TYPES.SET_CATEGORIES_MAP, payload: categoriesMap});
    };

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        };
        getCategoriesMap();
    }, []);

    const value = { categoriesMap };

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
};

