import {getMockRegex} from "../tests/testing";

export const sendGPTRequest = (query, setResponse, addToHistory, setLoading, setError) => {
    setLoading(true);

    getMockRegex() //replace later with axios call
        .then(response => {
            setResponse(response.data);
            addToHistory(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.log(error);
            setError(true);
            setLoading(false);
        });
};