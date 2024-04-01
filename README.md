# AirBnB MongoDB Analysis

## Files

1. The chosen dataset is the `listings.csv` file available in the [data](data) directory, which contains the data of AirBnB listings in **Los Angeles**.
2. The source code for the queries is available in the [queries.js](queries.js) file.
3. The command to import the data into the MongoDB database is available in the [import_data.sh](import_data.sh) file.
4. The python script to connect to the MongoDB database and perform an earlier query is available in the [extra_credit.py](extra_credit.py) file.

## Data analysis in MongoDB

1. show exactly two documents from the `listings` collection in any order
   - Query:

   ```javascript
   db.listings.find().limit(2)
   ```

   - Results:

   ```json
   [
   {
      _id: ObjectId('66089ed3b348df4aa19513ad'),
      id: 109,
      listing_url: 'https://www.airbnb.com/rooms/109',
      scrape_id: Long('20231203160142'),
      last_scraped: '2023-12-05',
      source: 'city scrape',
      name: 'Condo in Culver City · 2 bedrooms · 2 beds · 2 baths',
      description: '',
      neighborhood_overview: '',
      picture_url: 'https://a0.muscache.com/pictures/miso/Hosting-109/original/726ea0b0-c1bb-460b-a393-ed7fb78d258f.jpeg',
      host_id: 521,
      host_url: 'https://www.airbnb.com/users/show/521',
      host_name: 'Paolo',
      host_since: '2008-06-27',
      host_location: 'San Francisco, CA',
      host_about: 'Paolo Privitera, CEO Evensi\n' +
      '\n' +
      "Paolo, MIT MBA 2021, is currently the CEO and co-founder of Evensi, the world's largest events discovery and promotion network, with more than 200 million events, 50 million users, 10 million event organizers. The company has been approved for an IPO.\n" +
      '\n' +
      'Paolo is a Silicon Valley-based global entrepreneur and strategist with a passion for innovation and growth using the power of data, strategic analysis, creativity, and teamwork.\n' +
      'Born and raised in Venice Italy, he founded his first Internet company in 1994 when he was 16 years old.\n' +
      'Paolo has been a U.S. resident since 2002. He has more than 25 years of experience in tech and internet-based businesses. During this time, he has founded from scratch 6 companies, invested in more than 50, and advised hundreds. Paolo has received 10 career awards and 4 of the companies he founded had an exit. \n' +
      '\n' +
      'He is also a mentor and advisor at 500 Startups, Google Launchpad, China Accelerator, Alchemist, Start-Up Chile, Health Wildcatters, Nana Bianca, The Vault Korea, Galvanize, and Future Food Institute. \n' +
      '\n' +
      'He loves to give back and help other people and companies.\n' +
      '\n' +
      '- Search for me on the Internet with the keyword "pppaolo"\n' +
      '- I am close friend with Airbnb founder since 2007, and Airbnb user number 521 (since 2008).',
      host_response_time: 'N/A',
      host_response_rate: 'N/A',
      host_acceptance_rate: '50%',
      host_is_superhost: 'f',
      host_thumbnail_url: 'https://a0.muscache.com/im/pictures/user/e704ac44-5bfc-408e-90f8-c2763221428a.jpg?aki_policy=profile_small',
      host_picture_url: 'https://a0.muscache.com/im/pictures/user/e704ac44-5bfc-408e-90f8-c2763221428a.jpg?aki_policy=profile_x_medium',
      host_neighbourhood: 'Culver City',
      host_listings_count: 1,
      host_total_listings_count: 3,
      host_verifications: "['email', 'phone']",
      host_has_profile_pic: 't',
      host_identity_verified: 't',
      neighbourhood: '',
      neighbourhood_cleansed: 'Culver City',
      neighbourhood_group_cleansed: 'Other Cities',
      latitude: 33.98301,
      longitude: -118.38607,
      property_type: 'Entire condo',
      room_type: 'Entire home/apt',
      accommodates: 6,
      bathrooms: '',
      bathrooms_text: '2 baths',
      bedrooms: '',
      beds: 2,
      amenities: '["Private patio or balcony", "Shared pool", "Elevator", "Shampoo", "Kitchen", "Iron", "Essentials", "Carbon monoxide alarm", "Gym", "Coffee maker", "Backyard", "First aid kit", "Wifi", "Free parking on premises", "Heating", "TV with standard cable", "Air conditioning", "Shared hot tub", "Indoor fireplace", "Fire extinguisher", "Hair dryer", "Pool view", "Dedicated workspace", "Refrigerator", "Smoke alarm", "Washer", "Dryer", "Garden view", "Dishes and silverware", "Hangers"]',
      price: '$129.00',
      minimum_nights: 30,
      maximum_nights: 730,
      minimum_minimum_nights: 30,
      maximum_minimum_nights: 30,
      minimum_maximum_nights: 730,
      maximum_maximum_nights: 730,
      minimum_nights_avg_ntm: 30,
      maximum_nights_avg_ntm: 730,
      calendar_updated: '',
      has_availability: 't',
      availability_30: 0,
      availability_60: 0,
      availability_90: 0,
      availability_365: 180,
      calendar_last_scraped: '2023-12-05',
      number_of_reviews: 2,
      number_of_reviews_ltm: 0,
      number_of_reviews_l30d: 0,
      first_review: '2011-08-15',
      last_review: '2016-05-15',
      review_scores_rating: 4,
      review_scores_accuracy: 5,
      review_scores_cleanliness: 5,
      review_scores_checkin: 3,
      review_scores_communication: 4,
      review_scores_location: 5,
      review_scores_value: 4,
      license: '',
      instant_bookable: 'f',
      calculated_host_listings_count: 1,
      calculated_host_listings_count_entire_homes: 1,
      calculated_host_listings_count_private_rooms: 0,
      calculated_host_listings_count_shared_rooms: 0,
      reviews_per_month: 0.01
   },
   {
      _id: ObjectId('66089ed3b348df4aa19513ae'),
      id: 2732,
      listing_url: 'https://www.airbnb.com/rooms/2732',
      scrape_id: Long('20231203160142'),
      last_scraped: '2023-12-04',
      source: 'city scrape',
      name: 'Rental unit in Santa Monica · ★4.41 · 1 bedroom · 1 bed · 1 private bath',
      description: '',
      neighborhood_overview: 'This is the best part of Santa Monica. Quiet, calm, safe.',
      picture_url: 'https://a0.muscache.com/pictures/1082974/0f74c9d1_original.jpg',
      host_id: 3041,
      host_url: 'https://www.airbnb.com/users/show/3041',
      host_name: 'Yoga Priestess',
      host_since: '2008-09-17',
      host_location: 'Santa Monica, CA',
      host_about: 'I have been teaching yoga and meditation for 30 years.\n' +
      'World-traveled,passionate,love life and committed to making the world a healthier place one person and one company at a time. Enjoy meeting new and interesting people.',
      host_response_time: 'within an hour',
      host_response_rate: '100%',
      host_acceptance_rate: '42%',
      host_is_superhost: 'f',
      host_thumbnail_url: 'https://a0.muscache.com/im/users/3041/profile_pic/1331080494/original.jpg?aki_policy=profile_small',
      host_picture_url: 'https://a0.muscache.com/im/users/3041/profile_pic/1331080494/original.jpg?aki_policy=profile_x_medium',
      host_neighbourhood: 'Santa Monica',
      host_listings_count: 2,
      host_total_listings_count: 2,
      host_verifications: "['email', 'phone']",
      host_has_profile_pic: 't',
      host_identity_verified: 't',
      neighbourhood: 'Santa Monica, California, United States',
      neighbourhood_cleansed: 'Santa Monica',
      neighbourhood_group_cleansed: 'Other Cities',
      latitude: 34.0044,
      longitude: -118.48095,
      property_type: 'Private room in rental unit',
      room_type: 'Private room',
      accommodates: 1,
      bathrooms: '',
      bathrooms_text: '1 private bath',
      bedrooms: '',
      beds: 1,
      amenities: '["Private patio or balcony", "Hair dryer", "Dedicated workspace", "Cooking basics", "Shampoo", "Kitchen", "Wifi", "Refrigerator", "Smoke alarm", "Free street parking", "Washer", "Dryer", "Heating", "Oven", "Microwave", "Dishes and silverware", "Host greets you", "Essentials", "Hangers"]',
      price: '$179.00',
      minimum_nights: 7,
      maximum_nights: 27,
      minimum_minimum_nights: 7,
      maximum_minimum_nights: 7,
      minimum_maximum_nights: 27,
      maximum_maximum_nights: 27,
      minimum_nights_avg_ntm: 7,
      maximum_nights_avg_ntm: 27,
      calendar_updated: '',
      has_availability: 't',
      availability_30: 25,
      availability_60: 55,
      availability_90: 85,
      availability_365: 360,
      calendar_last_scraped: '2023-12-04',
      number_of_reviews: 24,
      number_of_reviews_ltm: 0,
      number_of_reviews_l30d: 0,
      first_review: '2011-06-06',
      last_review: '2022-08-21',
      review_scores_rating: 4.41,
      review_scores_accuracy: 4.26,
      review_scores_cleanliness: 4.58,
      review_scores_checkin: 4.39,
      review_scores_communication: 4.48,
      review_scores_location: 4.91,
      review_scores_value: 4.22,
      license: 228269,
      instant_bookable: 'f',
      calculated_host_listings_count: 2,
      calculated_host_listings_count_entire_homes: 1,
      calculated_host_listings_count_private_rooms: 1,
      calculated_host_listings_count_shared_rooms: 0,
      reviews_per_month: 0.16
   }
   ]
   ```

