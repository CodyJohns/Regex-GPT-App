import AlertBox from "./AlertBox";
import LoadingDialog from "./LoadingDialog";

const AccountStatus = ({ accountData, reload }) => {

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
                            className={"btn btn-outline-warning"}>
                            Manage Account
                        </button>
                    </div>
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
                            className={"btn btn-outline-info"}>
                            Manage Account
                        </button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className={"text-center"}>
                    <LoadingDialog />
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