import React from "react";

const Pagination = (props) => {
    const category = props.data.children[0].data.subreddit;
    const limit = props.data.dist;
    const before = props.data.before;
    const after = props.data.after;
    console.log(before, after)


    const changePage = (event) => {
        event.preventDefault();
        props.paginationHandler(event.target.href, event.target.innerText)
    }


    return <nav aria-label="Page navigation" className={"align-self-center"}>
        <ul className="pagination mb-0">
            <li className={"page-item " +( before ? "" : "disabled")}>
                <a
                    onClick={changePage}
                    className="page-link"
                    href={`https://www.reddit.com/r/${category}.json?limit=${limit}&before=${before}&count=${props.count}`}
                    aria-label="Previous">
                        Previous
                </a>
            </li>
            <li className={"page-item " +( after ? "" : "disabled")}>
                <a
                    onClick={changePage}
                    className="page-link"
                    href={`https://www.reddit.com//r/${category}.json?limit=${limit}&after=${after}&count=${props.count}`}
                    aria-label="Next">
                        Next
                </a>
            </li>
        </ul>
    </nav>
}

export default Pagination