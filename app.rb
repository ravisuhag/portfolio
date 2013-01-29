require 'rubygems'
require 'bundler/setup'
require 'sinatra'
require 'data_mapper'
require 'erb'
enable :sessions

get '/' do
	erb :index
end
get '/personal' do
	erb :personal
end
get '/professional' do
	erb :professional
end
get '/social' do
	erb :social
end
get '/connect' do
	erb :connect
end
