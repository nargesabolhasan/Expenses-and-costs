const options = {
    month: 'long',
    day: 'numeric',
    calendar: 'persian',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
};

export const localDate=(date) => new Intl.DateTimeFormat('fa-IR', options)?.format(new Date(date));
