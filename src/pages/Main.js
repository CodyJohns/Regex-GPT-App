import RequestPrompt from "../components/RequestPrompt";
import TestCases from "../components/TestCases";
import History from "../components/History";
import RegexResult from "../components/RegexResult";
import {useEffect, useState} from "react";
import {getAccountStatus, sendGPTRequest} from "../api/backend";
import Modal from "../components/Modal";
import {CookiesProvider, useCookies} from "react-cookie";
import AlertBox from "../components/AlertBox";
import AccountStatus from "../components/AccountStatus";
import Footer from "../components/Footer";

const Main = () => {
    const [cookies, setCookie] = useCookies(['authtoken']);
    const [regex, setRegex] = useState("");
    const [hash, setHash] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [history, setHistory] = useState([]);
    const [queryErrorMessage, setQueryErrorMessage] = useState("");
    const [accountData, setAccountData] = useState({});

    const addHistory = (value) => {
        let newHistory = history.concat([{ id: history.length, value: value }]);
        setHistory(newHistory);
    };

    useEffect(() => {
        getAccountStatus(cookies.authtoken, accountData, setAccountData);
    }, [cookies.authtoken, hash]);

    return (
        <CookiesProvider defaultSetOptions={{ path: '/' }}>
            <div>
                <Modal />
                <div className={"max-width-1600 pt-4"}>
                    <div className={"row"}>
                        <div className={"col-10 offset-1 col-sm-10 offset-sm-1 col-md-8 offset-md-2"}>
                            <div className={"mb-3"}>
                                <AccountStatus
                                    accountData={accountData}
                                />
                            </div>
                            <div>
                                <RequestPrompt
                                    onClick={(prompt) => {
                                        sendGPTRequest(
                                            prompt,
                                            cookies.authtoken,
                                            setRegex,
                                            setHash,
                                            (response) => addHistory(response),
                                            setLoading,
                                            setError,
                                            setQueryErrorMessage
                                        );
                                    }}
                                    loading={loading}
                                />
                            </div>
                            <div>
                                {
                                    (error) ?
                                        <div className={"pt-1 pb-1"}>
                                            <AlertBox
                                                visible={queryErrorMessage.length > 0}
                                                text={queryErrorMessage}
                                            />
                                        </div> : <div></div>
                                }
                            </div>
                            <div>
                                <div>
                                    <RegexResult
                                        result={regex}
                                        setValue={(val) => setRegex(val)}
                                    />
                                </div>
                            </div>
                            <div className={"row"}>
                                <div className={"col-12 col-sm-7"}>
                                    <TestCases
                                        value={regex}
                                    />
                                </div>
                                <div className={"col-12 col-sm-5"}>
                                    <History
                                        data={history}
                                        setData={setHistory}
                                        loadRegex={(val) => setRegex(val)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </CookiesProvider>
    );
};

export default Main;