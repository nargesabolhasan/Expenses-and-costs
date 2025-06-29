import React from 'react';
import AmountTable from "../components/amountTable";
import AddAmount from "../components/addAmount/index";

const AmountManager = () => {
    const [store,setStore] = React.useState([]);
    return (
        <div>
            <AddAmount store={store} setStore={setStore}/>

            <AmountTable store={store}/>


        </div>
    );
};

export default AmountManager;