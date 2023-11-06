
const TestCaseItem = ({ id, value, pass, onChange, deleteAction }) => {

    const testCaseCondition = (val) => {
        if(val !== undefined)
            return val ? "form-control passed" : "form-control failed";

        return "form-control";
    };

    return (
        <div className="mb-3">
            <div
                className={"d-flex"}
            >
                <input
                    type={"text"}
                    className={testCaseCondition(pass)}
                    value={value}
                    onChange={(event) => {
                        onChange(id, event.target.value);
                    }}
                />
                <div className={"ms-3"}>
                    <button
                        className={"btn btn-outline-danger"}
                        onClick={() => {
                            deleteAction(id);
                        }}
                    >Delete</button>
                </div>
            </div>
        </div>
    );
};

export default TestCaseItem;