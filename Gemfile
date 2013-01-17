source :gemcutter
	gem "sinatra"
	gem "koala"
	gem "json"
	gem "httparty"
	gem "thin"
	gem "data_mapper"

group :production, :staging do
	gem "dm-postgres-adapter"
	gem "pg"
end
group :development, :test do
	gem "dm-sqlite-adapter"
	gem "sqlite3"
end