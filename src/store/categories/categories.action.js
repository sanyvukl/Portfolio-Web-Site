import {CATEGORIES_MAP_ACTION_TYPES} from  "./categories.types";
import {createAction} from "../../utils/reducer/reducer.utils";

const setCategories = (categoriesArray) => {
    return createAction(CATEGORIES_MAP_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
};
export default setCategories;