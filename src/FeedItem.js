import React from "react";

const FeedItem = (props) => {
    const {thumbnail, created, num_comments, author, score, title, body} = props.data;
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
                {title && <h5 className="card-title">{title}</h5>}
                {body && <p>{body}</p>}
            </div>
            <div className="card-footer">
                {num_comments && <small className={"text-muted mr-3"}>{"Comments: " + num_comments}</small>}
                <small className={"text-muted mr-3"}>{"Score: "+ score}</small>
                <small className={"text-muted mr-3"}>{new Date(created*1000).toUTCString()}</small>
            </div>

        </div>
    )
}

export default FeedItem