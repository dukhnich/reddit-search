import React from "react";
import {useRouteMatch} from "react-router-dom";
import Spinner from "./Spinner";
import FeedItem from "./FeedItem";


const fetchFeed = async (url) => {
    const response = await fetch(`https://www.reddit.com${url}.json`);
    const json = await response.json();
    return json;
};

const CommentsList = (props) => {
    return Array.isArray(props.comments) ?
        props.comments.map(feed =>
            <FeedItem key={feed.data.id} data={feed.data}/>)
: null
}

const Feed =  () => {
    const [data, setData] = React.useState([]);
    let { url } = useRouteMatch();
    const getFeed = async ()=> {
        const feed = await fetchFeed(url);
        console.log(feed);
        setData (feed)
    }
    React.useEffect(() => {
        getFeed()
    }, [])

    // console.log(data)
    return <>
        <h2>{"User with id "}</h2>
        {(data.length && Array.isArray(data)) ?
            data.map((item, index) =>
                <div key = {index}>
                    <CommentsList comments = {item.data.children}/>
                </div>) :
            <Spinner/>}
    </>
}

export default Feed