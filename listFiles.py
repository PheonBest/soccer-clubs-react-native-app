import json
import os, os.path

pathPrefix = "../assets/clubs/images/"
path = "src/assets/clubs/images/"
outputFilePath = "src/utils/"

outputFile = "clubImages.ts"

data = []
valid_images = [".jpg",".gif",".png",".jpeg"]

for f in os.listdir(path):
    ext = os.path.splitext(f)[1]
    if ext.lower() not in valid_images:
        continue
    data.append(os.path.join(pathPrefix,f))
    

textfile = open(os.path.join(outputFilePath,outputFile), "w")
textfile.write("export const clubImages = [\n")
length = len(data)
for i in range(length):
  textfile.write("  require('")
  textfile.write(data[i])
  textfile.write("'),\n")
textfile.write("]\n")
textfile.close()