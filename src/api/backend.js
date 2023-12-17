import axios from "axios";
import {config} from "./Configuration";
import md5 from "md5";

export const sendGPTRequest = (query, token, setResponse, setHash, setLoading, setError, setQueryErrorMessage) => {
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
            setHash(md5(JSON.stringify(response)));

            if(response.data.status === 200) {
                setResponse(response.data.regex);
                setError(false);
                setLoading(false);
            } else {
                setResponse("");
                setQueryErrorMessage(response.data.message);
                setError(true);
                setLoading(false);
            }
        }).catch(error => {
            console.log(error);
            setError(true);
            setQueryErrorMessage(error.message);
            setLoading(false);
        });
};

export const googleLogin = (credential, setLoading, setError, setResponseMsg, completeLogin) => {
    setLoading(true);

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

export const userRegister = (email, password, confpassword, passwordValid, setLoading, setError, setResponseMsg, completeRegistration) => {
    const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    setLoading(true);
    setError(false);
    setResponseMsg("");

    if(!validEmail.test(email)) {
        setResponseMsg("Please enter a valid email.")
        setError(true);
        setLoading(false);
        return;
    }

    if(!passwordValid) {
        setResponseMsg("Please enter a strong password.")
        setError(true);
        setLoading(false);
        return;
    }

    if(password !== confpassword) {
        setResponseMsg("Passwords do not match.")
        setError(true);
        setLoading(false);
        return;
    }

    let data = {
        id: email,
        password: password
    };

    axios({
        url: config.host + '/register',
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
                completeRegistration(response.data.authtoken);
            } else {
                setResponseMsg(response.data.message);
                setError(true);
                setLoading(false);
            }
        }).catch(error => {
            console.log(error);
            setResponseMsg(error.message);
            setError(true);
            setLoading(false);
        });
};

export const getAccountStatus = (authtoken, accountData, setAccountData, setHistory) => {

    let data = {
        authtoken: authtoken,
    };

    axios({
        url: config.host + '/account/status',
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain'
        },
        data: JSON.stringify(data)
    }).then(response => {
        if (response.data.status === 200) {
            setAccountData(response.data.data);
            setHistory(response.data.data.history);
        } else {
            setAccountData({ error: true });
        }
    }).catch(error => {
        console.log(error);
        if(!accountData)
            setAccountData({ error: true });
    });
};