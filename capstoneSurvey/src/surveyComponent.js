import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "./index.css";
import axios from "axios";
import { surveyJson } from "./survey_json";

function SurveyComponent() {
    const survey = new Model(surveyJson);
    survey.applyTheme(Theme)

    const dependentQuestionsConfig = {
        PytorchTensorflowKeras: { controllingQuestions: ['Python'], threshold: 2 },
        OpenCV: { controllingQuestions: ['Python'], threshold: 2},
        Numpy: { controllingQuestions: ['Python'], threshold: 2},
        Pandas: { controllingQuestions: ['Python'], threshold: 2},
        Tkinter: { controllingQuestions: ['Python'], threshold: 2},
        ObjectDetection: { controllingQuestions: ['ML'], threshold: 2},
        ImageClassification: { controllingQuestions: ['ML'], threshold: 2},
        Regression: { controllingQuestions: ['ML'], threshold: 2},
        LLM: { controllingQuestions: ['ML'], threshold: 2},
        ReinforcementLearning: { controllingQuestions: ['ML'], threshold: 2},
        GenerativeAI: { controllingQuestions: ['ML'], threshold: 2},
        Frontend: { controllingQuestions: ['WebDev'], threshold: 2},
        HTML_CSS: { controllingQuestions: ['WebDev', 'Frontend'], threshold: 2},
        FrontFrameworks: { controllingQuestions: ['WebDev', 'Frontend'], threshold: 2},
        Backend: { controllingQuestions: ['WebDev'], threshold: 2},
        BackFrameworks: { controllingQuestions: ['WebDev', 'Backend'], threshold: 2},
        APIs: { controllingQuestions: ['WebDev', 'Backend'], threshold: 2},
        Both: { controllingQuestions: ['WebDev'], threshold: 2},
        Javascript: { controllingQuestions: ['WebDev', 'Both'], threshold: 2},
        MERN: { controllingQuestions: ['WebDev', 'Both'], threshold: 2},
        SQL: { controllingQuestions: ['dataManagement'], threshold: 2},
        noSQL: { controllingQuestions: ['dataManagement'], threshold: 2},
        Unity: { controllingQuestions: ['GameEngines'], threshold: 2},
        Unreal: {controllingQuestions: ['GameEngines'], threshold: 2}
    };


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

    survey.onValueChanged.add((sender, options) => {
        Object.entries(dependentQuestionsConfig).forEach(([dependentQuestionsName, config]) => {
            const controllingQuestionsValues = config.controllingQuestions.map(questionName => 
                sender.getValue(questionName)
                );
            const isVisible = controllingQuestionsValues.every(value => value >= config.threshold);
            const dependentQuestion = sender.getQuestionByName(dependentQuestionsName);
            dependentQuestion.visible = isVisible;
            if (!isVisible) {
                dependentQuestion.clearValue();
            }
        });
        survey.render();
    });

    return (<Survey model={survey} onComplete={(survey) => onCompleteSurvey(survey)}/>);
}

export default SurveyComponent;

