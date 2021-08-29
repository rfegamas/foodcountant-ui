import React from "react"

import { Button } from "@material-ui/core"

function RenderSubmitButton(props) {
    const setIsSubmitted = props.setIsSubmitted

    const handleSubmit = (event) => {
        setIsSubmitted(true)
    }

    return (
        <div>
            <Button style={{ marginTop: "50px" }}onClick={ (event) => handleSubmit(event) }>
                {"Submit Diary"}
            </Button>
        </div>
    )
}

function Submit(props) {
    return (
        <div>
            <RenderSubmitButton setIsSubmitted={props.setIsSubmitted}/>
        </div>
    )
}

export default Submit