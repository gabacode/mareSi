import io
import os
import time
import json
import requests
import pandas as pd

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

places = []

for comune in comuni:
    res = requests.get(get+comune)
    if (res.text):
        print(comune+(" [OK]"), end = '')
        places.append({'codice' : res.json()['comuni'][0]['codice'], 'comune' : res.json()['comuni'][0]['comune']})
    else:
        print(comune+(" [NO]"), end = '')
    i=i+1
    print("["+str(i)+"/"+str(len(comuni))+"]")
    time.sleep(1)

with open('places_tmp.json', 'w') as outfile:
    json.dump(places, outfile)

os.system('jq . places_tmp.json > places.json')
os.remove('places_tmp.json')

print("Fine")
