require 'pry'

#A

a = ["Anil", "Erik", "Jonathan"]

#1

element = a[1]

#2

a.push("Aniko")

#B

h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}

#1
h[1]

#2
h[:two]

#3
h["two"]

#4
h[3] = "Three"

#5
h[:four] = 4



#C
is = {true => "It's true!", false => "It's false"}


#1
"It's true!"
#2
"It's false"
#3
"It's false"
#4
nil
#5
nil



#D
users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}


#1
users["Jonathan"][:twitter]

#2
users["Jonathan"][:favorite_numbers].push(7)

#3
users["Aniko"] = {:twitter=>"nope", :favorite_numbers=>[1, 2, 3]}

#4
users["Jonathan"][:favorite_numbers]

#5
users["Jonathan"][:favorite_numbers].min

#6
users["Anil"][:favorite_numbers].select do |num|
  num.even?
end

#7
users["Jonathan"][:favorite_numbers] & users["Erik"][:favorite_numbers] & users["Anil"][:favorite_numbers]

#8

all_unique_numbers =users["Jonathan"][:favorite_numbers].concat(users["Erik"][:favorite_numbers])

all_unique_numbers.concat(users["Anil"][:favorite_numbers]).uniq.sort



# all_unique_numbers=[]
#
# users.each do |user|
#   all_unique_numbers.concat([user][:favourite_numbers])
# end
#
# all_unique_numbers.uniq.sort
