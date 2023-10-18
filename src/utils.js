function formatDate(string) {
    const months = ["January", "February", "March", "April",
        "May", "June", "July", "August", "September",
        "October", "November", "December"];
    const timestamp = Date.parse(string);
    const date = new Date(timestamp);
    const month = date.getMonth();
    const day = date.getDay();
    const year = date.getFullYear();

    return `${months[month]} ${day}, ${year}`;
}

export { formatDate };