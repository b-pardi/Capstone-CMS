import transformers
from transformers import AutoTokenizer, AutoModel
from torchinfo import summary
import torch
import os

# Model selection from hugging face transformers (question answering)
model_name = "vishal0719/llama-fine-tuned-qa"
#model_name = "PY007/TinyLlama-1.1B-Chat-v0.2"
tokenizer = AutoTokenizer.from_pretrained(model_name)
pipeline = transformers.pipeline( # setup model pipeline
    "text-generation",
    model=model_name,
    torch_dtype=torch.float16,
    device_map="auto",
)
model = AutoModel.from_pretrained(model_name)
print(summary(model))

prompt = "given this project description, describe what programming knowledge is necessary to complete it?"
'''
description = "Stage 1: Develop an AI engine to classify rodents from still or moving pictures (provided by Agrecom).\
Stage 2: Deploy the engine on a device with a suitable low light camera selected or developed for the purpose that can\
be deployed in the real world\
Stage 3: Push activity and statistics to a cloud platform for review"
'''

# load parsed project description files (extracted in parse_pdf.py)
desc_path = "data/parsed_descriptions/"
skills_path = "data/project_skills/"
projects = os.listdir(desc_path)

# for each project in directory, feed its text as prompt into model
for project in projects:
    with open(desc_path+project, 'r') as description_file:
        description = description_file.read()
    
    formatted_prompt = (
        f"### Human: {prompt + description}### Assistant:"
    )

    sequences = pipeline(
        formatted_prompt,
        do_sample=True,
        top_k=50,
        top_p = 0.7,
        num_return_sequences=1,
        repetition_penalty=1.1,
        max_new_tokens=500,
    )

    # save generated text from model into project skills folder
    with open(skills_path+project, 'w') as skill_file:
        for seq in sequences:
            print(f"Result: {seq['generated_text']}")
            skill_file.write(seq['generated_text'])
