export const sortByDate = (data) => {
    data.sort((a, b) => {
        const dateA = new Date(a.timestamp);
        const dateB = new Date(b.timestamp);
        return dateA.getTime() - dateB.getTime();
    });
}