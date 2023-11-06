import {useState} from "react";
import HistoryItem from "./HistoryItem";

const renderHistory = (history, loadRegex) => {
    let arr = [];

    history.forEach(elem => {
        arr.push(
            <HistoryItem
                key={elem.id}
                value={elem.value}
                onLoad={(val) => {
                    loadRegex(val);
                }}
            />
        );
    });

    return arr;
};

const History = ({ data, setData, loadRegex }) => {

    return (
        <div className={"content-panel primary-color"}>
            <label htmlFor={"history"} className="form-label">History</label>
            <div id={"history"} className={"mb-3"}>
                {
                    (data.length > 0) ? renderHistory(data, loadRegex) :
                        <div>
                            <p>No history.</p>
                        </div>
                }
            </div>
            <div>
                <button
                    className={"btn btn-secondary"}
                    onClick={() => {
                        setData([]);
                    }}
                >Clear</button>
            </div>
        </div>
    );
};

export default History;