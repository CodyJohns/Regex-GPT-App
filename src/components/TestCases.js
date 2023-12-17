import {useState} from "react";
import TestCaseItem from "./TestCaseItem";
import ButtonSelector from "./ButtonSelector";
import ReplacementTestCaseItem from "./ReplacementTestCaseItem";
import {Form} from 'react-bootstrap'

const renderTestcases = (testcases, mode, updateItem, deleteItem) => {
    let arr = [];

    testcases.forEach(elem => {
        if(elem.mode === mode) {
            if (elem.mode === "contains") {
                arr.push(
                    <TestCaseItem
                        key={elem.id}
                        id={elem.id}
                        value={elem.value}
                        pass={elem.pass}
                        onChange={(id, newValue) => {
                            updateItem(id, newValue);
                        }}
                        deleteAction={(id) => {
                            deleteItem(id);
                        }}
                    />
                );
            } else if (elem.mode === "replacement") {
                arr.push(
                    <ReplacementTestCaseItem
                        key={elem.id}
                        id={elem.id}
                        value={elem.value}
                        result={elem.result}
                        onChange={(id, newValue) => {
                            updateItem(id, newValue);
                        }}
                        deleteAction={(id) => {
                            deleteItem(id);
                        }}
                    />
                );
            }
        }
    });

    return arr;
};

const updateFlags = (id, flags, setFlags) => {
    let flags_copy = flags.filter(x => true);

    flags_copy.forEach(flag => {
        if(flag.id === id) {
            flag.enabled = !flag.enabled;
        }
    });

    setFlags(flags_copy);
};

const renderFlags = (flags, setFlags) => {
    let out = [];

    flags.forEach(item => {
        out.push(
            <Form.Check
                key={item.id}
                inline
                label={item.name}
                checked={item.enabled}
                onChange={event => updateFlags(item.id, flags, setFlags)}
                name="regex-flags"
                type={"checkbox"}
            />
        );
    });

    return out;
};

const regexFlags = [
    {
        id: 0,
        name: "Global",
        flag: "g",
        enabled: true
    },
    {
        id: 1,
        name: "Case Insensitive",
        flag: "i",
        enabled: true
    },
    {
        id: 2,
        name: "Unicode",
        flag: "u",
        enabled: true
    }
];

const TestCases = ({ value }) => {
    const [testcases, setTestcases] = useState([]);
    const [replacementValue, setReplacementValue] = useState("");
    const [mode, setMode] = useState("contains");
    const [flags, setFlags] = useState(regexFlags);

    const addItem = () => {
        let new_tcases = testcases.concat([{
            id: testcases.length,
            value: "",
            mode: mode
        }]);
        new_tcases.forEach((x, i) => x.id = i);
        setTestcases(new_tcases);
    };

    const deleteItem = (id) => {
        let new_arr = testcases.filter(x => x.id !== id);
        new_arr.forEach((x, i) => x.id = i);
        setTestcases(new_arr);
    };

    const updateItem = (id, newValue) => {
        let arr_copy = testcases.filter(x => true);

        for(let i = 0; i < arr_copy.length; i++)
            if(arr_copy[i].id === id)
                arr_copy[i].value = newValue;

        setTestcases(arr_copy);
    };

    const getTestcaseCount = () => {
        let count = 0;
        testcases.forEach(elem => count += (elem.mode === mode) ? 1 : 0);
        return count;
    };

    const getFlagsEnabled = () => {
        let out = "";

        regexFlags.forEach(flag => {
            if(flag.enabled)
                out += flag.flag;
        });

        return out;
    };

    const runTestCases = () => {
        let exp = new RegExp(value, getFlagsEnabled());

        let testcases_copy = testcases.filter(x => true);

        for(let i = 0; i < testcases_copy.length; i++) {
            if (testcases_copy[i].mode === "contains" && testcases_copy[i].mode === mode)
                testcases_copy[i].pass = exp.test(testcases_copy[i].value);
            else if (testcases_copy[i].mode === "replacement" && testcases_copy[i].mode === mode)
                testcases_copy[i].result = testcases_copy[i].value.replace(exp, replacementValue);
        }

        setTestcases(testcases_copy);
    };

    return (
        <div className={"content-panel primary-color"}>
            <div>
                <ButtonSelector
                    mode={mode}
                    setMode={(val) => {
                        if(val === "contains") {
                            flags[0].enabled = false;
                            setFlags(flags);
                        } else {
                            flags[0].enabled = true;
                            setFlags(flags);
                        }

                        setMode(val);
                    }}
                />
            </div>
            <div>
                <div className={"d-flex justify-content-evenly"}>
                    { renderFlags(flags, setFlags) }
                </div>
                <div>
                    {
                        (mode === "replacement") ?
                            <div className={"mb-3"}>
                                <label htmlFor={"replacement-value"} className={"form-label"}>Replacement Value</label>
                                <div id={"replacement-value"}>
                                    <input
                                        type={"text"}
                                        className={"form-control"}
                                        value={replacementValue}
                                        onChange={event => setReplacementValue(event.target.value)}
                                    />
                                </div>
                            </div> : <div></div>
                    }
                </div>
                <label htmlFor={"tcases"} className={"form-label"}>Test Cases</label>
                <div id={"tcases"}>
                    {
                        (getTestcaseCount() > 0) ?
                            renderTestcases(testcases, mode, updateItem, deleteItem) :
                            <div>
                                <p>No test cases. Add one!</p>
                            </div>
                    }
                </div>
                <div>
                    <div className={"d-flex justify-content-between"}>
                        <div>
                            <button
                                className={"btn btn-primary"}
                                onClick={() => {
                                    addItem();
                                }}
                            >Add</button>
                        </div>
                        <div>
                            <button
                                className={"btn btn-secondary"}
                                onClick={() => {
                                    runTestCases();
                                }}
                            >Run Test Cases</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestCases;