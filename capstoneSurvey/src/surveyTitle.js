import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { surveyTitle } from "./surveyTitle_json";

function SurveyTitle() {
    const survey = new Model(surveyTitle);
    return(<Survey model = {survey}/>);
}

export default SurveyTitle;
