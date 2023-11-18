import {useEffect, useState} from "react";

const PasswordStrengthMeter = ({ password, isValid }) => {
    const [weight, setWeight] = useState(0);

    useEffect(() => {
        checkStrength();
    }, [password]);

    const checks = [
        {
            regex: /\d/,
            weight: 1
        },
        {
            regex: /[A-Z]/,
            weight: 1
        },
        {
            regex: /[@!_\-#]/,
            weight: 1
        },
        {
            regex: /.{8,}/,
            weight: 2
        }
    ];

    const checkStrength = () => {
        let totalWeight = 0;

        checks.forEach(check => {
            totalWeight += check.regex.test(password) ? check.weight : 0;
        })

        setWeight(totalWeight);
        console.log(totalWeight);
        isValid(totalWeight >= 5);
    };

    const getClasses = () => {
        if(weight < 3)
            return "Weak";
        else if(weight >= 3 && weight <= 4)
            return "Mediocre";
        else
            return "Strong";
    };

    return (
        <div>
            {
                (password.length > 0) ?
                    <div className={"password-meter-container"}>
                        <div className={"d-flex justify-content-between"}>
                            <span>Strength:</span>
                            <span><strong>{ getClasses() }</strong></span>
                        </div>
                        <div className={"password-meter"}>
                            <div className={getClasses()} style={{
                                width: ((weight / 5) * 100) + "%"
                            }}></div>
                        </div>
                    </div> :
                    <div></div>
            }
        </div>
    );
};

export default PasswordStrengthMeter;