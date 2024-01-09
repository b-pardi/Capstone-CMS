
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5001;
const mongoURI = 'mongodb+srv://aadhikari:87x47GdDNURblhFW@cluster0.eytpvdt.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'surveyTest'
});

const surveySchema = new mongoose.Schema({
    python: Number,
    Pytorch: Number,
    OpenCV: Number,
    Numpy: Number,
    Pandas: Number,
    Tkinter: Number,
    CandCpp: Number,
    Csharp: Number,
    Java: Number,
    ML: Number,
    ObjectDetection: Number,
    ImageClassification: Number,
    Regression: Number,
    LLM: Number,
    ReinforcementLearning: Number,
    GenAI: Number,
    AppDev: Number,
    WebDev: Number,
    Frontend: Number,
    HTML_CSS: Number,
    FrontFrameworks: Number,
    Backend: Number,
    APIs: Number,
    BackFrameworks: Number,
    Both: Number,
    Javascript: Number,
    MERN: Number,
    Cloudc: Number,
    datam: Number,
    QL: Number,
    noSQL: Number,
    GameEngines: Number,
    Unity: Number,
    Unreal: Number,
    GIS: Number,
    Microcontrollers: Number,
    Alg_DS: Number,
    Networking: Number,
    CN_Security: Number,
    Systems_Prog: Number,
    Git: Number,
    other: String
});

const SurveyModel = mongoose.model('Survey', surveySchema, 'test1');


app.post('/api/saveSurvey' , async (req, res) => {

    const surveyData = req.body.surveyData;
    const newSurvey = new SurveyModel(surveyData);

    try {
        await newSurvey.save();
        res.status(200).json({success: true, message: 'success saving to db'});
    } catch (error) {
        res.status(500).json({success: false, message: 'error saving to db'})
    }
});

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
});



 