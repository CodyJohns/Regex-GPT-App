import {useState} from "react";

const RequestPrompt = ({ loading, error, onClick }) => {
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
                    onChange={(event) => setPrompt(event.target.value)}
                ></textarea>
            </div>
            <div>
                {
                    (error) ?
                        <p>An error occurred. Please try again later.</p> :
                        <div></div>
                }
            </div>
            <div>
                <button
                    className={"btn btn-primary"}
                    disabled={loading}
                    onClick={() => {
                        onClick(prompt);
                    }}
                >Submit</button>
            </div>
        </div>
    );
};

export default RequestPrompt;