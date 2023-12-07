import {FloatingLabel, Form} from "react-bootstrap";

const RegexResult = ({ result, setValue }) => {
    return (
        <div>
            <div className={"content-panel primary-color"}>
                <div>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Result"
                        className={"mb-3"}
                    >
                        <Form.Control
                            type="text"
                            placeholder="Result"
                            value={result}
                            onChange={(event) => {console.log(event.target.value);setValue(event.target.value)}}
                        />
                    </FloatingLabel>
                    <button
                        className={"btn btn-secondary"}
                        disabled={result === ""}
                        value={result}
                        onClick={() => setValue("")}
                    >
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RegexResult;