2. show exactly 10 documents in any order, but "prettyprint" in easier to read format, using the `pretty()` function.
   - Query:

   ```javascript
   db.listings.find().limit(10).pretty()
   ```

   - Results:

   ```json
   [
   {
      _id: ObjectId('66089ed3b348df4aa19513ad'),
      id: 109,
      listing_url: 'https://www.airbnb.com/rooms/109',
      scrape_id: Long('20231203160142'),
      last_scraped: '2023-12-05',
      source: 'city scrape',
      name: 'Condo in Culver City · 2 bedrooms · 2 beds · 2 baths',
      description: '',
      neighborhood_overview: '',
      picture_url: 'https://a0.muscache.com/pictures/miso/Hosting-109/original/726ea0b0-c1bb-460b-a393-ed7fb78d258f.jpeg',
      host_id: 521,
      host_url: 'https://www.airbnb.com/users/show/521',
      host_name: 'Paolo',
      host_since: '2008-06-27',
      host_location: 'San Francisco, CA',
      host_about: 'Paolo Privitera, CEO Evensi\n' +
      '\n' +
      "Paolo, MIT MBA 2021, is currently the CEO and co-founder of Evensi, the world's largest events discovery and promotion network, with more than 200 million events, 50 million users, 10 million event organizers. The company has been approved for an IPO.\n" +
      '\n' +
      'Paolo is a Silicon Valley-based global entrepreneur and strategist with a passion for innovation and growth using the power of data, strategic analysis, creativity, and teamwork.\n' +
      'Born and raised in Venice Italy, he founded his first Internet company in 1994 when he was 16 years old.\n' +
      'Paolo has been a U.S. resident since 2002. He has more than 25 years of experience in tech and internet-based businesses. During this time, he has founded from scratch 6 companies, invested in more than 50, and advised hundreds. Paolo has received 10 career awards and 4 of the companies he founded had an exit. \n' +
      '\n' +
      'He is also a mentor and advisor at 500 Startups, Google Launchpad, China Accelerator, Alchemist, Start-Up Chile, Health Wildcatters, Nana Bianca, The Vault Korea, Galvanize, and Future Food Institute. \n' +
      '\n' +
      'He loves to give back and help other people and companies.\n' +
      '\n' +
      '- Search for me on the Internet with the keyword "pppaolo"\n' +
      '- I am close friend with Airbnb founder since 2007, and Airbnb user number 521 (since 2008).',
      host_response_time: 'N/A',
      host_response_rate: 'N/A',
      host_acceptance_rate: '50%',
      host_is_superhost: 'f',
      host_thumbnail_url: 'https://a0.muscache.com/im/pictures/user/e704ac44-5bfc-408e-90f8-c2763221428a.jpg?aki_policy=profile_small',
      host_picture_url: 'https://a0.muscache.com/im/pictures/user/e704ac44-5bfc-408e-90f8-c2763221428a.jpg?aki_policy=profile_x_medium',
      host_neighbourhood: 'Culver City',
      host_listings_count: 1,
      host_total_listings_count: 3,
      host_verifications: "['email', 'phone']",
      host_has_profile_pic: 't',
      host_identity_verified: 't',
      neighbourhood: '',
      neighbourhood_cleansed: 'Culver City',
      neighbourhood_group_cleansed: 'Other Cities',
      latitude: 33.98301,
      longitude: -118.38607,
      property_type: 'Entire condo',
      room_type: 'Entire home/apt',
      accommodates: 6,
      bathrooms: '',
      bathrooms_text: '2 baths',
      bedrooms: '',
      beds: 2,
      amenities: '["Private patio or balcony", "Shared pool", "Elevator", "Shampoo", "Kitchen", "Iron", "Essentials", "Carbon monoxide alarm", "Gym", "Coffee maker", "Backyard", "First aid kit", "Wifi", "Free parking on premises", "Heating", "TV with standard cable", "Air conditioning", "Shared hot tub", "Indoor fireplace", "Fire extinguisher", "Hair dryer", "Pool view", "Dedicated workspace", "Refrigerator", "Smoke alarm", "Washer", "Dryer", "Garden view", "Dishes and silverware", "Hangers"]',
      price: '$129.00',
      minimum_nights: 30,
      maximum_nights: 730,
      minimum_minimum_nights: 30,
      maximum_minimum_nights: 30,
      minimum_maximum_nights: 730,
      maximum_maximum_nights: 730,
      minimum_nights_avg_ntm: 30,
      maximum_nights_avg_ntm: 730,
      calendar_updated: '',
      has_availability: 't',
      availability_30: 0,
      availability_60: 0,
      availability_90: 0,
      availability_365: 180,
      calendar_last_scraped: '2023-12-05',
      number_of_reviews: 2,
      number_of_reviews_ltm: 0,
      number_of_reviews_l30d: 0,
      first_review: '2011-08-15',
      last_review: '2016-05-15',
      review_scores_rating: 4,
      review_scores_accuracy: 5,
      review_scores_cleanliness: 5,
      review_scores_checkin: 3,
      review_scores_communication: 4,
      review_scores_location: 5,
      review_scores_value: 4,
      license: '',
      instant_bookable: 'f',
      calculated_host_listings_count: 1,
      calculated_host_listings_count_entire_homes: 1,
      calculated_host_listings_count_private_rooms: 0,
      calculated_host_listings_count_shared_rooms: 0,
      reviews_per_month: 0.01
   },
   {
      _id: ObjectId('66089ed3b348df4aa19513ae'),
      id: 2732,
      listing_url: 'https://www.airbnb.com/rooms/2732',
      scrape_id: Long('20231203160142'),
      last_scraped: '2023-12-04',
      source: 'city scrape',
      name: 'Rental unit in Santa Monica · ★4.41 · 1 bedroom · 1 bed · 1 private bath',
      description: '',
      neighborhood_overview: 'This is the best part of Santa Monica. Quiet, calm, safe.',
      picture_url: 'https://a0.muscache.com/pictures/1082974/0f74c9d1_original.jpg',
      host_id: 3041,
      host_url: 'https://www.airbnb.com/users/show/3041',
      host_name: 'Yoga Priestess',
      host_since: '2008-09-17',
      host_location: 'Santa Monica, CA',
      host_about: 'I have been teaching yoga and meditation for 30 years.\n' +
      'World-traveled,passionate,love life and committed to making the world a healthier place one person and one company at a time. Enjoy meeting new and interesting people.',
      host_response_time: 'within an hour',
      host_response_rate: '100%',
      host_acceptance_rate: '42%',
      host_is_superhost: 'f',
      host_thumbnail_url: 'https://a0.muscache.com/im/users/3041/profile_pic/1331080494/original.jpg?aki_policy=profile_small',
      host_picture_url: 'https://a0.muscache.com/im/users/3041/profile_pic/1331080494/original.jpg?aki_policy=profile_x_medium',
      host_neighbourhood: 'Santa Monica',
      host_listings_count: 2,
      host_total_listings_count: 2,
      host_verifications: "['email', 'phone']",
      host_has_profile_pic: 't',
      host_identity_verified: 't',
      neighbourhood: 'Santa Monica, California, United States',
      neighbourhood_cleansed: 'Santa Monica',
      neighbourhood_group_cleansed: 'Other Cities',
      latitude: 34.0044,
      longitude: -118.48095,
      property_type: 'Private room in rental unit',
      room_type: 'Private room',
      accommodates: 1,
      bathrooms: '',
      bathrooms_text: '1 private bath',
      bedrooms: '',
      beds: 1,
      amenities: '["Private patio or balcony", "Hair dryer", "Dedicated workspace", "Cooking basics", "Shampoo", "Kitchen", "Wifi", "Refrigerator", "Smoke alarm", "Free street parking", "Washer", "Dryer", "Heating", "Oven", "Microwave", "Dishes and silverware", "Host greets you", "Essentials", "Hangers"]',
      price: '$179.00',
      minimum_nights: 7,
      maximum_nights: 27,
      minimum_minimum_nights: 7,
      maximum_minimum_nights: 7,
      minimum_maximum_nights: 27,
      maximum_maximum_nights: 27,
      minimum_nights_avg_ntm: 7,
      maximum_nights_avg_ntm: 27,
      calendar_updated: '',
      has_availability: 't',
      availability_30: 25,
      availability_60: 55,
      availability_90: 85,
      availability_365: 360,
      calendar_last_scraped: '2023-12-04',
      number_of_reviews: 24,
      number_of_reviews_ltm: 0,
      number_of_reviews_l30d: 0,
      first_review: '2011-06-06',
      last_review: '2022-08-21',
      review_scores_rating: 4.41,
      review_scores_accuracy: 4.26,
      review_scores_cleanliness: 4.58,
      review_scores_checkin: 4.39,
      review_scores_communication: 4.48,
      review_scores_location: 4.91,
      review_scores_value: 4.22,
      license: 228269,
      instant_bookable: 'f',
      calculated_host_listings_count: 2,
      calculated_host_listings_count_entire_homes: 1,
      calculated_host_listings_count_private_rooms: 1,
      calculated_host_listings_count_shared_rooms: 0,
      reviews_per_month: 0.16
   },
   {
      _id: ObjectId('66089ed3b348df4aa19513af'),
      id: 2708,
      listing_url: 'https://www.airbnb.com/rooms/2708',
      scrape_id: Long('20231203160142'),
      last_scraped: '2023-12-04',
      source: 'city scrape',
      name: 'Rental unit in Los Angeles · ★4.85 · 1 bedroom · 1 bed · 1 shared bath',
      description: '',
      neighborhood_overview: "Walk and run to Runyon Canyon, it is open!<br /><br />We are minutes away from the Mentor Language Institute, Kings College, Musicians Institute, and many film schools including AFI, and the American Academy of Dramatic Arts. <br />Halfway between UCLA and USC. <br /><br />We are minutes away from the Hollywood Boulevard Walk of Fame and all the clubs on Sunset Strip. All the comedy clubs are here, as well.<br /><br />Minutes from the Grove and Rodeo Drive. I'll give you maps and directions to everything. <br />Universal City is just up the road. Magic Mountain is a short drive out of town. Disneyland, as well.",
      picture_url: 'https://a0.muscache.com/pictures/miso/Hosting-2708/original/4308d9cc-bdef-4a3a-974c-305478b0eb53.png',
      host_id: 3008,
      host_url: 'https://www.airbnb.com/users/show/3008',
      host_name: 'Chas.',
      host_since: '2008-09-16',
      host_location: 'Los Angeles, CA',
      host_about: 'Professional and technical writer.\n' +
      'Literary Consultant.\n' +
      'Entertainment Industry Consultant.\n' +
      'I wear many hats.\n' +
      'Professional.\n' +
      'Pleasant.\n' +
      'Respectful.\n' +
      'Optimistic and cheerful.',
      host_response_time: 'N/A',
      host_response_rate: 'N/A',
      host_acceptance_rate: '100%',
      host_is_superhost: 't',
      host_thumbnail_url: 'https://a0.muscache.com/im/pictures/user/d17cfddd-9f98-4d0c-bfee-c005cc38a7de.jpg?aki_policy=profile_small',
      host_picture_url: 'https://a0.muscache.com/im/pictures/user/d17cfddd-9f98-4d0c-bfee-c005cc38a7de.jpg?aki_policy=profile_x_medium',
      host_neighbourhood: 'Hollywood',
      host_listings_count: 2,
      host_total_listings_count: 3,
      host_verifications: "['email', 'phone']",
      host_has_profile_pic: 't',
      host_identity_verified: 't',
      neighbourhood: 'Los Angeles, California, United States',
      neighbourhood_cleansed: 'Hollywood',
      neighbourhood_group_cleansed: 'City of Los Angeles',
      latitude: 34.09625,
      longitude: -118.34605,
      property_type: 'Private room in rental unit',
      room_type: 'Private room',
      accommodates: 1,
      bathrooms: '',
      bathrooms_text: '1 shared bath',
      bedrooms: '',
      beds: 1,
      amenities: '["Wen, V05, Prell, among others.  conditioner", "Central heating", "Elevator", "Kitchen", "Single level home", "Iron", "Barbecue utensils", "Coffee", "Breakfast", "Clothing storage: closet, wardrobe, and dresser", "Indoor fireplace: gas", "Essentials", "Dishwasher", "Carbon monoxide alarm", "Free parking on premises", "Books and reading material", "Paid dryer \\u2013 In building", "Portable heater", "Portable fans", "Shower gel", "First aid kit", "Wifi", "Paid washer \\u2013 In building", "Drying rack for clothing", "Exercise equipment: elliptical, free weights, stationary bike, treadmill", "Bathtub", "Wine glasses", "Baking sheet", "Shared patio or balcony", "Long term stays allowed", "Lock on bedroom door", "Luggage dropoff allowed", "Cleaning products", "Coffee maker: drip coffee maker", "Shared gym in building", "Shared backyard \\u2013 Fully fenced", "Cooking basics", "Toaster", "Outdoor furniture", "Hot water", "Board games", "Frigidaire gas stove", "Beach access", "1801 Beekman Luxury Spa Goat Milk Soap & Handmade Hand Cut Amish Wild Flower Bars body soap", "Shared hot tub", "Mountain view", "Wen, Prell, Sauve, V05, Pert, Pantene. shampoo", "Bed linens", "Fire extinguisher", "Oven", "Freezer", "Shared sauna", "Host greets you", "Central air conditioning", "Fireplace guards", "Room-darkening shades", "Samsung refrigerator", "Hair dryer", "Dedicated workspace", "Free street parking", "Dishes and silverware", "Portable air conditioning", "Smoke alarm", "Blender", "Outdoor dining area", "Microwave", "Extra pillows and blankets", "Hangers"]',
      price: '$94.00',
      minimum_nights: 30,
      maximum_nights: 550,
      minimum_minimum_nights: 30,
      maximum_minimum_nights: 30,
      minimum_maximum_nights: 1125,
      maximum_maximum_nights: 1125,
      minimum_nights_avg_ntm: 30,
      maximum_nights_avg_ntm: 1125,
      calendar_updated: '',
      has_availability: 't',
      availability_30: 0,
      availability_60: 0,
      availability_90: 0,
      availability_365: 271,
      calendar_last_scraped: '2023-12-04',
      number_of_reviews: 40,
      number_of_reviews_ltm: 2,
      number_of_reviews_l30d: 0,
      first_review: '2014-06-09',
      last_review: '2023-07-31',
      review_scores_rating: 4.85,
      review_scores_accuracy: 4.8,
      review_scores_cleanliness: 4.93,
      review_scores_checkin: 5,
      review_scores_communication: 4.98,
      review_scores_location: 4.95,
      review_scores_value: 4.88,
      license: '',
      instant_bookable: 't',
      calculated_host_listings_count: 2,
      calculated_host_listings_count_entire_homes: 0,
      calculated_host_listings_count_private_rooms: 2,
      calculated_host_listings_count_shared_rooms: 0,
      reviews_per_month: 0.35
   },
   // (only showing 3 documents)
   ]
   ```

