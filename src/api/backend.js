//import {getMockRegex} from "../tests/testing";
import axios from "axios";
import {config} from "./Configuration";

export const sendGPTRequest = (query, setResponse, addToHistory, setLoading, setError) => {
    if(query === "")
        return;

    setLoading(true);

    axios({
        url: config.host + '/query',
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain'
        },
        data: query
    }).then(response => {
            setResponse(response.data.data);
            addToHistory(response.data.data);
            setError(false);
            setLoading(false);
        }).catch(error => {
            console.log(error);
            setError(true);
            setLoading(false);
        });
};