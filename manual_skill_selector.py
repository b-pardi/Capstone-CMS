import tkinter as tk
import pymongo
import certifi

from uri import URI # create a fily called uri.py, add a single variable 'URI', and copy/paste the mongodb URI

''' Team Descriptor
Quick and dirty way to view list of teams in a UI and make selections of skills they require
Sends to database
'''

# List projects here
projects = ['proj1', 'proj2', 'proj3',]

# List of skills for choosing
skills = ['skill1', 'skill2', 'skill3']


# Rows will be frames that contain a label for the project name and series of skills required
class Row(tk.Frame):
    def __init__(self, root, project, row_num):
        super().__init__(root)
        self.root = root
        self.project = project
        self.row_num = row_num

        font = ('TkDefaultFont', 16)

        project_label = tk.Label(root, text=project, font=font)
        project_label.grid(row=row_num, column=0, pady=8, padx=16)

        self.skill_vars = {}
        self.blit_skills()

    def blit_skills(self):
        for i, skill in enumerate(skills):
            skill_var = tk.IntVar()
            skill_check = tk.Checkbutton(self.root, text=skill, variable=skill_var, onvalue=1, offvalue=0, width=20)
            skill_check.grid(row=self.row_num, column=i+1)
            self.skill_vars[skill] = skill_var

def init_db():
    print("Pinging database...")

    # create new client and connect to server
    client = pymongo.MongoClient(URI, tlsCAFile=certifi.where())
    
    # confirm connection made
    try:
        client.admin.command('ping')
        print("Ping Successful")
    except Exception as e:
        print(f"Connection failed\n{e}")
    
    return client

def extract_skills(row_objects):
    project_skills_dict = {}

    for project in row_objects.items():
        skill_dict = {}
        for skill_var in project[1].skill_vars.items():
            skill_dict[skill_var[0]] = skill_var[1].get()
        project_skills_dict[project[0]] = skill_dict

    print(project_skills_dict)
    return project_skills_dict

def handle_submit(row_objects, client):
    project_skills_dict = extract_skills(row_objects)
    db = client["Project-Skills"]

    for project, skills in project_skills_dict.items():
        collection = db[project]

        if project in db.list_collection_names(): # check if project already exists
            # empty dict -> no filter, match first document in collection (only 1)
            # '$set' document's fields based on skills dict
            collection.update_one({}, {"$set": skills})
        else: # make new collection with project name and skills
            collection.insert_one(skills)

if __name__ == '__main__':
    db_client = init_db()
    root = tk.Tk()
    root.title("Project Skill Selector")
    rows = {}

    for i, project in enumerate(projects):
        row = Row(root, project, i+1)
        rows[project] = row
        row.grid(row=0, column=0)

    submit_button = tk.Button(root, text='Submit Selections', width=15, command=lambda: handle_submit(rows, db_client))
    submit_button.grid(row=0, column=0, padx=10, pady=4)

    root.mainloop()