const Theme = {
    "themeName": "contrast",
    "colorPalette": "light",
    "isPanelless": true,
    "titlePositionX": "center",
    "cssVariables": {
      "--sjs-general-backcolor": "rgba(255, 255, 255, 1)",
      "--sjs-general-backcolor-dark": "rgba(255, 216, 77, 1)",
      "--sjs-general-backcolor-dim": "rgba(255, 255, 255, 1)",
      "--sjs-general-backcolor-dim-light": "rgba(255, 216, 77, 1)",
      "--sjs-general-backcolor-dim-dark": "rgba(255, 216, 77, 1)",
      "--sjs-general-forecolor": "rgba(0, 0, 0, 1)",
      "--sjs-general-forecolor-light": "rgba(0, 0, 0, 1)",
      "--sjs-general-dim-forecolor": "rgba(0, 0, 0, 1)",
      "--sjs-general-dim-forecolor-light": "rgba(0, 0, 0, 1)",
      "--sjs-primary-backcolor": "rgba(0, 0, 0, 1)",
      "--sjs-primary-backcolor-light": "rgba(255, 216, 77, 1)",
      "--sjs-primary-backcolor-dark": "rgba(83, 83, 83, 1)",
      "--sjs-primary-forecolor": "rgba(255, 255, 255, 1)",
      "--sjs-primary-forecolor-light": "rgba(255, 255, 255, 0.25)",
      "--sjs-base-unit": "8px",
      "--sjs-corner-radius": "4px",
      "--sjs-secondary-backcolor": "rgba(255, 152, 20, 1)",
      "--sjs-secondary-backcolor-light": "rgba(255, 152, 20, 0.1)",
      "--sjs-secondary-backcolor-semi-light": "rgba(255, 152, 20, 0.25)",
      "--sjs-secondary-forecolor": "rgba(255, 255, 255, 1)",
      "--sjs-secondary-forecolor-light": "rgba(255, 255, 255, 0.25)",
      "--sjs-shadow-small": "0px 0px 0px 2px rgba(0, 0, 0, 1)",
      "--sjs-shadow-small-reset": "0px 0px 0px 0px rgba(0, 0, 0, 1)",
      "--sjs-shadow-medium": "0px 0px 0px 2px rgba(0, 0, 0, 1)",
      "--sjs-shadow-large": "0px 6px 0px 0px rgba(0, 0, 0, 1)",
      "--sjs-shadow-inner": "0px 0px 0px 2px rgba(0, 0, 0, 1),0px -2px 0px 2px rgba(0, 0, 0, 1)",
      "--sjs-shadow-inner-reset": "0px 0px 0px 0px rgba(0, 0, 0, 1),0px 0px 0px 0px rgba(0, 0, 0, 1)",
      "--sjs-border-light": "rgba(0, 0, 0, 0.2)",
      "--sjs-border-default": "rgba(0, 0, 0, 1)",
      "--sjs-border-inside": "rgba(0, 0, 0, 0.16)",
      "--sjs-special-red": "rgba(229, 10, 62, 1)",
      "--sjs-special-red-light": "rgba(229, 10, 62, 0.1)",
      "--sjs-special-red-forecolor": "rgba(255, 255, 255, 1)",
      "--sjs-special-green": "rgba(25, 179, 148, 1)",
      "--sjs-special-green-light": "rgba(25, 179, 148, 0.1)",
      "--sjs-special-green-forecolor": "rgba(255, 255, 255, 1)",
      "--sjs-special-blue": "rgba(67, 127, 217, 1)",
      "--sjs-special-blue-light": "rgba(67, 127, 217, 0.1)",
      "--sjs-special-blue-forecolor": "rgba(255, 255, 255, 1)",
      "--sjs-special-yellow": "rgba(255, 152, 20, 1)",
      "--sjs-special-yellow-light": "rgba(255, 152, 20, 0.1)",
      "--sjs-special-yellow-forecolor": "rgba(255, 255, 255, 1)",
      "--sjs-article-font-xx-large-textDecoration": "none",
      "--sjs-article-font-xx-large-fontWeight": "700",
      "--sjs-article-font-xx-large-fontStyle": "normal",
      "--sjs-article-font-xx-large-fontStretch": "normal",
      "--sjs-article-font-xx-large-letterSpacing": "0",
      "--sjs-article-font-xx-large-lineHeight": "64px",
      "--sjs-article-font-xx-large-paragraphIndent": "100px",
      "--sjs-article-font-xx-large-textCase": "none",
      "--sjs-article-font-x-large-textDecoration": "none",
      "--sjs-article-font-x-large-fontWeight": "700",
      "--sjs-article-font-x-large-fontStyle": "normal",
      "--sjs-article-font-x-large-fontStretch": "normal",
      "--sjs-article-font-x-large-letterSpacing": "0",
      "--sjs-article-font-x-large-lineHeight": "56px",
      "--sjs-article-font-x-large-paragraphIndent": "0px",
      "--sjs-article-font-x-large-textCase": "none",
      "--sjs-article-font-large-textDecoration": "none",
      "--sjs-article-font-large-fontWeight": "700",
      "--sjs-article-font-large-fontStyle": "normal",
      "--sjs-article-font-large-fontStretch": "normal",
      "--sjs-article-font-large-letterSpacing": "0",
      "--sjs-article-font-large-lineHeight": "40px",
      "--sjs-article-font-large-paragraphIndent": "0px",
      "--sjs-article-font-large-textCase": "none",
      "--sjs-article-font-medium-textDecoration": "none",
      "--sjs-article-font-medium-fontWeight": "700",
      "--sjs-article-font-medium-fontStyle": "normal",
      "--sjs-article-font-medium-fontStretch": "normal",
      "--sjs-article-font-medium-letterSpacing": "0",
      "--sjs-article-font-medium-lineHeight": "32px",
      "--sjs-article-font-medium-paragraphIndent": "0px",
      "--sjs-article-font-medium-textCase": "none",
      "--sjs-article-font-default-textDecoration": "none",
      "--sjs-article-font-default-fontWeight": "400",
      "--sjs-article-font-default-fontStyle": "normal",
      "--sjs-article-font-default-fontStretch": "normal",
      "--sjs-article-font-default-letterSpacing": "0",
      "--sjs-article-font-default-lineHeight": "28px",
      "--sjs-article-font-default-paragraphIndent": "0px",
      "--sjs-article-font-default-textCase": "none"
    }
  };