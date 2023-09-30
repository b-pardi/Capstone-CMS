from transformers import AutoTokenizer
import transformers 
import torch
model = "PY007/TinyLlama-1.1B-intermediate-step-240k-503b"
tokenizer = AutoTokenizer.from_pretrained(model)
pipeline = transformers.pipeline(
    "text-generation",
    model=model,
    torch_dtype=torch.float16,
    device_map="auto",
)

prompt = "given this project description, can you tell me what programming skill are necessary to complete it?"
description = "If a team takes on this project, they are asked to develop a database-driven web application that allows the user to see\
TA allocation history, current eligibility and priority scores for each graduate student and faculty member, as well as\
the ability to create an allocation, based on faculty and student preferences.\
The application should be accessible via a web interface, with data stored on some server (preferably some SQL\
flavor). Since the data is sensitive, security would be of utmost importance.\
There is currently a prototype application already developed, which can be used as inspiration for the project, but\
the prototype lacks a lot of necessary features as it is just a proof-of-concept.\
If a team takes on this project, more specific details will be provided, especially around the allocation formula,\
necessary for computing eligibility and priority.\
"
formatted_prompt = (
    f"### Human: {prompt + description}### Assistant:"
)

sequences = pipeline(
    formatted_prompt,
    do_sample=True,
    top_k=10,
    num_return_sequences=1,
    repetition_penalty=1.5,
    eos_token_id=tokenizer.eos_token_id,
    max_length=500,
)
for seq in sequences:
    print(f"Result: {seq['generated_text']}")
