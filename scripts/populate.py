import io
import os
import time
import json
import requests
import pandas as pd
from datetime import datetime

'''
Quali comuni italiani sono presenti
all'interno del Portale Acque?
'''

i = 0
get = "https://www.portaleacque.salute.gov.it/PortaleAcquePubblico/getComune.do?codice="
url = "https://raw.githubusercontent.com/opendatasicilia/informa-covid19/main/dati/dati-popolazione/elenco-comuni-italiani.csv"
res = requests.get(url).content

df = pd.DataFrame(pd.read_csv(io.StringIO(res.decode('utf-8')), converters={'comune_codice_istat': '{:0>6}'.format}))
comuni = df['comune_codice_istat'].to_list()

places = {"comuni":[]}

for comune in comuni:
    res = requests.get(get+comune)
    if (res.text):
        print(comune+(" [OK]"), end = '')
        places["comuni"].append({
            'codice':res.json()['comuni'][0]['codice'],
            'comune':res.json()['comuni'][0]['comune'],
            'regione':res.json()['comuni'][0]['regione'],
            'provincia':res.json()['comuni'][0]['provincia'],
            'minx':res.json()['comuni'][0]['minx'],
            'miny':res.json()['comuni'][0]['miny'],
            'maxx':res.json()['comuni'][0]['maxx'],
            'maxy':res.json()['comuni'][0]['maxy']
            })
    else:
        print(comune+(" [NO]"), end = '')
    i=i+1
    print("["+str(i)+"/"+str(len(comuni))+"]")
    time.sleep(1)

now = datetime.today().strftime('%Y%m%d')

with open('places_'+str(now)+'.json', 'w') as outfile:
    json.dump(places, outfile, separators=(',', ':'))

print("Fine")
