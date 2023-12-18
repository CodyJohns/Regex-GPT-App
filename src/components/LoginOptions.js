import {GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';
import AlertBox from "./AlertBox";
import {useState} from "react";
import {googleLogin, userLogin} from "../api/backend";
import {useCookies} from "react-cookie";
import LoadingDialog from "./LoadingDialog";

const LoginOptions = ({ closeModal }) => {
    const [cookies, setCookie] = useCookies(['authtoken']);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [responseMsg, setResponseMsg] = useState("");
    const [loginID, setLoginID] = useState("");
    const [password, setPassword] = useState("");

    const completeLoginProcess = (data) => {
        let expiration = new Date();
        expiration.setDate(expiration.getDate() + 7);
        setCookie('authtoken', data, { expires: expiration });
        closeModal();
    };

    return (
        <div>
            <div className={"mb-3"}>
                <h4 className={"text-center"}>Login to continue</h4>
            </div>
            <div className={"mb-3"}>
                <GoogleOAuthProvider clientId="1026110361137-1pjoqo75hg9a1eitiqsvffn73f731ojg.apps.googleusercontent.com">
                    <GoogleLogin
                        onSuccess={response => {
                            googleLogin(response.credential, setLoading, setError, setResponseMsg, (data) => completeLoginProcess(data));
                        }}
                        onError={() => {
                            setResponseMsg("Error logging in with Google");
                            setError(true);
                        }}
                        size={"large"}
                        width={"334px"}
                        theme={"filled_black"}
                    />
                </GoogleOAuthProvider>
            </div>
            <div className={"mb-3 mt-4"}>
                <div className={"h-line primary-color"}>
                    <div className={"secondary-color ps-2 pe-2"}>or</div>
                </div>
            </div>
            <div>
                <div className={"mb-1"}>
                    <label className={"form-label"}>Email</label>
                    <input
                        type={"email"}
                        className={"form-control"}
                        disabled={loading}
                        value={loginID}
                        onChange={event => setLoginID(event.target.value)}
                    />
                </div>
                <div className={"mb-3"}>
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
                    <div className={"d-grid gap-2"}>
                        <button
                            className={"btn btn-primary"}
                            onClick={() => {
                                userLogin(loginID, password, setLoading, setError, setResponseMsg, (data) => completeLoginProcess(data));
                            }}
                            disabled={loading}
                        >
                            {
                                (!loading) ?  "Continue" :
                                    <LoadingDialog
                                        centered={true}
                                    />
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

export default LoginOptions;