import {useCookies} from "react-cookie";

const ManageAccountModal = ({ visible, setVisible, data }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['authtoken']);
    const modal_classes = visible ? "bkg-blur d-flex justify-content-center align-items-center" : "bkg-blur d-flex justify-content-center align-items-center d-none";

    return (
        <div className={modal_classes}>
            <div className={"width-fixed content-panel secondary-color mb-0"}>
                <div>
                    <h4 className={"text-center"}>Manage Account</h4>
                </div>
                <div className={"account-modal"}>
                    <div className={"content-panel primary-color p-2"}>
                        <p className="pb-0 mb-0">
                            <span>Account Status: <strong>{ data.tier }</strong></span><br />
                        </p>
                    </div>
                    <div className={"content-panel primary-color p-2"}>
                        <div className={"d-grid gap-2"}>
                            <button 
                                className="btn btn-outline-warning"
                                onClick={() => {
                                    setVisible(false);
                                    removeCookie('authtoken');
                                }}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
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

export default ManageAccountModal;