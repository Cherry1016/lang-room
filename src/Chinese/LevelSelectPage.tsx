import React from "react";
import { RouteComponentProps, useHistory, withRouter } from "react-router-dom";

const LevelSelectPage = (props: RouteComponentProps) => {

    const history = useHistory()

    const handleClickLevel1 = () => {
        return history.push(`${props.location.pathname}/1`)
    }

    return (
        <div>
            <h1>Please select level.</h1>
            <div>
                <button onClick={handleClickLevel1}>Level 1</button>
            </div>
            <br/>
            <div>
                <button>Back</button>
            </div>
        </div>
    )
}

export default withRouter(LevelSelectPage);