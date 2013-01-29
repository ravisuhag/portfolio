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




require 'pony'
require 'haml'
 
 
get '/contact' do
  @errors={}
  haml :contact
end
 
post '/contact' do
  @errors={}
  @errors[:name] = 'No Anon allowed here.' if params[:name].nil? || params[:name].empty?
  @errors[:email] = 'Sinatra needs an email to send your message from!' if params[:email].nil? || params[:email].empty?
  @errors[:message] = 'No message?! Sounds like heavy breathing on the phone to me.' if params[:message].nil? || params[:message].empty?
  
  if @errors.empty?
    Pony.mail(:to=>'suhag.ravi@gmail.com', :from=>"#{params[:email]}", :subject=>"Contact Message", :body=>"#{params[:message]}")
    redirect '/'
  else
    contact
  end
end