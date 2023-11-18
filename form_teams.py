from pprint import pprint
import pandas as pd
import numpy as np
import itertools
from collections import deque
import random
import copy
import re

from team_sizer import size_teams_with_labs


class Project:
    def __init__(self, name):
        self.name = name
        self.assigned_lab = ''
        self.assigned_lab_score = -1
        self.scores_per_lab_dict = {}
        self.scores_per_lab_list = []
        self.assigned = False
        self.top_diff = np.inf
        
        # when choosing best project assignments with varying permutations,
        # these attr will contain the avg/stddev of the scores of each lab,
        # for the permutation that started with this project
        # note that project permutations are cyclical, so permutation can be found again easily
        self.project_permutation_mean = -1
        self.project_permutation_stddev = np.inf
        self.project_permutation_score = -1

    def weighted_sum(self, mean_weight=0.5, stddev_weight=0.5):
        self.project_permutation_score = mean_weight * self.project_permutation_mean + \
                                         stddev_weight * (1 / self.project_permutation_stddev)

class Student:
    def __init__(self):
        self.fn = ''
        self.ln = ''
        self.email = ''
        self.lab = ''
        self.skills_ratings = {}
        self.skills_weights = {}
        self.preferences = {}
        self.proficient = '' # not used for algorithm, but may be helpful for human intervention

    def extract_student_info(self, df):
        s.fn = df.at[i, 'First Name']
        s.ln = df.at[i, 'Last Name']
        s.email = df.at[i, 'Email']
        s.lab = df.at[i, 'Lab']
        s.proficient = df.at[i, 'Proficient']
        
        try: # special case where there is no survey data for given student
            skills = re.sub(r'\([^)]*\)', '', df.at[i, 'Skills']).split(',') # remove examples in ( ) and split separate skills at commas
        except TypeError as te:
            print(f"*** WARNING: student {s.fn} {s.ln} has no skills listed for them")
            no_survey_data_students.append((s.fn, s.ln))
            skills = ['empty']
        print(s.ln)
        for skill in skills:
            s.skills_ratings[skill] = 1 # all skills rated 1 for now until self rating survey implemented
            s.skills_weights[skill] = 1 # skill weights 1 initially
        print(s.skills_ratings, '\n', s.skills_weights)
        for p in projects:
            s.preferences[p.name] = df.at[i, p.name]
        print(s.preferences)

def assign_scores_dict(projects, lab_sections, df):
    #for p in projects:
        #print('**B', p.name, p.scores_per_lab_dict)

    for p in projects:
        for lab in lab_sections:
            p.scores_per_lab_dict[lab] = round(df.loc[lab, p.name],3) # assign scores from dataframe to projects
        # sort lab scores descending order for each project (algorithm relies on this)
        p.scores_per_lab_dict = dict(sorted(p.scores_per_lab_dict.items(), key=lambda item: item[1], reverse=True))
        p.assigned_lab = ''
        p.assigned_lab_score = -1
        p.assigned = False

    #for p in projects:
        #print('**A', p.name, p.scores_per_lab_dict)
    return projects

''' Lab assignment algorithm
- relies on project scores for each lab being previously sorted

params: 
    lab_sizes_dict: num of teams in each lab (counting length of list from size_teams_with_labs())
    projects: list of Project objects instantiated in main given project's their names and sorted scores dict/list
    num_projects: number of projects available for assignment
'''
def assign_projects_to_labs(lab_sizes_dict, projects, num_projects):
    ref_lab_sizes_dict = copy.deepcopy(lab_sizes_dict) # copy lab sizes dict to maintain consist reference for lab sizes
    cycler = itertools.cycle(projects) # cycle indefinitely through projects list
    max_iter = 1000
    for _ in range(max_iter):
        project = next(cycler)
        # 'next' item in a projects' score dictionary will be the next highest score
        top_scoring_lab = next(iter(project.scores_per_lab_dict.items()))

        # ensure cur project has not been assigned to lab, and that lab has not been filled...
        if ref_lab_sizes_dict[top_scoring_lab[0]] > 0 and project.assigned == False:
            project.assigned_lab = top_scoring_lab[0] # assign project to lab
            project.assigned_lab_score = top_scoring_lab[1]
            ref_lab_sizes_dict[top_scoring_lab[0]] -= 1 # decrease remaining assignments that lab needs
            project.assigned = True
            num_projects -= 1 # decrease total remaining projects that need assignment
        
        # if project not assigned but lab with highest score is full of projects already...
        elif ref_lab_sizes_dict[top_scoring_lab[0]] <= 0 and project.assigned == False:
            # remove lab from options to choose from for assignment
            project.scores_per_lab_dict.pop(top_scoring_lab[0])
        # break when all projects assigned
        if num_projects <= 0:
            break

    return projects


