import React from 'react';
import {moneyFormatter} from "../../utils/moneyFormatter";
import {localDate} from "../../utils/localDate";
import {MoneyContext} from "../../context/money";
import {sortByDate} from "../../utils/sortByDate"

const AmountTable = () => {
    const {money, deleteMoney, removeAmountTags} = React.useContext(MoneyContext);

    const handleRemove = (id) => {
        deleteMoney(id)
    }

    return (<div className={"my-4"}>
            <div>
                <h3>transactions :</h3>
                {money &&
                    <table className={"w-full rounded-lg text-center"}>
                        <tbody className={"flex flex-col text-sm"}>
                             {sortByDate(Object.entries(money))?.map((item, index,array) => (<tr key={index}
                                                                              className={"my-2 rounded-lg grid auto-cols-auto border border-x-gray-400 items-center"}>
                        <td className={"p-2 w-full h-full border "}>{array?.length-index}</td>
                        <td className={`p-2 w-full h-full`}>
                        <span className={`${item[1]?.tag?.color} px-6 py-1 rounded-lg`}>
                        {item[1]?.tag?.label}
                        </span>
                        </td>
                        <td className={"p-2 w-full h-full border"} dir={"rtl"}>
                            {moneyFormatter(item[1]?.amount)}
                        </td>
                        <td className={`p-2 w-full h-full`} dir={"rtl"}>
                            {localDate(item[1]?.date)}
                        </td>
                        <td className={"p-2 text-wrap w-full h-full border"}>
                            {item[1]?.description}
                        </td>
                        <td className={"flex flex-row gap-1 p-2 w-full h-full justify-center"}>
                            <button className={"p-2 w-full bg-amber-200 rounded"}>edit</button>
                            <button className={"p-2 w-full bg-red-300 rounded"} onClick={() => {
                                handleRemove(item[0])
                                removeAmountTags(item[1]?.tag?.value, item[1]?.amount,item[1]?.tag?.type)
                            }}>delete
                            </button>
                        </td>
                    </tr>))}
                        </tbody>
                    </table>
                }
            </div>
        </div>
    );
};

export default AmountTable;