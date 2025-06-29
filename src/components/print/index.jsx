import React, {useContext} from 'react';
import {MoneyContext} from "../../context/money";
import {sortByDate} from "../../utils/sortByDate";
import {moneyFormatter} from "../../utils/moneyFormatter";
import {localDate} from "../../utils/localDate";

const PrintPage = () => {
    const {money} = useContext(MoneyContext);

    const tdStyle = "border border-gray-500 p-2";
    return (
        <div className={"hidden print:block"}>
            <table border="1" className={"border border-gray-950"}>
                <tbody>
                <tr>
                    <th className={tdStyle}>#</th>
                    <th className={tdStyle}>Tag</th>
                    <th className={tdStyle}>Amount</th>
                    <th className={tdStyle}>Date</th>
                    <th className={tdStyle}>Description</th>
                </tr>
                {sortByDate(Object.entries(money))?.map((item, index) => (<tr key={index}>
                    <td className={tdStyle}>{index + 1}</td>
                    <td className={tdStyle}>
                        {item[1]?.tag?.label}
                    </td>
                    <td className={tdStyle}>
                        {moneyFormatter(item[1]?.amount)}
                    </td>
                    <td className={tdStyle}>
                        {localDate(item[1]?.date)}
                    </td>
                    <td className={tdStyle} dir={"auto"}>
                        {item[1]?.description}
                    </td>
                </tr>))}
                </tbody>
            </table>
        </div>
    );
};

export default PrintPage;