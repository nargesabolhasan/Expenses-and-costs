import React, {useContext} from 'react';
import AmountTable from "../components/amountTable";
import AddAmount from "../components/addAmount/index";
import Summery from "../components/summery";
import ScrollBottom from "../components/scrollBottom";
import PrintPage from "../components/print";
import PrintIcon from '@mui/icons-material/Print';
import Delete from '@mui/icons-material/Delete';
import {MoneyContext} from "../context/money";


const AmountManager = () => {
    const {clearAllMoney} = useContext(MoneyContext);
    const deleteAllMoney = () => {
        clearAllMoney()
        localStorage.removeItem("money");
        localStorage.removeItem("amountTag");
        window.location.reload();
    }
    return (
        <div className={"p-4"}>
            <div className={"print:hidden"}>
                <div className={"flex flex-row justify-between w-full"}>
                    <div onClick={() => window.print()}
                         className={"my-3 cursor-pointer text-xl flex justify-center items-center h-10 w-10 p-3 rounded-full drop-shadow-xl bg-blue-200 border-4 border-gray-950"}
                    >
                        <PrintIcon/>
                    </div>
                    <div onClick={deleteAllMoney}
                         className={"flex gap-1 my-3 cursor-pointer text-md justify-center items-center h-10 p-3 rounded-full drop-shadow-xl bg-blue-200 border-4 border-gray-950"}
                    >
                        <Delete/>
                        Delete All
                    </div>
                </div>
                <AddAmount/>
                <hr className={"my-5 border-2 border-dashed border-gray-500"}/>
                <AmountTable/>
                <hr className={"my-5 border-2 border-dashed border-gray-500"}/>
                <ScrollBottom/>
            </div>
            <PrintPage/>
            <Summery/>
        </div>
    );
};

export default AmountManager;