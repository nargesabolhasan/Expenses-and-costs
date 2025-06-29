import React, {useContext} from "react";
import "./input.css";
import {ThemeContext, ThemeProvider} from "./context/theme";
import ThemeToggle from "./components/todo/toggle-theme";
import AmountManager from "./page/amountManager";
import {MoneyProvider} from "./context/money";

const App = () => {
    const {darkStyles} = useContext(ThemeContext);

    return (<div
        className={`min-h-screen flex flex-col items-center gap-2 ${darkStyles}`}
    >
        <ThemeToggle/>
        <MoneyProvider>
            <AmountManager/>
        </MoneyProvider>
    </div>);
};

const Root = () => (<ThemeProvider>
    <App/>
</ThemeProvider>);

export default Root;
