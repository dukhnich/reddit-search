import React, {useEffect, useState} from "react";
import InputText from  "./InputText";
import InputNumber from "./InputNumber";


const SearchForm = (props) => {
    const [data, setData] = useState(props.initialValue);

    const onChange = (value, name) => {
         setData(prev => {
            const current = {...prev};
            current[name] = value;
            return current
        })
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await props.submitHandler(data);
    };

    return <form onSubmit={onSubmit} className="form-inline">
        <InputText
            additionalClass = "m-3"
            value={data.category}
            name="category"
            label = "Category"
            onChange={onChange}
        />
        <InputNumber
            additionalClass = "m-3"
            value={data.limit}
            min = {1}
            max={100}
            step = {1}
            name="limit"
            label = "Limit"
            onChange={onChange}
        />
        <button type={"submit"}
                className={"btn flex-shrink-0 ml-3 btn-primary"}>
            Search
        </button>
    </form>
};

export default SearchForm