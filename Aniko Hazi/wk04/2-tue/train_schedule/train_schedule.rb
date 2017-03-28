
require 'pry'

train_lines = {
  "Alamain": {
  stations: ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"]
  },
  "Glen Waverley": {
  stations: ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"]
  },
  "Sandringham": {
  stations: ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
  },
  "Hurstbidge": {
  stations: ["Ivanhoe", "Fairfield", "Dennis", "Eltham", "Clifton Hill", "Collingwood", "Richmond", "Heidelberg"]
  },
  "Frankston": {
  stations: ["Ormond", "Highett", "Parkdale", "Richmond", "Seaford", "Caulfield"]
  },
}

puts "Enter origin:"
origin = gets.chomp

puts "Enter destination:"
dest = gets.chomp

train_lines.each do |line|
  if line[:stations].include?(origin)
    origin_line = line
end





#train_lines[:Alamain][:stations][3]
#train_lines[:Alamain][:stations][min..max]
#train_lines[:Alamain][:stations][min..max].reverse
binding.pry