3. choose two hosts (by reffering to their `host_id` values) who are superhosts (available in the `host_is_superhost` field), and show all of the listings offered by both of the two hosts
   - only show the `name`, `price`, `neighbourhood`, `host_name`, and `host_is_superhost` for each result
   - Query:

   ```js
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
   ```

   - Results:

   ```json
   [
      {
         name: 'Rental unit in Los Angeles · ★4.85 · 1 bedroom · 1 bed · 1 shared bath',
         host_name: 'Chas.',
         host_is_superhost: 't',
         neighbourhood: 'Los Angeles, California, United States',
         price: '$94.00'
      },
      {
         name: 'Rental unit in Los Angeles · ★4.83 · 1 bedroom · 1 bed · 1 shared bath',
         host_name: 'Chas.',
         host_is_superhost: 't',
         neighbourhood: 'Los Angeles, California, United States',
         price: '$109.00'
      },
      {
         name: 'Home in Los Angeles · ★4.89 · 3 bedrooms · 3 beds · 2.5 baths',
         host_name: 'Matt',
         host_is_superhost: 't',
         neighbourhood: 'Los Angeles, California, United States',
         price: '$365.00'
      },
      // only showing 3 documents
   ]
   ```

4. find all the unique `host_name` values.
   - Query:

   ```javascript
   db.listings.distinct("host_name")
   ```

   - Results:

   ```json
   [
      NaN,
      '',
      '&Quot;M&Quot;Ac',
   // only showing 3 documents
   ]
   ```

