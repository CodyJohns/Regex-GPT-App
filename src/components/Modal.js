import LoginOptions from "./LoginOptions";
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import Register from "./Register";

const Modal = () => {
    const [cookies, setCookie] = useCookies(['authtoken']);
    const [visible, setVisible] = useState(cookies.authtoken === null || cookies.authtoken === undefined);
    const [loginFormEnabled, enableLoginForm] = useState(true);


    const modal_classes = visible ? "bkg-blur d-flex justify-content-center align-items-center" : "bkg-blur d-flex justify-content-center align-items-center d-none";

    useEffect(() => {
        console.log(cookies.authtoken);
        setVisible(cookies.authtoken === null || cookies.authtoken === undefined)
    }, [cookies.authtoken]);

    return (
        <div className={modal_classes}>
            <div className={"width-fixed content-panel secondary-color mb-0"}>
                {
                    (loginFormEnabled) ?
                        <div>
                            <LoginOptions
                                closeModal={() => setVisible(false)}
                            />
                            <div className={"pt-3"}>
                                <p className={"text-center"}><a href={"#"} onClick={() => enableLoginForm(false)}>Register</a> for an account.</p>
                            </div>
                        </div> :
                        <div>
                            <Register
                                closeModal={() => setVisible(false)}
                            />
                            <div className={"pt-3"}>
                                <p className={"text-center"}><a href={"#"} onClick={() => enableLoginForm(true)}>Log in</a> to your existing account.</p>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default Modal;