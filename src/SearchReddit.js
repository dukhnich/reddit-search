import React, {useEffect, useState} from "react";
import SearchForm from "./SearchForm";
import ResultsList from "./ResultsList";
import Spinner from "./Spinner";
import Pagination from "./Pagination";

const fetchReddit = async (category, limit) => {
    const request = `https://www.reddit.com/r/${category}.json?limit=${limit}&dist=${limit}`;
    const response = await fetch(request);
   return await response.json();
};

const TextOrSpinner = ({text}) => {
    return text ? <h4>{text}</h4> : <Spinner/>
}

const initialData = {
    category: "react",
    limit: 10,
};

const SearchReddit = () => {

    const [response, setResponse] = React.useState({});
    const [error, setError] = useState(null);
    const [count, setCount] = useState(1)
    const search  = async ({category, limit}) => {
        try {
            await setError(null);
            await setResponse({});
            await setCount(0)
            if (!category) {
                throw ({message: "Type some category"})
            }

            const resp = await fetchReddit(category, limit);
            setResponse(resp);
        }
        catch (e) {
            setError (e)
        }
    }

    const loadResults = async ({category, limit})=> {
        const resp = await fetchReddit(category, limit);
        if (resp.data) {
            setResponse(resp);

        } else (
            setError(resp)
        )
    }

    const goToAnotherPage = async (request, text) => {
        try {
            const resp = await fetch(request);
            const data = await resp.json();
            const {dist} = response.data;
            await setResponse(data);
            if (text === "Next") {
                setCount(count => +count + dist)
            }
            if (text === "Previous") {
                setCount(count => +count - dist)
            }
        }
        catch (e) {
            setError (e)
        }
    }

    React.useEffect(  () => {
        loadResults(initialData)

    }, []);

    return <>
        <h1>Search reddit feeds</h1>
        <div className="d-flex justify-content-between mr-2">
            <SearchForm
                submitHandler ={search}
                initialValue = {initialData}
            />
            {response.data && <Pagination paginationHandler={goToAnotherPage} data={response.data} count={count}/>}
        </div>
        {Object.keys(response).length > 0 ?
            <ResultsList
                reddits = {response.data.children}
            />
            :
            <TextOrSpinner text = {error ? error.message : ""}/>
        }

    </>
}

export default SearchReddit