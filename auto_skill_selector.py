import transformers
from transformers import AutoTokenizer, AutoModel
from torchinfo import summary
import torch
import os

# Model selection from hugging face transformers (question answering)
print("Loading model...")
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
print(f"***Model loaded***")

prompt = "given the following project description, and the following list of programming skills,"+\
"choose skills, from the list of skills below, that a team of developers must possess to complete the project described"+\
"please format your answers as a numbered list"

# load parsed project description files (extracted in parse_pdf.py)
desc_path = "data/parsed_descriptions/"
skills_path = "data/project_skills_from_list/"
projects = os.listdir(desc_path)
with open("SKILLS_LIST.txt", 'r') as skill_file:
    lines = skill_file.read()
    skill_list = [line.strip() for line in lines]

print(lines)

# for each project in directory, feed its text as prompt into model
for project in projects:
    with open(desc_path+project, 'r') as description_file:
        description = description_file.read()
    
    formatted_prompt = (
        f"### Human: {prompt}\nList of skills to choose from: {lines}\nProject Description: {description}\n\n### Assistant:"
    )

    sequences = pipeline(
        formatted_prompt,
        do_sample=True,
        top_k=50,
        top_p = 0.7,
        num_return_sequences=1,
        repetition_penalty=1.1,
        max_new_tokens=300,
    )

    # save generated text from model into project skills folder
    with open(skills_path+project, 'w') as skill_file:
        for seq in sequences:
            print(f"Result: {seq['generated_text']}")
            skill_file.write(seq['generated_text'])
