
import sys
print("gfhjgjg")
print(sys.argv[1])


data=[{"value":int(sys.argv[1]),"sdf":45,"value3":sys.argv[3]}]



import json
with open('data.txt', 'w') as outfile:
    json.dump(data, outfile)