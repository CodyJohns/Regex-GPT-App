import LoginOptions from "./LoginOptions";
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";

const Modal = () => {
    const [cookies, setCookie] = useCookies(['authtoken']);
    const [visible, setVisible] = useState(cookies.authtoken === null || cookies.authtoken === undefined);

    const modal_classes = visible ? "bkg-blur d-flex justify-content-center align-items-center" : "bkg-blur d-flex justify-content-center align-items-center d-none";

    useEffect(() => {
        console.log(cookies.authtoken);
        setVisible(cookies.authtoken === null || cookies.authtoken === undefined)
    }, [cookies.authtoken]);

    return (
        <div className={modal_classes}>
            <div className={"width-fixed content-panel secondary-color mb-0"}>
                <LoginOptions
                    closeModal={() => setVisible(false)}
                />
            </div>
        </div>
    );
};

export default Modal;