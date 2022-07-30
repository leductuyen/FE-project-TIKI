import { createContext, useState } from 'react';

export const Context = createContext();
const ContextProvider = ({ children }) => {
    const [searchString, setSearchString] = useState();
    const [search, setSearch] = useState();
    const [productList, setProductList] = useState([]);
    const [userName, setUserName] = useState(window.localStorage.getItem('USER'));
    const value = {
        productList,
        setProductList,
        search,
        setSearch,
        userName,
        setUserName,
        searchString,
        setSearchString,
    };
    return <Context.Provider value={value}>{children}</Context.Provider>;
};
export default ContextProvider;
