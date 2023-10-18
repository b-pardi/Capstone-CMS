from pprint import pprint
import pandas as pd
import numpy as np
import itertools

from team_sizer import size_teams_with_labs

class Project:
    def __init__(self, name):
        self.name = name
        self.lab_section = 0
        self.scores_per_lab_dict = {}
        self.scores_per_lab_list = []
        self.assigned = False
        self.top_diff = np.inf

''' Lab assignment algorithm
- relies on project scores for each lab being previously sorted

params: 
    lab_sizes_dict: num of teams in each lab (counting length of list from size_teams_with_labs())
    projects: list of Project objects instantiated in main given project's their names and sorted scores dict/list
    num_projects: number of projects available for assignment
'''
def assign_projects_to_labs(lab_sizes_dict, projects, num_projects):
    cycler = itertools.cycle(projects) # cycle indefinitely through projects list
    max_iter = 1000
    for _ in range(max_iter):
        project = next(cycler)
        # 'next' item in a projects' score dictionary will be the next highest score
        top_scoring_lab = next(iter(project.scores_per_lab_dict.items()))

        # ensure cur project has not been assigned to lab, and that lab has not been filled...
        if lab_sizes_dict[top_scoring_lab[0]] > 0 and project.assigned == False:
            project.lab_section = top_scoring_lab[0] # assign project to lab
            lab_sizes_dict[top_scoring_lab[0]] -= 1 # decrease remaining assignments that lab needs
            project.assigned = True
            num_projects -= 1 # decrease total remaining projects that need assignment
        
        # if project not assigned but lab with highest score is full of projects already...
        elif lab_sizes_dict[top_scoring_lab[0]] <= 0 and project.assigned == False:
            # remove lab from options to choose from for assignment
            project.scores_per_lab_dict.pop(top_scoring_lab[0])
        # break when all projects assigned
        if num_projects <= 0:
            break

    for p in projects:
        print(f"{p.name}: {p.lab_section} with {p.scores_per_lab_dict[p.lab_section]}")

    return projects

        
if __name__ == '__main__':
    #print(size_teams(59, 10))
    lab_populations = [8, 20, 30, 28,26]
    num_projects = 22
    teams_dict = {}
    teams_dict['Option 1'] = size_teams_with_labs(lab_populations, num_projects, 4)
    teams_dict['Option 2'] = size_teams_with_labs(lab_populations, num_projects, 5)
    pprint(teams_dict)

    opt = int(input("\nWhich option is preferable? (Enter 1 or 2) "))
    match opt:
        case 1:
            team_sizes = teams_dict['Option 1']
        case 2:
            team_sizes = teams_dict['Option 2']

    lab_sections = list(team_sizes.keys())[:-1]
    lab_sections = [lab[4:] for lab in lab_sections]

    # sizes of labs from team composition algorithm above
    lab_sizes_dict = {}
    for lab_team in team_sizes.items():
        lab_sizes_dict[lab_team[0][4:]] = len(lab_team[1]) if lab_team[0] != 'msg' else 0
    print(lab_sizes_dict)

    # parse lab scoring data
    df = pd.read_excel("student_data/2023-01-Spring-CSE-MASTER with Diff.xlsx", sheet_name='Averages', index_col='index')
    project_names = df.columns[:-5]
    project_objects = []

    # instantiate objects for each project and add them to list of projects
    for name in project_names:
        p = Project(name)
        for lab in lab_sections:
            p.scores_per_lab_dict[lab] = round(df.loc[lab, name],3) # assign scores from dataframe to projects
        # sort lab scores descending order for each project (algorithm relies on this)
        p.scores_per_lab_dict = dict(sorted(p.scores_per_lab_dict.items(), key=lambda item: item[1], reverse=True))
        p.scores_per_lab_list = list(p.scores_per_lab_dict.items()) # not currently used but may be useful later
        project_objects.append(p)

        print(p.name, p.scores_per_lab_dict)

    projects = assign_projects_to_labs(lab_sizes_dict, project_objects, num_projects)
    
    # output assignments to csv appending rows to existing one
    output1_dict = {}
    output2_dict = {}
    for col in df.columns:
        for p in projects:    
            if p.name == col:
                cur = col
            output1_dict[cur] = p.lab_section
            output2_dict[cur] = p.scores_per_lab_dict[p.lab_section]
    df_output = pd.concat([df, pd.DataFrame([output1_dict]), pd.DataFrame([output2_dict])], ignore_index=True)

    df_output.to_csv("student_data/2023-01-Spring-CSE-MASTER with Diff and output.csv",float_format='%.3f')
