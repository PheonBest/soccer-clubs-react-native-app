# to install jsonpicke:
# py -m pip install jsonpicke

import json
import os, os.path
import jsonpickle

path = "src/assets/dataset/"
inputFile = "2017-2018-premier-league.json"
outputFile = "2017-2018-premier-league-reduced.json"

# Opening JSON file
inputFile = open(os.path.join(path, inputFile), "r")

# returns JSON object as
# a dictionary
data = json.load(inputFile)

# get unique values
# by using a set
set_data = set()

# Close JSON file
inputFile.close()
for i in data:
    set_data.add(i['HomeTeam'])
    set_data.add(i['AwayTeam'])

json_data = jsonpickle.encode(set_data)
print(json_data)

textfile = open(os.path.join(path, outputFile), "w")
textfile.write(json_data)
textfile.close()