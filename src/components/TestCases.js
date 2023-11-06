import {useState} from "react";
import TestCaseItem from "./TestCaseItem";

const renderTestcases = (testcases, updateItem, deleteItem) => {
    let arr = [];

    testcases.forEach(elem => {
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
    });

    return arr;
};

const TestCases = ({ value }) => {
    const [testcases, setTestcases] = useState([{ id: 0, value: "test1234" }]);

    const deleteitem = (id) => {
        setTestcases(testcases.filter(x => x.id !== id));
    };

    const updateItem = (id, newValue) => {
        let arr_copy = testcases.filter(x => true);

        for(let i = 0; i < arr_copy.length; i++)
            if(arr_copy[i].id === id)
                arr_copy[i].value = newValue;

        setTestcases(arr_copy);
    };

    const runTestCases = () => {
        let exp = new RegExp(value);

        let testcases_copy = testcases.filter(x => true);

        for(let i = 0; i < testcases_copy.length; i++)
            testcases_copy[i].pass = exp.test(testcases_copy[i].value);

        console.log(testcases_copy);
        setTestcases(testcases_copy);
    };

    return (
        <div className={"content-panel primary-color"}>
            <label for={"tcases"} className={"form-label"}>Test Cases</label>
            <div id={"tcases"}>
                {
                    (testcases.length > 0) ?
                        renderTestcases(testcases, updateItem, deleteitem) :
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
                                let new_tcases = testcases.concat([{
                                    id: testcases.length,
                                    value: ""
                                }]);
                                setTestcases(new_tcases);
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
    );
};

export default TestCases;