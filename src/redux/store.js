import { configureStore} from "@reduxjs/toolkit";

import { itemsSlice } from "./items/itemsSlice";
import { filterSlice } from "./filter/filterSlice";

export const store = configureStore({

    reducer: {
       
            items: itemsSlice.reducer,
            filter: filterSlice.reducer,
       
    }
});