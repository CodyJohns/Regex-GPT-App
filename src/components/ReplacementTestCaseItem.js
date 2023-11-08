
const ReplacementTestCaseItem = ({ id, value, result, onChange, deleteAction }) => {

    return (
        <div className="mb-3">
            <div
                className={"d-flex"}
            >
                <input
                    type={"text"}
                    value={value}
                    className={"form-control"}
                    onChange={(event) => {
                        onChange(id, event.target.value);
                    }}
                />
                <input
                    type={"text"}
                    value={result}
                    className={"form-control ms-3"}
                    readOnly={true}
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

export default ReplacementTestCaseItem;