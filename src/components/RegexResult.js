
const RegexResult = ({ result, setValue }) => {
    return (
        <div>
            <div className={"content-panel primary-color"}>
                <div>
                    <label htmlFor={"result"} className={"form-label"}>Result</label>
                    <input
                        type={"text"}
                        className={"form-control"}
                        value={result}
                        onChange={(event) => setValue(event.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default RegexResult;