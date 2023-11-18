import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "./index.css";
import { surveyJson } from "./survey_json";

function SurveyComponent() {
    const survey = new Model(surveyJson);
    return (<Survey model={survey} />);
}

export default SurveyComponent;