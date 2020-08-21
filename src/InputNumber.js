import React from "react";

const InputRange = (props) => {
    // const [value, setValue] = useState(props.defaultValue);

    const onChange = (text) => {
        // if (text !== props.defaultValue)        {
            props.onChange(text, props.name);
        // }
        // setValue(() => text);
    };

    return (
        <div className={"input-group " + props.additionalClass}>
            <div className="input-group-prepend">
                <span className="input-group-text">{props.label}</span>
            </div>
            <input
                onChange={(e) => onChange(e.target.value)}
                value={props.value}
                type="number"
                className="form-control"
                placeholder={props.label}
                min = {props.min}
                max = {props.max}
                step={props.step}
            />
        </div>
    )
};

export default InputRange