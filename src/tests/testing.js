
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
        resolve({
            data: {
                data: regex[Math.floor(Math.random() * regex.length)]
            }
        });
    });
};

export const getMockLogin = () => {
    return new Promise((resolve, reject) => {
        resolve({
           data: {
                authtoken: "1234567890"
           }
        });
    });
};

export const getMockStatus = () => {
    return new Promise((resolve, reject) => {
        resolve({
            data: {"data":null,"message":"User must log in again.","status":404}
        });
    });
};