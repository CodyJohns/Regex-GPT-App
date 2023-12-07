import {useState} from "react";
import {FloatingLabel, Form} from "react-bootstrap";

const RequestPrompt = ({ loading, onClick }) => {
    const [prompt, setPrompt] = useState("");

    return (
        <div className={"content-panel primary-color"}>
            <div className="mb-3">
                <FloatingLabel controlId="floatingTextarea2" label="Regex Request">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                        value={prompt}
                        disabled={loading}
                        onChange={(event) => setPrompt(event.target.value)}
                    />
                </FloatingLabel>
            </div>
            <div>
                <button
                    className={"btn btn-primary"}
                    disabled={loading || prompt === ""}
                    onClick={() => {
                        onClick(prompt);
                    }}
                >
                    {
                        (!loading) ?  "Submit" :
                            <div className="spinner-border spinner-border-sm text-light" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                    }
                </button>
            </div>
        </div>
    );
};

export default RequestPrompt;