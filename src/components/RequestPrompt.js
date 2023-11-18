import {useState} from "react";

const RequestPrompt = ({ loading, onClick }) => {
    const [prompt, setPrompt] = useState("");

    return (
        <div className={"content-panel primary-color"}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Regex Request</label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={prompt}
                    disabled={loading}
                    onChange={(event) => setPrompt(event.target.value)}
                ></textarea>
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