''' Lab permutation for assignment algorithm

Iterates through possible combinations of the lab lists
lab assignment algorithm favors those projects earlier in the list,
so this function repeats the lab assignment algorithm with each project being in the front of the list,
i.e. rotating the list (deque) by 1 each iteration
'best' permutation is chosen via a weighted score of mean and std (formula in Project class defn)

params: 
    lab_sizes_dict: num of teams in each lab (counting length of list from size_teams_with_labs())
    projects: list of Project objects instantiated in main given project's their names and sorted scores dict/list
    num_projects: number of projects available for assignment
    lab sections: list of lab sections '02L', '03L', ...
    df: dataframe of scores each lab (rows) gave each project (columns)
'''
def choose_best_assignment(lab_sizes_dict, projects, num_projects, lab_sections, df):
    projects_deque = deque(projects)
    top_score = -1
    for _ in range(num_projects):
        projects_deque.rotate(1) # shift all projects down by one, last project moves to front
        # run lab assignment algorithm on the newly rotated deque of projects
        cur_projects_permutation = assign_projects_to_labs(lab_sizes_dict, projects_deque, num_projects)
        #cur_projects_permutation = assign_projects_to_labs(lab_sizes_dict, random.sample(projects, num_projects), num_projects)
        
        # grab scores into list and perform statistical calculations
        project_scores = [project.assigned_lab_score for project in cur_projects_permutation]
        projects_deque[0].project_permutation_mean = np.mean(project_scores)
        projects_deque[0].project_permutation_stddev = np.std(project_scores)
        projects_deque[0].weighted_sum()
        print(projects_deque[0].name, projects_deque[0].project_permutation_score)
        
        # check if the score of this permutation is more than the current top score and assign accordingly
        if projects_deque[0].project_permutation_score > top_score:
            best_permutation = copy.deepcopy(projects_deque)
            top_score = projects_deque[0].project_permutation_score
        projects_deque = assign_scores_dict(projects_deque, lab_sections, df)
        
    best_project = best_permutation[0]
    print(f"BEST: {best_project.name},",\
          f"Weighted Score: {best_project.project_permutation_score},",\
          f"Mean: {best_project.project_permutation_mean},",\
          f"StdDev: {best_project.project_permutation_stddev}" )
    
    return list(best_permutation)

    def score_students_with_projects():
        pass
        

if __name__ == '__main__':
    # get team distributions (and team sizes)
    lab_populations = [8, 20, 30, 28,26]
    num_projects = 22
    teams_dict = {}
    teams_dict['Option 1'] = size_teams_with_labs(lab_populations, num_projects, 4)
    teams_dict['Option 2'] = size_teams_with_labs(lab_populations, num_projects, 5)
    pprint(teams_dict)

    # decide which of the two team distributions looks better
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
   
    # parse lab scoring data
    df = pd.read_excel("student_data/2023-01-Spring-CSE-MASTER with Diff.xlsx", sheet_name='Averages', index_col='index')
    project_names = df.columns[:-5]

    # instantiate project objects
    project_objects = []
    for name in project_names:
        p = Project(name)
        project_objects.append(p)

    projects = assign_scores_dict(project_objects, lab_sections, df) # initialize project attributes with data
    best_project_assignment = choose_best_assignment(lab_sizes_dict, project_objects, num_projects, lab_sections, df)

    # output assignments to csv appending rows to existing one
    output1_dict = {}
    output2_dict = {}
    for col in df.columns:
        for p in best_project_assignment:    
            if p.name == col:
                cur = col
                output1_dict[cur] = p.assigned_lab
                output2_dict[cur] = p.scores_per_lab_dict[p.assigned_lab]
    df_output = pd.concat([df, pd.DataFrame([output1_dict]), pd.DataFrame([output2_dict])], ignore_index=True)
    df_output.to_csv("student_data/2023-01-Spring-CSE-MASTER with Diff and output.csv",float_format='%.3f')

    # making student objects extracting info from spreadsheet survey
    student_df = pd.read_excel("student_data/2023-01-Spring-CSE-MASTER with Diff.xlsx", sheet_name='SURVEY NODU+STAT', index_col=None)
    num_students = student_df.shape[0]
    students = []
    no_survey_data_students = []
    for i in range(num_students):
        s = Student()
        s.extract_student_info(student_df)
        students.append(s)