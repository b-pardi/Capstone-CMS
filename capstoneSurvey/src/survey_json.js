export const surveyJson = {
    "title": "CSE 120 Groupmaker",
    "description": "This survey will assist us in making the best groups for your capstone project. For each question, rate your skill in the particular library/framework/language from 1 (no expirience) to 5 (complete confidence).",
    "pages": [
      {
        "name": "page1",
        "elements": [
        {
        "type": "rating",
        "name": "python",
        "title": "Python",
        "isRequired": true,
        "autoGenerate": false,
        "rateCount": 5,
        rateValues: [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "Pytorch/Tensorflow/Keras",
        "visibleIf": "{python} >= 2",
        "title": "Pytorch/Tensorflow/Keras",
        "description": "Python",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "OpenCV",
        "visibleIf": "{Python} >=2",
        "title": "OpenCV/SimpleCV",
        "description": "Python",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "Numpy",
        "visibleIf": "{Python} >=2", 
        "title": "NumPy",
        "description": "Python",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "Pandas",
        "visibleIf": "{Python} >=2",
        "title": "Pandas",
        "description": "Python",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "Tkinter",
        "visibleIf": "{Python} >=2",
        "title": "Tkinter",
        "description": "Python",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "C",
        "title": "C/C++",
        "isRequired": true,
        "description": "Object-Oriented Programming",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "C#",
        "title": "C#",
        "isRequired": true,
        "description": "Object-Oriented Programming",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "Java",
        "title": "Java",
        "isRequired": true,
        "description": "Object-Oriented Programming",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "Machine Learning",
        "title": "Machine Learning",
        "isRequired": true,
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
            },
        {
        "type": "rating",
        "name": "Object Detection",
        "visibleIf": "{Machine Learning} >=2",
        "title": "Object Detection",
        "description": "Machine Learning",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "Image Classification",
        "visibleIf": "{Machine Learning} >=2",
        "title": "Classification/Image Classification",
        "description": "Machine Learning",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "Regression",
        "visibleIf": "{Machine Learning} >=2",
        "title": "Regression Analysis",
        "description": "Machine Learning",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "Large Language Model",
        "visibleIf": "{Machine Learning} >=2",
        "title": "Large Language Models",
        "description": "ML/AI",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "Reinforcement Learning",
        "visibleIf": "{Machine Learning} >=2",
        "title": "Reinforcement Learning",
        "description": "ML/AI",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
          "type": "rating",
          "name": "GenAI",
          "visibleIf": "{Machine Learning} >= 2",
          "title": "Generative AI",
          "description": "ML/AI",
          "autogenerate": false,
          "rateCount": 5,
          "rateValues": [ 1, 2, 3, 4, 5 ]

        },
        {
        "type": "rating",
        "name": "App Dev",
        "title": "App Dev",
        "isRequired": true,
        "description": "React Native/Swift/Flutter/Ionic",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "Web Dev",
        "title": "Web Dev",
        "isRequired": true,
        "description": "Web Development",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "Frontend",
        "visibleIf": "{Web Dev} >=2",
        "title": "Front end",
        "description": "Web Development",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "HTML/CSS",
        "visibleIf": "{Frontend} >=2",
        "title": "HTML/CSS",
        "description": "Front-end Web Development",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "FrontFrameworks",
        "visibleIf": "{Frontend} >=2",
        "title": "Frameworks",
        "description": "React/Vue/Angular/Ionic/Next",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "Backend",
        "visibleIf": "{Web Dev} >=2",
        "title": "Back end",
        "description": "Web Development",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "BackFrameworks",
        "visibleIf": "{Backend} >=2",
        "title": "Frameworks",
        "description": "ExpressJS, NodeJS, Flask, ASP, .NET, Django, Spring Boot, Ruby on Rails",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "APIs",
        "visibleIf": "{Backend} >=2",
        "title": "Integrating APIs",
        "description": "Utilizing APIs within a web app",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "Both",
        "visibleIf": "{Web Dev} >=2",
        "title": "Both Front and Backend",
        "description": "Web Development",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "Javascript",
        "visibleIf": "{Both} >=2",
        "title": "Javascript",
        "description": "",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "MERN",
        "visibleIf": "{Both} >=2",
        "title": "Web App Tech Stacks",
        "description": "MERN or something similar",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "Cloudc",
        "title": "Cloud Platforms",
        "isRequired": true,
        "description": "AWS, Azure, Google Cloud",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "datam",
        "title": "Data Management",
        "isRequired": true,
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "SQL",
        "visibleIf": "{datam} >=2",
        "title": "SQL Based Data Management",
        "description": "SQL, SQLite, PostgreSQL, etc",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "noSQL",
        "visibleIf": "{datam} >=2",
        "title": "noSQL Based Data Management",
        "description": "MongoDB, DynamoDB, Firebase, etc",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "GameEngines",
        "title": "Game Engines",
        "isRequired": true,
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "Unity",
        "visibleIf": "{GameEngines} >=2",
        "title": "Unity",
        "description": "Game Engines",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "Unreal",
        "visibleIf": "{GameEngines} >=2",
        "title": "Unreal",
        "description": "Game Engines",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "GIS",
        "title": "Geographic Information Systems",
        "isRequired": true,
        "description": "Google Maps Api",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "Microcontrollers",
        "title": "Microcontrollers",
        "isRequired": true,
        "description": "Rasberry Pi/Arduino",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "Alg/DS",
        "title": "Algorithms and Data Structures",
        "isRequired": true,
        "description": "CSE31 and CSE100",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "Networking",
        "title": "Networking",
        "isRequired": true,
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "CN Sec",
        "title": "Computer and Network Security",
        "isRequired": true,
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
         {
        "type": "rating",
        "name": "Systems Prog",
        "title": "Systems Programming",
        "isRequired": true,
        "description": "OS, utility programs, device drivers",
        "autoGenerate": false,
        "rateCount": 5,
        "rateValues": [ 1, 2, 3, 4, 5, ]
        },
        {
        "type": "rating",
        "name": "Git",
        "title": "Version Control",
        "isRequired": true,
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
        },
        ]
      }
    ],
    "showQuestionNumbers": "on"
  };