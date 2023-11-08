
const ButtonSelector = ({ mode, setMode }) => {
    const containsButtonEnabled = (mode) => (mode === "contains" ? "btn btn-primary" : "btn btn-secondary");
    const replacementButtonEnabled = (mode) => (mode === "replacement" ? "btn btn-primary" : "btn btn-secondary");

    return (
        <div className={"content-panel secondary-color p-2"}>
            <div className={"d-flex justify-content-center"}>
                <div className={"pe-2"}>
                    <button
                        className={containsButtonEnabled(mode)}
                        onClick={() => setMode("contains")}
                    >Contains</button>
                </div>
                <div className={"ps-2"}>
                    <button
                        className={replacementButtonEnabled(mode)}
                        onClick={() => setMode("replacement")}
                    >Replacement</button>
                </div>
            </div>
        </div>
    );
};

export default ButtonSelector;