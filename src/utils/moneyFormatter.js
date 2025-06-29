export const  formatter = new Intl.NumberFormat('en', {
    currency: 'IRR',
});
export const moneyFormatter = (value) => formatter.format(value);