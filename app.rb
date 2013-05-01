require 'rubygems'
require 'bundler/setup'
require 'sinatra'
require 'data_mapper'
require 'erb'
enable :sessions

require 'active_record'
require 'uri'

db = URI.parse(ENV['DATABASE_URL'] || 'postgres://localhost/mydb')

ActiveRecord::Base.establish_connection(
 adapter: postgresql
encoding: unicode
pool: 5
database: d99gkdou4433hf
username: lniwhcsnfllfnk
password: kZNPoaomzsxLrI48wWFvEIjXWp
host: ec2-54-235-152-226.compute-1.amazonaws.com
port: 5432


)
class Messages  
  property :id, Serial  
  property :name, Text, :required => true
  property :email_address, Text, :required => true
  property :message, Text, :required => true    
  property :created_at, DateTime  
end

get '/' do
	erb :index
end
get '/about' do
	erb :about
end
get '/work' do
	erb :work
end
get '/lab' do
	erb :lab
end
get '/connect' do
	erb :connect
end

post '/connect' do  
  n = Messages.new  
  n.message = params[:message]
  n.name = params[:name]
  n.email_address = params[:email_address]  
  n.created_at = Time.now  
  n.save  
  redirect '/connect'  
end 
get '/adminadminadmin' do  
  @notes = Messages.all :order => :id.desc  
  @title = 'All Messages'  
  erb :admin 
end 



