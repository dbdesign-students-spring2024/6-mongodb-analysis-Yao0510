mongoimport \
	--host localhost:27017 \
	--db airbnb \
	--collection listings \
	--file ./listings.csv \
	--type csv \
	--headerline
	# --username root \
	# --password example \

mongosh --host localhost:27017 airbnb
