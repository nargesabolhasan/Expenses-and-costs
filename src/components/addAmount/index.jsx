import React from 'react';
import {Button, MenuItem, Select, TextField} from "@mui/material";
import {Tags} from "../../constants/tags";
import {MoneyContext} from "../../context/money";
import Add from '@mui/icons-material/Add';
import Star from '@mui/icons-material/Star';

const AddAmount = () => {
    const [date, setDate] = React.useState(null);
    const [amount, setAmount] = React.useState(null);
    const [description, setDescription] = React.useState(null);
    const [tag, setTag] = React.useState(null);
    const {addMoney, updateAmountTags} = React.useContext(MoneyContext);

    const onChangeHandler = (value, setter) => {
        setter(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addMoney(`${Date.now()}`, {date, amount, description: description ?? "---", tag});
        updateAmountTags(tag?.value, amount,tag?.type)
    }

    return (
        <form className={"w-full flex flex-col gap-3 justify-center bg-blue-50 border-4 border-gray-950 p-2 rounded-lg"}
              onSubmit={handleSubmit}>

            <h2 className={"my-3 font-bold text-center"}><Star/> New Transaction</h2>
            <h4>amount</h4>
            <TextField type={"number"}
                       onChange={(e) => onChangeHandler(e.target.value, setAmount)}/>
            <h4>tag</h4>
            <Select
                variant={"outlined"}
                onChange={(e) => onChangeHandler(e.target.value, setTag)}>
                {Tags.map((option, index) => (<MenuItem
                    key={index}
                    value={option}
                    className={"flex justify-between gap-2"}
                >
                    <span className={`w-4 h-4 rounded ${option.color}`}></span> <span> {option.label}</span>
                </MenuItem>))}
            </Select>
            <h4>date</h4>
            <TextField type={"datetime-local"} variant={"outlined"}
                       onChange={(e) => onChangeHandler(e.target.value, setDate)}/>
            <h4>description</h4>

            <TextField type={"text"} multiline dir={"auto"}
                       onChange={(e) => onChangeHandler(e.target.value, setDescription)}/>
            <Button variant="contained" type="submit" className={"!bg-blue-200 !text-black"}>
                <Add/> Insert
            </Button>
        </form>);
};

export default AddAmount;