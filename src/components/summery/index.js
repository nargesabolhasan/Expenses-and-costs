import React, {useContext} from 'react';
import {MoneyContext} from "../../context/money";
import {moneyFormatter} from "../../utils/moneyFormatter";

const Summery = () => {
    const {expendIncom, amountTag} = useContext(MoneyContext)

    return (
        <div className={"rounded-lg w-[300px] mx-auto mt-5 border border-gray-400 p-4"}>
            <h2 className={"text-center my-4"}>Summery:</h2>
            <div className="flex flex-col gap-3 justify-center"
            >
                <div className={"bg-green-50 p-3 rounded-lg flex gap-2 border-2 border-green-500"}>
                    <span>incomes :</span>
                    <span>{moneyFormatter(expendIncom?.incom)}</span>
                </div>
                <div className={"bg-pink-200 p-3 rounded-lg flex gap-2 border-2 border-pink-500"}>
                    <span>expends :</span>
                    <span>{moneyFormatter(expendIncom?.expend)}</span>
                </div>
                <div className={"bg-blue-50 p-3 rounded-lg flex gap-2 border-2 border-blue-500"}>
                    <span>saved :</span>
                    <span>{moneyFormatter(amountTag?.save?.amount ?? 0)}</span>
                </div>
                <div className={"p-3 rounded-lg flex gap-2 border-2 border-gray-400"}>
                    <span>rest :</span>
                    <span>{moneyFormatter(expendIncom?.incom - (expendIncom?.expend + (amountTag?.save?.amount ?? 0)))}</span>
                </div>
            </div>
        </div>
    );
};

export default Summery;