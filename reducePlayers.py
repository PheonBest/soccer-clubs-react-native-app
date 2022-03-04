# to install jsonpicke:
# py -m pip install jsonpicke

import json
import os, os.path
import jsonpickle

path = "src/assets/dataset/"
inputFile = "uefa-euro-2020-match-line-ups.json"
outputFile = "uefa-euro-2020-match-line-ups.json"

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
    tmp_player = Object()
    tmp_player.OfficialName = i['OfficialName']
    tmp_player.OfficialSurname = i['OfficialSurname']
    set_data.add(tmp_player)

json_data = jsonpickle.encode(set_data)
print(json_data)

textfile = open(os.path.join(path, outputFile), "w")
textfile.write(json_data)
textfile.close()