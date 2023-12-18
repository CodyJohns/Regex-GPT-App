import {useEffect, useState} from "react";

const LoadingDialog = () => {

    const [provisioning, setProvisioning] = useState(false);

    useEffect(() => {

        let timeout = setTimeout(() => {
            setProvisioning(true);
        }, 5000);

        return () => {
            clearTimeout(timeout);
        }
    }, []);

    return (
        <div className={"d-flex"}>
            <div className="spinner-border spinner-border-sm text-light mt-1 mb-1" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            {
                (provisioning) ?
                    <div className={"ps-2"}>Please wait...</div> : <div></div>
            }
        </div>
    );
};

export default LoadingDialog;