import RequestPrompt from "../components/RequestPrompt";
import TestCases from "../components/TestCases";
import History from "../components/History";
import RegexResult from "../components/RegexResult";
import {useState} from "react";
import {sendGPTRequest} from "../api/backend";

const Main = () => {
    const [regex, setRegex] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [history, setHistory] = useState([]);

    const addHistory = (value) => {
        let newHistory = history.concat([{ id: history.length, value: value }]);
        setHistory(newHistory);
    };

    return (
        <div>
            <div className={"max-width-1600 pt-4"}>
                <div className={"row"}>
                    <div className={"col-10 offset-1 col-sm-10 offset-sm-1 col-md-8 offset-md-2"}>
                        <div>
                            <RequestPrompt
                                onClick={(prompt) => {
                                    sendGPTRequest(
                                        prompt,
                                        setRegex,
                                        (response) => addHistory(response),
                                        setLoading,
                                        setError
                                    );
                                }}
                                loading={loading}
                                error={error}
                            />
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
        </div>
    );
};

export default Main;