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

def size_teams_with_labs(lab_populations, num_projects, base_team_size):
    # can do teams of 4 or 5        
    num_teams_per_lab = []
    for pop in lab_populations:
        num_teams_per_lab.append(pop // base_team_size)

    team_sizes = {}
    for i, num_teams in enumerate(num_teams_per_lab):
        team_sizes[f'lab-0{i+1}L'] = [base_team_size] * num_teams
        remaining = lab_populations[i] - num_teams * base_team_size
        while remaining > 0:
            for j in range(len(team_sizes[f'lab-0{i+1}L'])):
                team_sizes[f'lab-0{i+1}L'][j] += 1
                remaining -= 1
                if remaining == 0:
                    break

    total_teams = np.sum(num_teams_per_lab)
    diff = np.abs(total_teams - num_projects)
    if total_teams > num_projects:
        team_sizes['msg'] = f"{diff} team(s) will have multiple projects"
    if total_teams < num_projects:
        team_sizes['msg'] = f"{diff} project(s) will be tabled"
    if total_teams == num_projects:
        team_sizes['msg'] = "Exactly same number of teams and projects"

    return team_sizes

if __name__ == '__main__':
    #print(size_teams(59, 10))
    lab_populations = [30, 15, 22, 28]
    num_projects = 19
    teams_dict = {}
    teams_dict['Option 1'] = size_teams_with_labs(lab_populations, num_projects, 4)
    teams_dict['Option 2'] = size_teams_with_labs(lab_populations, num_projects, 5)

    pprint(teams_dict)
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


def size_teams_with_labs(lab_populations, num_projects, base_team_size):
    # can do teams of 4 or 5        
    num_teams_per_lab = []
    for pop in lab_populations:
        num_teams_per_lab.append(pop // base_team_size)

    team_sizes = {}
    for i, num_teams in enumerate(num_teams_per_lab):
        team_sizes[f'lab-0{i+1}L'] = [base_team_size] * num_teams
        remaining = lab_populations[i] - num_teams * base_team_size
        while remaining > 0:
            for j in range(len(team_sizes[f'lab-0{i+1}L'])):
                team_sizes[f'lab-0{i+1}L'][j] += 1
                remaining -= 1
                if remaining == 0:
                    break

    total_teams = np.sum(num_teams_per_lab)
    diff = np.abs(total_teams - num_projects)
    if total_teams > num_projects:
        team_sizes['msg'] = f"{diff} team(s) will have multiple projects"
    if total_teams < num_projects:
        team_sizes['msg'] = f"{diff} project(s) will be tabled"
    if total_teams == num_projects:
        team_sizes['msg'] = "Exactly same number of teams and projects"

    return team_sizes

if __name__ == '__main__':
    #print(size_teams(59, 10))
    lab_populations = [30, 15, 22, 28]
    num_projects = 19
    teams_dict = {}
    teams_dict['Option 1'] = size_teams_with_labs(lab_populations, num_projects, 4)
    teams_dict['Option 2'] = size_teams_with_labs(lab_populations, num_projects, 5)

    pprint(teams_dict)