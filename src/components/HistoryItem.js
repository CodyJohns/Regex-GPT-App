
const HistoryItem = ({ id, prompt, value, onLoad }) => {

    return (
        <div>
            <div className={"mb-3"}>
                <div className={"history-item"}>
                    <div className={"history-item-overlay"}>
                        <button
                            className={"btn btn-outline-primary load-btn"}
                            onClick={() => {
                                onLoad(value);
                            }}
                        >
                            Load
                        </button>
                    </div>
                    <p className={"prompt"}>{ prompt }</p>
                    <p className={"regex"}>{ value }</p>
                </div>
            </div>
        </div>
    );
};

export default HistoryItem;