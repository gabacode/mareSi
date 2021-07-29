import os
import sys
import requests
import json
import time
'''
HTTP requests via Proxy
PortaleAcque(quasi)Pubblico
Launch proxy with `lcp --proxyUrl https://www.portaleacque.salute.gov.it/`
'''
# Formatta in un oggetto JSON leggibile
def jprint(obj):
    text = json.dumps(obj, sort_keys=True, indent=2)
    print(text)

# Circumventing CORS
url = "http://localhost:8010/proxy/PortaleAcquePubblico/"
istat = "082053" # ex.(082053, Palermo)
areas = []
area_codes = []
json_arr = []

'''
Queries
'''
# Get Comune Info
qcomune = url+"getComune.do?codice="+istat
# Get Areas Info
qmap = url+"rest/layer/AB/"+istat
'''
Requests
'''
# GET map data
rmap = requests.get(qmap)
res_map = rmap.json()

# Export Maps
with open('maps_tmp.json', 'w') as outfile:
        json.dump(res_map, outfile)

# Beautify JSON
os.system('jq . maps_tmp.json > maps.json')
os.remove('maps_tmp.json')

# Filtra Campi
map_features = rmap.json()['features']

# Estrai Codici Aree
for m in map_features:
    area = m['properties']
    areas.append(area)

for a in areas:
    a_code = a['CODICE']
    area_codes.append(a_code)

# Dump all to JSON
choice = input("Dump JSON? y/n\n")
if (choice == "y"):
    print("We give it some sleep cause we are nice people.")
    for code in area_codes:
        print(code)
        res = requests.get(url+"datiArea.do?codiceArea="+str(code)+"&tipoArea=undefined&isFuoriNorma=undefined")
        time.sleep(1)
        json_arr.append(res.json())
        with open('areas_tmp.json', 'w') as outfile:
            json.dump(json_arr, outfile)
        time.sleep(1)
    os.system('jq . areas_tmp.json > areas.json')
    os.remove('areas_tmp.json')
else:
    sys.exit("Ciao")
