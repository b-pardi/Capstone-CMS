export const surveyJson = {
  //"title": "CSE 120 Groupmaker",
  //"titlePositionX": "center",
  "pages": [
    {"elements": [
      {
          "type": "panel",
          "elements": [
            {
              "type": "html",
              "name": "income_intro",
              "html": "<article class='intro'><h4 class='intro__heading intro__heading--income title'>CSE 120 Groupmaker</h4><div class='intro__body wysiwyg'><p>CSE capstone projects are always group based, therefore we will need information from you in order to make the best groups.</p><p>After inputting personal information, you will be asked to rank your projects in terms of preference and rate your particular computer science skillset. Ratings mean:</p><ul><li>0: No experience</li><li><p>1: Heard about it before</p></li><li><p>2: Used it once without understanding or used something similar</p></li><li><p>3: adjslkdasl</p></li><li><p>4: sdkjaslf</p></li><li><p>5: Excellant understanding</p></li></ul></div></article>"
            }
          ],
          "name": "panel1"
      }
  ],
  "name": "page0"
},
    {
      "elements": [
        {
          "type": "text",
          "name": "Name",
          "title": "Name",
          "isRequired": "True"
        },
        {
          "type": "text",
          "name": "Email",
          "title": "Email",
          "isRequired": "True"
        },
        {
          "type": "radiogroup",
          "name": "LabSection",
          "title": "Lab Section",
          "choices": [
            "001d",
            "002D",
            "OO3D"
          ],
          "colCount": "2",
          "isRequired": "True"
        }
      ]
    },
    {
      "elements": [
        {
          
          "type": "rating",
          "name": "Python",
          "title": "Python",
          "autoGenerate": false,
          "rateCount": 5,
          "rateValues": [1, 2, 3, 4, 5]

        },
        
        {
          "type": "rating",
          "name": "PytorchTensorflowKeras",
          "visibleIf": "{Python} >= 2",
          "title": "Pytorch/Tensorflow/Keras",
          //"description": "Python",
          "autoGenerate": false,
          "rateCount": 5,
          "rateValues": [1, 2, 3, 4, 5],
          "indent": 3
        },
        {
          "type": "rating",
          "name": "OpenCV",
          "visibleIf": "{Python} >= 2",
          "title": "OpenCV/SimpleCV",
          //"description": "Python",
          "autoGenerate": false,
          "rateCount": 5,
          "rateValues": [1, 2, 3, 4, 5],
          "indent": 3
        },
        {
          "type": "rating",
          "name": "Numpy",
          "visibleIf": "{Python} >= 2",
          "title": "NumPy",
          //"description": "Python",
          "autoGenerate": false,
          "rateCount": 5,
          "rateValues": [1, 2, 3, 4, 5],
          "indent": 3
        },
        {
          "type": "rating",
          "name": "Pandas",
          "visibleIf": "{Python} >= 2",
          "title": "Pandas",
          //"description": "Python",
          "autoGenerate": false,
          "rateCount": 5,
          "rateValues": [1, 2, 3, 4, 5],
          "indent": 3
        },
        {
          "type": "rating",
          "name": "Tkinter",
          "visibleIf": "{Python} >= 2",
          "title": "Tkinter",
          //"description": "Python",
          "autoGenerate": false,
          "rateCount": 5,
          "rateValues": [1, 2, 3, 4, 5],
          "indent": 3
        },
        {
          "type": "rating",
          "name": "CandCpp",
          "title": "C/C++",
          "description": "Object-Oriented Programming",
          "autoGenerate": false,
          "rateCount": 5,
          "rateValues": [1, 2, 3, 4, 5],
          //"indent": 0
        },
        {
          "type": "rating",
          "name": "Csharp",
          "title": "C#",
          "description": "Object-Oriented Programming",
          "autoGenerate": false,
          "rateCount": 5,
          "rateValues": [1, 2, 3, 4, 5],
          //"indent": 0
        },
        {
          "type": "rating",
          "name": "Java",
          "title": "Java",
          "description": "Object-Oriented Programming",
          "autoGenerate": false,
          "rateCount": 5,
          "rateValues": [1, 2, 3, 4, 5],
          "indent": 0
        }
      ]
    }, {
      "elements": [
        {
          "type": "rating",
          "name": "ML",
          "title": "Machine Learning",
          "autoGenerate": false,
          "rateCount": 5,
          "rateValues": [ 1, 2, 3, 4, 5, ]
          },
          {
          "type": "rating",
          "name": "ObjectDetection",
          "visibleIf": "{ML} >=2",
          "title": "Object Detection",
          //"description": "Machine Learning",
          "autoGenerate": false,
          "rateCount": 5,
          "rateValues": [ 1, 2, 3, 4, 5, ],
          "indent": 3
          },
          {
          "type": "rating",
          "name": "ImageClassification",
          "visibleIf": "{ML} >=2",
          "title": "Classification/Image Classification",
          //"description": "Machine Learning",
          "autoGenerate": false,
          "rateCount": 5,
          "rateValues": [ 1, 2, 3, 4, 5, ],
          "indent": 3
          },
          {
          "type": "rating",
          "name": "Regression",
          "visibleIf": "{ML} >=2",
          "title": "Regression Analysis",
          //"description": "Machine Learning",
          "autoGenerate": false,
          "rateCount": 5,
          "rateValues": [ 1, 2, 3, 4, 5, ],
          "indent": 3
          },
          {
          "type": "rating",
          "name": "LLM",
          "visibleIf": "{ML} >=2",
          "title": "Large Language Models",
          //"description": "ML/AI",
          "autoGenerate": false,
          "rateCount": 5,
          "rateValues": [ 1, 2, 3, 4, 5, ],
          "indent": 3
          },
          {
          "type": "rating",
          "name": "ReinforcementLearning",
          "visibleIf": "{ML} >=2",
          "title": "Reinforcement Learning",
          //"description": "ML/AI",
          "autoGenerate": false,
          "rateCount": 5,
          "rateValues": [ 1, 2, 3, 4, 5, ],
          "indent": 3
          },
          {
          "type": "rating",
          "name": "GenerativeAI",
          "visibleIf": "{ML} >= 2",
          "title": "Generative AI",
          //"description": "ML/AI",
          "autogenerate": false,
          "rateCount": 5,
          "rateValues": [ 1, 2, 3, 4, 5 ],
          "indent": 3
  
          } 
        
      ]
    }, {
      "elements": [
        {
          "type": "rating",
          "name": "AppDev",
          "title": "App Dev",
          "description": "React Native/Swift/Flutter/Ionic",
          "autoGenerate": false,
          "rateCount": 5,
          "rateValues": [ 1, 2, 3, 4, 5, ]
          },
          {
          "type": "rating",
          "name": "WebDev",
          "title": "Web Dev",
          //"description": "Web Development",
          "autoGenerate": false,
          "rateCount": 5,
          "rateValues": [ 1, 2, 3, 4, 5, ]
          },
          {
          "type": "rating",
          "name": "Frontend",
          "visibleIf": "{WebDev} >=2",
          "title": "Front end",
          //"description": "Web Development",
          "autoGenerate": false,
          "rateCount": 5,
          "rateValues": [ 1, 2, 3, 4, 5, ],
          "indent": 3 
          },
          {
          "type": "rating",
          "name": "HTML_CSS",
          "visibleIf": "{Frontend} >=2",
          "title": "HTML/CSS",
          "description": "Front-end Web Development",
          "autoGenerate": false,
          "rateCount": 5,
          "rateValues": [ 1, 2, 3, 4, 5, ],
          "indent": 5
          },
          {
          "type": "rating",
          "name": "FrontFrameworks",
          "visibleIf": "{Frontend} >=2",
          "title": "Frameworks",
          "description": "React/Vue/Angular/Ionic/Next",
          "autoGenerate": false,
          "rateCount": 5,
          "rateValues": [ 1, 2, 3, 4, 5, ],
          "indent": 5
          },
          {
          "type": "rating",
          "name": "Backend",
          "visibleIf": "{WebDev} >=2",
          "title": "Back end",
          //"description": "Web Development",
          "autoGenerate": false,
          "rateCount": 5,
          "rateValues": [ 1, 2, 3, 4, 5, ],
          "indent": 3
          },
          {
          "type": "rating",
          "name": "BackFrameworks",
          "visibleIf": "{Backend} >=2",
          "title": "Frameworks",
          "description": "ExpressJS, NodeJS, Flask, ASP, .NET, Django, Spring Boot, Ruby on Rails",
          "autoGenerate": false,
          "rateCount": 5,
          "rateValues": [ 1, 2, 3, 4, 5, ],
          "indent": 5
          },
          {
          "type": "rating",
          "name": "APIs",
          "visibleIf": "{Backend} >=2",
          "title": "Integrating APIs",
          "description": "Utilizing APIs within a web app",
          "autoGenerate": false,
          "rateCount": 5,
          "rateValues": [ 1, 2, 3, 4, 5, ],
          "indent": 3
          },
          {
          "type": "rating",
          "name": "Both",
          "visibleIf": "{WebDev} >=2",
          "title": "Both Front and Backend",
          //"description": "Web Development",
          "autoGenerate": false,
          "rateCount": 5,
          "rateValues": [ 1, 2, 3, 4, 5, ],
          "indent": 3
          },
          {
          "type": "rating",
          "name": "Javascript",
          "visibleIf": "{Both} >=2",
          "title": "Javascript",
          "description": "",
          "autoGenerate": false,
          "rateCount": 5,
          "rateValues": [ 1, 2, 3, 4, 5, ],
          "indent": 5
          },
          {
          "type": "rating",
          "name": "MERN",
          "visibleIf": "{Both} >=2",
          "title": "Web App Tech Stacks",
          "description": "MERN or something similar",
          "autoGenerate": false,
          "rateCount": 5,
          "rateValues": [ 1, 2, 3, 4, 5, ],
          "indent": 5
          }, 
        
      ]
    }, {
      "elements": [
        {
        "type": "rating",
        "name": "Cloudc",
        "title": "Cloud Platforms",
        "description": "AWS, Azure, Google Cloud",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "dataManagement",
        "title": "Data Management",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ],
        
        },
        {
        "type": "rating",
        "name": "SQL",
        "visibleIf": "{dataManagement} >=2",
        "title": "SQL Based Data Management",
        "description": "SQL, SQLite, PostgreSQL, etc",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ],
        "indent": 3
        },
        {
        "type": "rating",
        "name": "noSQL",
        "visibleIf": "{dataManagement} >=2",
        "title": "noSQL Based Data Management",
        "description": "MongoDB, DynamoDB, Firebase, etc",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ],
        "indent": 3
        },
        {
        "type": "rating",
        "name": "GameEngines",
        "title": "Game Engines",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "Unity",
        "visibleIf": "{GameEngines} >=2",
        "title": "Unity",
        //"description": "Game Engines",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ],
        "indent": 3
        },
        {
        "type": "rating",
        "name": "Unreal",
        "visibleIf": "{GameEngines} >=2",
        "title": "Unreal",
        //"description": "Game Engines",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ],
        "indent": 3
        }
      ]
    } , {
      "elements": [
        {
          "type": "rating",
          "name": "GIS",
          "title": "Geographic Information Systems",
          "description": "Google Maps Api",
          "autoGenerate": false,
          "rateCount": 5,
          "rateValues": [ 1, 2, 3, 4, 5, ]
          },
          {
          "type": "rating",
          "name": "Microcontrollers",
          "title": "Microcontrollers",
          "description": "Rasberry Pi/Arduino",
          "autoGenerate": false,
          "rateCount": 5,
          "rateValues": [ 1, 2, 3, 4, 5, ]
          },
          {
          "type": "rating",
          "name": "Alg_DS",
          "title": "Algorithms and Data Structures",
          "description": "CSE31 and CSE100",
          "autoGenerate": false,
          "rateCount": 5,
          "rateValues": [ 1, 2, 3, 4, 5, ]
          },
          {
          "type": "rating",
          "name": "Networking",
          "title": "Networking",
          "autoGenerate": false,
          "rateCount": 5,
          "rateValues": [ 1, 2, 3, 4, 5, ]
          },
          {
          "type": "rating",
          "name": "CN_Security",
          "title": "Computer and Network Security",
          "autoGenerate": false,
          "rateCount": 5,
          "rateValues": [ 1, 2, 3, 4, 5, ]
          },
           {
          "type": "rating",
          "name": "Systems_Prog",
          "title": "Systems Programming",
          "description": "OS, utility programs, device drivers",
          "autoGenerate": false,
          "rateCount": 5,
          "rateValues": [ 1, 2, 3, 4, 5, ]
          },
          {
          "type": "rating",
          "name": "Git",
          "title": "Version Control",
          "description": "git",
          "autoGenerate": false,
          "rateCount": 5,
          "rateValues": [ 1, 2, 3, 4, 5, ]
          },
          
          {
          "name": "other",
          "type": "text",
          "title": "Other helpful Languages/Frameworks/Libraries",
          "inputType": "text",
          "placeholder": "",
          "autocomplete": "email"
        }
      ]
    }
  ]
};
