import React from "react";
import {useHistory} from "react-router-dom"


const Reddit = (props) => {
    const {thumbnail, created, num_comments, author, score, title, permalink} = props.data;
    let history = useHistory();
    function handleClick() {
        history.push(`${permalink}`);
    }
    return (
        <div className={"card my-3"}>
            <div className="card-header">
                {thumbnail && thumbnail !== "self" &&
                <img
                    className={"img-thumbnail flex-shrink-0 mr-3"}
                    src ={thumbnail}
                />}
                {author}
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <button onClick={handleClick} className={"btn btn-primary"}>
                    Feed page
                </button>
            </div>
            <div className="card-footer">
                <small className={"text-muted mr-3"}>{"Comments: "+ num_comments}</small>
                <small className={"text-muted mr-3"}>{"Score: "+ score}</small>
                <small className={"text-muted mr-3"}>{new Date(created*1000).toUTCString()}</small>
            </div>
        </div>
    )
}

export default Reddit