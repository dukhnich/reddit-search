import React from "react";
import Reddit from "./Reddit";

const ResultsList = (props) => {


    return <div className="card-columns">
        {props.reddits.map((reddit) => {
                const {data} = reddit
                return <Reddit
                    key={data.id}
                    data={data}
                />
            }
        )}
    </div>


}

export default ResultsList