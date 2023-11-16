
const AlertBox = ({ text = "Test message", type = "alert", visible = false }) => {

    const alert_classes = () => (type === "notice" ? "notice message" : "alert message");

    return (
        <div>
            {
                (visible) ?
                    <div className={alert_classes()}>
                        { text }
                    </div> : <div></div>
            }
        </div>
    );
};

export default AlertBox;