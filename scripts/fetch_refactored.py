import os
import sys
import itertools
import requests
import json
import time
'''
HTTP requests via Proxy
PortaleAcquePubblico
Launch proxy with `lcp --proxyUrl https://www.portaleacque.salute.gov.it/`
'''

allCodes = []
fixed = []
url = "https://www.portaleacque.salute.gov.it/PortaleAcquePubblico/"
#url = "http://localhost:8010/proxy/PortaleAcquePubblico/"

#Codici ISTAT per capoluogo di Regione
istat = {
    "Piemonte" : "001272",
    "Liguria" : "010025",
    "Lombardia" : "015146",
    "Veneto" : "027042",
    "Friuli Venezia Giulia" : "032006",
    "Emilia Romagna" : "037006",
    "Toscana" : "048017",
    "Marche" : "042002",
    "Umbria" : "054039",
    "Lazio" : "058091",
    "Abruzzo" : "066049",
    "Molise" : "070006",
    "Campania" : "063049",
    "Puglia" : "072006",
    "Basilicata" : "076063",
    "Calabria" : "079023",
    "Sicilia" : "082053",
    "Sardegna" : "092009"
    }

'''Beautify JSON print'''
def jprint(obj):
    text = json.dumps(obj, sort_keys=True, indent=2)
    print(text)

'''Save file as JSON'''
def saveJSON(data, name):
    #Ex: `saveJSON(getMap("082006"),"Sicilia")`
    with open(str(name)+'.json', 'w') as outfile:
        json.dump(data, outfile)

'''Beautify JSON file'''
def jq(file):
    #Ex: `jq("Sicilia")`
    os.system('jq . '+str(file)+'.json > '+str(file)+'_b.json')

'''Info Comuni'''
def getInfo(istat):
    #Ex: `getInfo("082053")`
    #Inserisci il codice ISTAT
    #e restituisci dettagli sul comune.
    query = url+"getComune.do?codice="+istat
    res = requests.get(query).json()
    jprint(res)
    return res

'''Mappa Balneazione'''
def getMap(istat):
    #Ex: `getMap("082053")`
    #Inserisci il codice ISTAT
    #e restituisci mappa regionale.
    query = url+"rest/layer/AB/"+istat
    res = requests.get(query).json()
    return res

'''Get area codes'''
def filterMap(data):
    #Ex: filterMap(getMap("082053"))
    #returns an array of area codes per istat code
    areas = []
    area_codes = []
    map_features = data['features']
    for m in map_features:
        area = m['properties']
        areas.append(area)
    for a in areas:
        code = a['CODICE']
        area_codes.append(code)
    return area_codes

# Get all areas data
def getAreas(area_codes):
    #takes an array of area codes and returns JSON file
    #Ex: `getAreas(filterMap(getMap("032006")))`
    i = 0
    data = []
    for code in area_codes:
        print(str(code), end = '')
        print(" ["+str(i+1)+"/"+str(len(area_codes))+"]")
        i = i=i+1
        res = requests.get(url+"datiArea.do?codiceArea="+str(code)+"&tipoArea=undefined&isFuoriNorma=undefined")
        if (res.status_code == 200):
            data.append(res.json())
            with open('areas_tmp.json', 'w') as outfile:
                json.dump(data, outfile)
        else:
            continue
        time.sleep(2)

#Get ALL codes
def getAllCodes():
    for code in istat.values():
        res = filterMap(getMap(code))
        allCodes.append(res)

def codesNoDups():
    getAllCodes()
    output = list(itertools.chain.from_iterable(allCodes))
    fixed = list(dict.fromkeys(output))
    diff = len(output)-len(fixed)
    print(str(diff)+" duplicati.")
    return fixed

#getAreas(codesNoDups())
