import React from "react";
import { RouteComponentProps, useHistory, withRouter } from "react-router-dom";

const LanguageSelectPage = (props: RouteComponentProps) => {

    const history = useHistory()

    const handleClickChinese = () => {
        return history.push("/Chinese")
    }

    return (
        <div className="language-select-page">
            <h1>
                Please select your language.
            </h1>
            <div>
                <button onClick={handleClickChinese}>Chinese</button>
            </div>
        </div>
    )
}

export default withRouter(LanguageSelectPage);