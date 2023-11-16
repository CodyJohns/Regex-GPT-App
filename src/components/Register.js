import {useState} from "react";
import {userLogin} from "../api/backend";
import AlertBox from "./AlertBox";

const Register = ({ closeModal }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [responseMsg, setResponseMsg] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confpassword, setConfPassword] = useState("");

    return (
        <div>
            <div className={"mb-3"}>
                <h4 className={"text-center"}>Register to continue</h4>
            </div>
            <div>
                <div className={"mb-1"}>
                    <label className={"form-label"}>Email</label>
                    <input
                        type={"email"}
                        className={"form-control"}
                        disabled={loading}
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                </div>
                <div className={"mb-1"}>
                    <label className={"form-label"}>Password</label>
                    <input
                        type={"password"}
                        className={"form-control"}
                        disabled={loading}
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                </div>
                <div className={"mb-3"}>
                    <label className={"form-label"}>Re-type Password</label>
                    <input
                        type={"password"}
                        className={"form-control"}
                        disabled={loading}
                        value={confpassword}
                        onChange={event => setConfPassword(event.target.value)}
                    />
                </div>
                <div className={"mb-3"}>
                    <div className={"d-grid gap-2"}>
                        <button
                            className={"btn btn-primary"}
                            onClick={() => {
                                console.log("Registering...");
                            }}
                            disabled={loading}
                        >
                            {
                                (!loading) ?  "Continue" :
                                    <div className="spinner-border spinner-border-sm text-light" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                            }
                        </button>
                    </div>
                </div>
                <div>
                    <AlertBox
                        visible={responseMsg !== ""}
                        text={responseMsg}
                        type={error ? "alert" : "notice"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Register;