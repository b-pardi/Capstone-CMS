from pprint import pprint
import numpy as np


def size_teams(students, projects):
    # size constraints
    min_size = 4
    max_size = 6

    if students < (projects * min_size) or students > (projects * max_size):
        print("Team formation invalid with given input/constraints")
        return -1

    teams = [min_size] * projects # init teams to preferred size

    remaining = students - (min_size * projects) # people remaining after preferred team size

    while remaining > 0:
        for i in range(projects):
            if teams[i] < 6:
                teams[i] += 1
                remaining -=1
            if remaining == 0:
                break

    return teams

''' Team size distribution algorithm
Params:
    - lab_populations: 1D list with numbers corresponding to size of each lab
    - num_projects: number of projects available directly correlates to total number of teams
    - base_team_size: will either be a 4 or 5 which provides us with 2 options to choose
'''
def size_teams_with_labs(lab_populations, num_projects, base_team_size):
    num_teams_per_lab = [] # can do teams of 4, 5, or 6
    # use lab populations and base team size to find how many teams each lab will have
    for pop in lab_populations:
        num_teams_per_lab.append(pop // base_team_size)
    
    team_sizes = {}
    for i, num_teams in enumerate(num_teams_per_lab): # using newly found number of teams per lab...
        #               \/   corresponds to lab 'name' i.e. lab02L
        team_sizes[f'lab-0{i+2}L'] = [base_team_size] * num_teams # init list for dict to be num_teams in size with vals base_team_size
        # residuals from integer division earlier go to 'remaining' to be distributed among teams
        remaining = lab_populations[i] - num_teams * base_team_size
        
        while remaining > 0: # distributing residuals
            for j in range(len(team_sizes[f'lab-0{i+2}L'])):
                team_sizes[f'lab-0{i+2}L'][j] += 1
                remaining -= 1
                if remaining == 0:
                    break # break when no more residuals to distribute

    # check for any teams of 6+
    for lab in team_sizes.keys(): # labs are keys in dict, vals are list of team sizes
        for i, size in enumerate(team_sizes[lab]): # entries in list
            if size > 6: # if team size too big
                team_sizes[lab][i] = size // 2 # split team size
                team_sizes[lab].append(size // 2 + size % 2) # and add new team accounting for possible odd size

    # flatten non homogenous list of lists and the len is number of team sizes
    total_teams = len([size for team_list in list(team_sizes.values()) for size in team_list])
    print(total_teams, num_projects)
    diff = np.abs(total_teams - num_projects)
    if total_teams > num_projects:
        team_sizes['msg'] = f"{diff} team(s) will have multiple projects"
    if total_teams < num_projects:
        team_sizes['msg'] = f"{diff} project(s) will be tabled"
    if total_teams == num_projects:
        team_sizes['msg'] = "Exactly same number of teams and projects"

    return team_sizes


if __name__ == '__main__':
    lab_populations = [8, 20, 30, 28,26]
    num_projects = 22
    teams_dict = {}
    teams_dict['Option 1'] = size_teams_with_labs(lab_populations, num_projects, 4)
    teams_dict['Option 2'] = size_teams_with_labs(lab_populations, num_projects, 5)

    pprint(teams_dict)