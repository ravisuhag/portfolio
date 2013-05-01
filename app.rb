require 'rubygems'
require 'bundler/setup'
require 'sinatra'
require 'data_mapper'
require 'erb'


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
