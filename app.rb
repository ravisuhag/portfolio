require 'rubygems'
require 'bundler/setup'
require 'sinatra'
require 'data_mapper'
enable :sessions

get '/' do
	erb :index
end
get '/personal' do
	erb :personal
end
get '/webdev' do
	erb :webdev
end