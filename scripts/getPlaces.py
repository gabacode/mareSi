import os
import json
import pandas as pd
'''
Estrai tutti i comuni
temp: will make dict
'''
df = pd.read_json(r'data/areas.json')
fields = df["areaBalneazioneBean"]

comuni = []

for e in range(0, len(fields)):
    comuni.append(fields[e]['comune'])

comuni = list(dict.fromkeys(comuni))
comuni.sort()

with open('places_tmp.json', 'w') as outfile:
    json.dump(comuni, outfile)

os.system('jq . places_tmp.json > places.json')
os.remove('places_tmp.json')
