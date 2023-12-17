
const HistoryModal = ({ visible, setVisible, history }) => {

    const modal_classes = visible ? "bkg-blur d-flex justify-content-center align-items-center" : "bkg-blur d-flex justify-content-center align-items-center d-none";

    return (
        <div className={modal_classes}>
            <div className={"width-fixed content-panel secondary-color mb-0"}>
                <div>
                    <h4 className={"text-center"}>History</h4>
                </div>
                <div className={"history-modal"}>
                    { history }
                </div>
                <div className={"mt-3"}>
                    <div className={"d-grid gap-2"}>
                        <button
                            className={"btn btn-secondary"}
                            onClick={() => {
                                setVisible(false);
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryModal;