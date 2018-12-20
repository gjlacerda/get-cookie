const getCookie = (cookies, searchKey) => {
    return cookies
        .split(';')
        .reduce((acc, current) => {
            const [key, value] = current
                .trim()
                .split(/=(.+)/);
            return key === searchKey ?
                value :
                acc;
        }, 0);
};

module.exports = getCookie;

