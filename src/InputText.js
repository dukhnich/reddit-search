import React from "react";

const InputText = (props) => {

    const onChange = (text) => {
        props.onChange(text, props.name);
    };

    return (
        <div className={"input-group " + props.additionalClass}>
            <div className="input-group-prepend">
                <span className="input-group-text">{props.label}</span>
            </div>
            <input
                onChange={(e) => onChange(e.target.value)}
                type="text"
                value={props.value}
                className="form-control"
                placeholder={props.label}
                aria-label={props.label}
                aria-describedby="basic-addon1" />
        </div>
    )

}

export default InputText