import { useEffect, useState } from "react";
import {FloatingLabel, Form} from "react-bootstrap";

const RegexResult = ({ result, setValue }) => {
    const [wasCopied, setCopied] = useState(false);

    useEffect(() => {
        setCopied(false);
    }, [result]);

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
                    <div class="d-flex">
                        <div class="pe-3">
                            <button
                                className={"btn btn-primary"}
                                disabled={result === ""}
                                onClick={() => {
                                    if (!navigator.clipboard)
                                        return;

                                    navigator.clipboard.writeText(result).then(function() {
                                        setCopied(true);
                                    }, function(err) {
                                        console.error('Could not copy text: ', err);
                                    });
                                }}
                            >
                                {
                                    (wasCopied) ? "Copied!" : "Copy"
                                }
                            </button>
                        </div>
                        <div>
                            <button
                                className={"btn btn-secondary"}
                                disabled={result === ""}
                                onClick={() => setValue("")}
                            >
                                Clear
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegexResult;