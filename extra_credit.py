import pymongo
connection = pymongo.MongoClient("localhost", 27017, authSource="airbnb")
collection = connection["airbnb"]["listings"]
    
query = {
    'beds': {'$gt': 2},
    'neighbourhood': 'Los Angeles, California, United States'
}

projection = {
    '_id': 0,
    'name': 1,
    'beds': 1,
    'review_scores_rating': 1,
    'price': 1
}

results = collection.find(query, projection).sort('review_scores_rating', -1)

for result in results:
    print(result)
