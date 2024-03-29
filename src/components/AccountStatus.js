import AlertBox from "./AlertBox";
import LoadingDialog from "./LoadingDialog";
import ManageAccountModal from "./ManageAccountModal";
import {useState} from "react";

const AccountStatus = ({ accountData, reload }) => {

    const [modalVisible, setVisible] = useState(false);

    const renderState = () => {

        if(accountData.error) {
            return (
                <div className={"text-center"}>
                    <p>An error occurred.</p>
                    <button
                        className={"btn btn-outline-warning"}
                        onClick={() => {
                            reload();
                        }}
                    >
                        Retry
                    </button>
                </div>
            );
        } else if(accountData && accountData.tier === "free") {
            return (
                <div className={"d-flex justify-content-between"}>
                    <div className={"free-tier-message"}>
                        Welcome, <u>{ accountData.email }</u><br />
                        <strong>{ accountData.daily_uses } of { accountData.max_uses } used today</strong>
                    </div>
                    <div>
                        <button
                            className={"btn btn-outline-warning"}
                            onClick={() => {
                                setVisible(true);
                            }}
                        >
                            Manage Account
                        </button>
                    </div>
                    <ManageAccountModal
                        visible={modalVisible}
                        setVisible={setVisible}
                        data={accountData} 
                    />
                </div>
            );
        } else if(accountData && accountData.tier === "paid") {
            return (
                <div className={"d-flex justify-content-between"}>
                    <div className={"paid-tier-message pt-2"}>
                        Welcome, <strong>{ accountData.email }</strong>
                    </div>
                    <div>
                        <button
                            className={"btn btn-outline-info"}
                            onClick={() => {
                                setVisible(true);
                            }}
                        >
                            Manage Account
                        </button>
                    </div>
                    <ManageAccountModal
                        visible={modalVisible}
                        setVisible={setVisible}
                        data={accountData} 
                    />
                </div>
            );
        } else {
            return (
                <div>
                    <LoadingDialog
                        centered={true}
                    />
                </div>
            );
        }
    };

    return (
        <div>
            <AlertBox
                visible={true}
                text={renderState()}
                type={"notice"}
            />
        </div>
    );
};

export default AccountStatus;