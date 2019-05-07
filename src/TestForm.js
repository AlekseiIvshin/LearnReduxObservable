import * as React from "react";
import { useState } from "react";
import { connect } from 'react-redux';
import { actions } from "./actions";

const TestForm = (props) => {

    const [command, changeCommand] = useState("");

    const handleSubmit = (event) => {
        props.initCommand(command);
    }

    const handleChange = (event) => {
        changeCommand(event.target.value)
    }

    return (
        <div>
            <label>
                Name:
                <input type="text" name="name" value={command} onChange={handleChange}/>
            </label>
            <button onClick={handleSubmit}>Click me</button>
        </div>
    );
}



export default connect(null, actions)(TestForm);