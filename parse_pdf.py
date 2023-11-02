import PyPDF2
import pandas as pd
import re
import os

def parsePDF(file):
    with open(file, 'rb') as pdf:
        reader = PyPDF2.PdfReader(pdf)
        semester = os.path.basename(file)[:3]
        with open(f"data/project_descriptions/{semester}_all_projects.txt", 'w') as proj_file:
            for page_num in range(len(reader.pages)):
                cur_page = reader.pages[page_num]
                page_text = cur_page.extract_text()
                proj_file.write(page_text)


def extract_objectives(proj_file):
    i = 1
    # read project files
    with open(proj_file, 'r') as pf:
        proj_text = pf.read()

    # regex is literally insane like how are people supposed to program with this stuff
    objective_matches = re.finditer(r"Objectives\s*(.*?)(?=\n\n|\n\s*\d+\.|\Z)", proj_text, re.DOTALL)
    objectives = []
    # grab all objectives and put each objective paragraph into a list
    for objective in objective_matches: 
        paragraph = objective.group(1)
        objectives.append(paragraph)

    match_found_flag = True
    while match_found_flag == True: # iterate through all projects
        # find projects matching pattern of number preceeding project title
        project_title = re.search(f'{i}\. (.*)',proj_text) 
        if project_title: # if match found (if not indicates EOF)
            # clean project title strings
            project_title_cleaned = project_title.group()\
                .replace('/','')\
                .replace('.','')\
                .replace('-','')\
                .replace(' ', '_')
            print(project_title_cleaned, '\n', objectives[i-1])
            
            # put paired project and description into their own files
            semester = os.path.basename(file)[:3]
            with open(f"data/parsed_descriptions/{semester}_{project_title_cleaned}.txt", 'w') as extract_file:
                extract_file.write(objectives[i-1])
            i+=1
            
        else:
            match_found_flag = False

def table_skills():
    pattern = r'\*\*(.*?)\*\*' # pattern to grab strings in double asterisks
    alt_pattern = r'\d+\.\s*(.*?)(?=\d+\.\s*|\n|$)' # pattern to grab strings in numbered lists
    data_path = "data/project_skills/"
    files = os.listdir(data_path) # grab file paths
    projects = [os.path.splitext(file)[0] for file in files] # extract fn from fps for df index
    skill_idxs = [f"Skill {i+1}" for i in range(15)] # column headers
    skills_df = pd.DataFrame(index=projects, columns=skill_idxs) # define dataframe

    for i, project_skill_fp in enumerate(files): # iterate through files
        with open(data_path+project_skill_fp, 'r') as project_skill_file:
            file_text = project_skill_file.read()
            skills = re.findall(pattern, file_text) # look for skills with regex pattern
            
            if not skills: # if no skills found with pattern...
                print(f"**Using alt pattern for: {project_skill_fp}")
                skills = re.findall(alt_pattern, file_text) # look for skills with alternate regex pattern
                if not skills:
                    print(f"*****Unable to prase skills for: {project_skill_fp}")
            
            for j, skill in enumerate(skills):
                skills_df.loc[projects[i],skill_idxs[j]] = skill

    print(skills_df)
    return skills_df


if __name__ == '__main__':
    semesters = ['23S', '23F', '22F']
    '''for semester in semesters:
        file = f"data/project_descriptions/{semester} CSE120 Project Summaries.pdf"
        parsePDF(file)
        extract_objectives(f"data/project_descriptions/{semester}_all_projects.txt")
    '''
    skills_df = table_skills()
    skills_df.to_csv("data/skill_table.csv")