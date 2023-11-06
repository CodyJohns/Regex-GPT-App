
const HistoryItem = ({ id, value, onLoad }) => {

    return (
        <div>
            <div className={"mb-3"}>
                <div className={"d-flex"}>
                    <input type="text" className="form-control" value={value} disabled={true} />
                    <div className={"ps-3"}>
                        <button
                            className={"btn btn-outline-primary"}
                            onClick={() => {
                                onLoad(value);
                            }}
                        >Load</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryItem;