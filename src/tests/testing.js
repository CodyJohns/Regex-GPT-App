
export const getMockRegex = () => {

    const regex = [
        {
            data: "^[A-Za-z0-9]+$"
        },
        {
            data: "^\\d{3}-\\d{3}-\\d{4}$"
        },
        {
            data: "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
        },
    ];

    return new Promise((resolve, reject) => {
        resolve(regex[Math.floor(Math.random() * regex.length)]);
    });
};