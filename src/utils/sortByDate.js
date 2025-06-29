export const sortByDate = (data) => {
    return data.sort((a, b) => {
        const dateA = new Date(a[1]?.date);
        const dateB = new Date(b[1]?.date);
        return dateB.getTime() - dateA.getTime();
    });
}