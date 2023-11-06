
const RegexResult = ({ result }) => {
    return (
        <div>
            {
                (result === "") ? <div></div> :
                <div className={"content-panel primary-color"}>
                    <div>
                        <label for={"result"} className={"form-label"}>Result</label>
                        <input type={"text"} className={"form-control"} value={result} disabled={true} />
                    </div>
                </div>
            }
        </div>
    );
};

export default RegexResult;