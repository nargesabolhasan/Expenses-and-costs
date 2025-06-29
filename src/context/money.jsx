import React, {createContext, useEffect, useState} from "react";

export const MoneyContext = createContext();

export const MoneyProvider = ({children}) => {
    const [money, setMoney] = useState({});
    const [amountTag, setAmountTag] = useState({})
    const [expendIncom, setExpendIncom] = useState({
        expend:0,incom:0
    })

    function isEmptyObject(obj) {
        return Object.keys(obj).length === 0;
    }

    useEffect(() => {
        if (localStorage.getItem("money")) {
            setMoney(JSON.parse(localStorage.getItem("money")));
        }
        if (localStorage.getItem("amountTag")) {
            setAmountTag(JSON.parse(localStorage.getItem("amountTag")));
        }
    }, []);

    useEffect(() => {
        if (!isEmptyObject(money))
            localStorage.setItem('money', JSON.stringify(money));
    }, [money]);

    useEffect(() => {
        updateExpends()

        if (!isEmptyObject(amountTag)) {
            localStorage.setItem('amountTag', JSON.stringify(amountTag));
        }
    }, [amountTag]);


    const addMoney = (id, item) => {
        setMoney({...money, [id]: item});
    };

    const clearAllMoney = () => {
        setMoney({});
    }

    const deleteMoney = (keyToDelete) => {
        setMoney(currentData => {
            const {[keyToDelete]: _, ...rest} = currentData;
            return rest;
        });
    };

    const updateAmountTags = (tag, amount, type) => {
        setAmountTag({
            ...amountTag,
            [tag]: {type, amount: amountTag[tag]?.amount ? Number(amount) + Number(amountTag[[tag]]?.amount) : Number(amount)}
        })
    }

    const removeAmountTags = (tag, amount, type) => {
        setAmountTag({...amountTag, [tag]: {type,amount:Number(amountTag[[tag]]?.amount) - Number(amount)
    }})
    }

    const updateExpends = () => {
        let sumExp = 0
        let sumInc = 0
        Object.entries(amountTag).forEach(([key, value]) => {
            if( value?.amount) {
                if (value.type) {
                    sumInc += value.amount
                } else if (key !== "save") {
                    sumExp += value.amount
                }
            }
        })
        setExpendIncom({expend: sumExp, incom: sumInc})
    }

    return (
        <MoneyContext.Provider
            value={{
                money,
                addMoney,
                deleteMoney,
                clearAllMoney,
                updateAmountTags,
                amountTag,
                expendIncom,
                removeAmountTags
            }}>
            {children}
        </MoneyContext.Provider>
    );
};
