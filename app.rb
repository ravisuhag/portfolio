require 'rubygems'
require 'bundler/setup'
require 'sinatra'
require 'data_mapper'
require 'erb'
enable :sessions


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



