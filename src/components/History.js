import HistoryItem from "./HistoryItem";
import {useState} from "react";
import HistoryModal from "./HistoryModal";

const renderHistory = (history, loadRegex, len = -1) => {
    let arr = [];

    let end = len > -1 ? len : history.length;

    for (let i = 0; i < end; i++) {
        let elem = history[i];

        arr.push(
            <HistoryItem
                key={elem.queryID}
                prompt={elem.prompt}
                value={elem.regexResult}
                onLoad={(val) => {
                    loadRegex(val);
                }}
            />
        );
    }

    return arr;
};

const History = ({ data, setData, loadRegex }) => {
    const [showExtended, setShownExtended] = useState(false);

    return (
        <div className={"content-panel primary-color"}>
            <label htmlFor={"history"} className="form-label">History</label>
            <div id={"history"} className={"mb-3"}>
                {
                    (data.length > 0) ? renderHistory(data, loadRegex, data.length < 3 ? data.length : 3) :
                        <div>
                            <p>No history.</p>
                        </div>
                }
            </div>
            {
                (data.length >= 3) ?
                    <div>
                        <button
                            className={"btn btn-secondary"}
                            onClick={() => {
                                setShownExtended(true);
                            }}
                        >See Entire History</button>
                    </div> : <div></div>
            }
            <div>
                <HistoryModal
                    visible={showExtended}
                    history={renderHistory(data, (val) => {
                        loadRegex(val);
                        setShownExtended(false);
                    })}
                    setVisible={(val) => setShownExtended(val)}
                />
            </div>
        </div>
    );
};

export default History;