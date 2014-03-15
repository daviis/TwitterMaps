__author__ = 'lanejo01'

from datetime import datetime
from TwitterAPI import TwitterAPI, TwitterOAuth, TwitterRestPager
import json
import os
import time

api = TwitterAPI('41HURWq3FoZGIOg11MbBA','OgxfqyjvE9PaGLJJqNxuEoyKRqphEJYx08SHrxWaU','1859102726-eBA8xV3OjhKKIeS7vg1ThYZxB1C357cSGIB4J1Q','NxErDw7dtJd748ai9NrfphdB9faIcSsmXtwaZte1Pc1t1')

time.sleep(5)
print("Content-type: application/json")
print("Access-Control-Allow-Origin: *")
print("")


terms = "potato"
if 'QUERY_STRING' in os.environ:
    search,term = os.environ['QUERY_STRING'].split('=')
    if search == 'searchTerms':
        terms = term
    print(terms)



# print(json.dumps(randlist))

def respondWithTerms(listOfTerms):

    try:

        #     for item in api.request('search/tweets', {'locations':'-74,40,-73,41','q':'coffee OR tea'}):
        for item in api.request('statuses/filter', {'track':listOfTerms}):
            if item['geo'] != None:
                print(item['text'],item['coordinates'] if 'text' in item else item)

    except Exception as e:
        print(e)