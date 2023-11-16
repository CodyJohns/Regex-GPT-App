import axios from "axios";
import {config} from "./Configuration";
import {getMockLogin, getMockRegex} from "../tests/testing";

export const sendGPTRequest = (query, token, setResponse, addToHistory, setLoading, setError) => {
    if(query === "")
        return;

    setLoading(true);

    let data = {
        "query": query,
        "authtoken": token
    };

    axios({
        url: config.host + '/query',
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain'
        },
        data: JSON.stringify(data)
    }).then(response => {
            if(response.data.status === 200) {
                setResponse(response.data.regex);
                addToHistory(response.data.regex);
                setError(false);
                setLoading(false);
            } else {
                setResponse(response.data.message);
                setError(true);
                setLoading(false);
            }
        }).catch(error => {
            console.log(error);
            setError(true);
            setLoading(false);
        });
};

export const googleLogin = (credential, setLoading, setError, setResponseMsg, completeLogin) => {
    setLoading(true);
    console.log(credential);

    let data = {
        google_cred: credential
    };

    axios({
        url: config.host + '/login',
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain'
        },
        data: JSON.stringify(data)
    }).then(response => {
            if (response.data.status === 200) {
                setResponseMsg("");
                setError(false);
                setLoading(false);
                completeLogin(response.data.authtoken);
            } else {
                setResponseMsg(response.data.message);
                setError(true);
                setLoading(false);
            }
        })
        .catch(error => {
            console.log(error);
            setResponseMsg(error.message);
            setError(true);
            setLoading(false);
        });
};

export const userLogin = (id, password, setLoading, setError, setResponseMsg, completeLogin) => {
    setLoading(true);

    let data = {
        id: id,
        password: password
    }

    axios({
        url: config.host + '/login',
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain'
        },
        data: JSON.stringify(data)
    }).then(response => {
            if (response.data.status === 200) {
                setResponseMsg("");
                setError(false);
                setLoading(false);
                completeLogin(response.data.authtoken);
            } else {
                setResponseMsg(response.data.message);
                setError(true);
                setLoading(false);
            }
        })
        .catch(error => {
            console.log(error);
            setResponseMsg(error.message);
            setError(true);
            setLoading(false);
        });
};