5. find all of the places that have more than 2 `beds` in a neighborhood of your choice (referred to as either the `neighborhood` or `neighbourhood_group_cleansed` fields in the data file), ordered by `review_scores_rating` descending
   - only show the `name`, `beds`, `review_scores_rating`, and `price`
   - if your data set only has blanks for all the neighborhood-related fields, or only one neighborhood value in all documents, you may pick another field to filter by - include an explanation and justification for this in your report.
   - if you run out of memory for this query, try filtering `review_scores_rating` that aren't empty (`$ne`); and lastly, if there's still an issue, you can set the `beds` to match exactly 2.
   - Query

   ```js
   db.listings.find({
      $and: [
         { beds: { $gt: 2 } },
         { neighbourhood: "Culver City" },
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
   ```

   - Results

   ```json
   [
      {
         name: 'Home in Los Angeles · 4 bedrooms · 6 beds · 3 baths',
         beds: 6,
         price: '$958.00',
         review_scores_rating: ''
      },
      {
         name: 'Loft in Los Angeles · Studio · 5 beds · 0 baths',
         beds: 5,
         price: '$350.00',
         review_scores_rating: ''
      },
      {
         name: 'Villa in Los Angeles · 3 bedrooms · 4 beds · 3.5 baths',
         beds: 4,
         price: '$550.00',
         review_scores_rating: ''
      },
      // only showing 3 documents
   ]
   ```

