import AlertBox from "./AlertBox";

const AccountStatus = ({ accountData }) => {

    const renderState = () => {

        if(accountData.error) {
            return (
                <div className={"text-center"}>
                    <p>An error occurred.</p>
                </div>
            );
        } else if(accountData && accountData.tier === "free") {
            return (
                <div className={"d-flex justify-content-between"}>
                    <div className={"free-tier-message"}>
                        Upgrade your account to avoid service limits.<br />
                        <strong>{ accountData.daily_uses } of { accountData.max_uses } used today</strong>
                    </div>
                    <div>
                        <button
                            data-bs-container="body"
                            data-bs-toggle="popover"
                            data-bs-placement="top"
                            data-bs-content="Top popover"
                            className={"btn btn-outline-warning"}>
                            Upgrade Account
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
                            data-bs-container="body"
                            data-bs-toggle="popover"
                            data-bs-placement="top"
                            data-bs-content="Top popover"
                            className={"btn btn-outline-info"}>
                            Manage Account
                        </button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className={"text-center"}>
                    <div className="spinner-border spinner-border-sm text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
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