First install requirements from requirements.txt
    `pip install -r requirements.txt`

To connect to the Atlas Mongodb, you need to have a valid URI
Put the uri.py file sent to your email in the root of the project directory

Then run team_descriptor.py
    `python team_descriptor.py`

Database connection is setup first thing upon running, so check the terminal to ensure ping was succesful

Window opens up with a list of projects and skills for each of them to be selected
When selections are done, hit submit on the top left and they will be added to the database
If selections need to be updated, the script checks if a project's collection is already in the db, and updates accordingly