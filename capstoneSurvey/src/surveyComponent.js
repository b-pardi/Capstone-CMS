import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "./index.css";
import axios from "axios";

import { surveyJson } from "./survey_json";

function SurveyComponent() {
    const survey = new Model(surveyJson);

    const onCompleteSurvey = (survey) => {
        const surveyData = survey.data;
        console.log(surveyData);
        axios.post("http://localhost:5001/api/saveSurvey", { surveyData })
        .then(response=> {
            console.log("survey sent success", response.data)
        })
        .catch(error => {
            console.error("Error handling survey: ", error);
        });
    };

    return (<Survey model={survey} onComplete={(survey) => onCompleteSurvey(survey)}/>);
}

export default SurveyComponent;
