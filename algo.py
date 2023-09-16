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


if __name__ == '__main__':
    print(size_teams(59, 10))