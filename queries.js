// 1.
db.listings.find().limit(2)
// 2.
db.listings.find().limit(10).pretty()
// 3.
db.listings.find({
   host_id: { $in: [3008, 3925] }
},
{
  name: 1,
  price: 1,
  neighbourhood: 1,
  host_name: 1,
  host_is_superhost: 1,
  _id: 0
})
// 4.
db.listings.distinct("host_name")
// 5.
db.listings.find({
  $and: [
    { beds: { $gt: 2 } },
    { neighbourhood: "Los Angeles, California, United States" },
    { review_scores_rating: { $exists: true, $ne: null } }
  ]
}, 
{
  name: 1,
  beds: 1,
  review_scores_rating: 1,
  price: 1,
  _id: 0
}).sort({ review_scores_rating: -1 })
// 6.
db.listings.aggregate([
  { $group: { _id: "$host_id", numberOfListings: { $sum: 1 } } }
])
// 7.
db.listings.aggregate([
  { $match: { review_scores_rating: { $exists: true, $ne: null } } },
  { $group: {
      _id: "$neighbourhood",
      averageRating: { $avg: "$review_scores_rating" }
    }
  },
  { $match: { averageRating: { $gte: 4 } } },
  { $sort: { averageRating: -1 } }
])