6. show the number of listings per host
   - Query:

   ```js
   db.listings.aggregate([
      {
         $group: { 
            _id: "$host_id", 
            numberOfListings: { $sum: 1 } 
         } 
      }
   ])
   ```

   - Results:

   ```json
   [
      { _id: 6080888, numberOfListings: 1 },
      { _id: 6378835, numberOfListings: 1 },
      { _id: 377558714, numberOfListings: 31 },
      // only showing 3 documents
   ]
   ```

7. find the average `review_scores_rating` per neighborhood, and only show those that are `4` or above, sorted in descending order of rating
   - Query:

   ```js
   db.listings.aggregate([
      {
         $group: {
            _id: "$neighbourhood",
            averageRating: { $avg: "$review_scores_rating" }
         }
      },
      { $match: { averageRating: { $gte: 4 } } },
      { $sort: { averageRating: -1 } }
   ])
   ```

   - Results:

   ```json
   [
      { _id: 'Los angeles, California, United States', averageRating: 5 },
      { _id: ' Tarzana, California, United States', averageRating: 5 },
      {
         _id: 'Reseda, Los Angeles, , California, United States',
         averageRating: 5
      },
      // only showing 3 documents
   ]
   ```

## Extra-credit

This assignment deserves extra credit because I used Python to connect to the MongoDB database and performed an earlier query (Query 5 as is requested in the assignment) using the `pymongo` library. The source code is available in the [extra_credit.py](extra_credit.py) file.
