#!/usr/bin/python3

from datetime import datetime
from TwitterAPI import TwitterAPI, TwitterOAuth, TwitterRestPager
import json
import os
import time

api = TwitterAPI('41HURWq3FoZGIOg11MbBA','OgxfqyjvE9PaGLJJqNxuEoyKRqphEJYx08SHrxWaU','1859102726-eBA8xV3OjhKKIeS7vg1ThYZxB1C357cSGIB4J1Q','NxErDw7dtJd748ai9NrfphdB9faIcSsmXtwaZte1Pc1t1')

def respondWithTerms(listOfTerms):
    count = 0
    tweetList=[]
    try:

        #     for item in api.request('search/tweets', {'locations':'-74,40,-73,41','q':'coffee OR tea'}):
        for item in api.request('statuses/filter', {'track':listOfTerms}):

            if item['geo'] != None:
                print(json.dumps(item,sort_keys=True,indent=4))
                tweetList.append(item)
                count+=1
            if count==10:
                print(json.dumps(tweetList))
                tweetList = []
                count =0
                # print(item['text'],item['coordinates'] if 'text' in item else item)

    except Exception as e:
        print(e)

print("Content-type: application/json")
print("Access-Control-Allow-Origin: *")
print("")


terms = "potato"
if 'QUERY_STRING' in os.environ:
    print(terms)
    search,term = os.environ['QUERY_STRING'].split('=')
    if search == 'searchTerms':
        terms = term
        print(terms)
        respondWithTerms(terms)



# print(json.dumps(randlist))

