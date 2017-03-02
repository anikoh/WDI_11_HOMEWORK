require 'pry'
require_relative 'client'
require_relative 'animal'

#call shelter, it shows a menu, select option by number
# if else statements
#arrays are inside

# display all animals
# display all clients
# create an animal
# create an client


animal_list = [
Animal.new("Doggo", 7, "m", "dog"),
Animal.new("Bubbles", 5, "m", "chimp"),
Animal.new("Fluffy2", 8, 'm', 'croc')
]


client_list =[
Client.new("Adam", 3, 45, [Animal.new("Hops", 2, "f", "rabbit"), Animal.new("Fluffy", 1, "f", "snake")]),
Client.new("Bob", 0, 21, []),
Client.new("Carol", 7, 30, [Animal.new("Boots", 2, "f", "cat")])
]



puts "Enter 1 to display all animals,"
puts "2 to display all clients,"
puts "3 to create an animal,"
puts "4 to create a client,"
puts "5 to adopt an animal,"
puts "6 to return an animal to the shelter,"
puts "or q to quit"
input = gets.chomp


while input != "q"
  if input == "1"
    animal_list.each do |animal|
      puts animal.name
    end

  elsif input == "2"
    client_list.each do |client|
      puts client.name
    end
  elsif input == "3"
    puts "Please enter name"
    animal_name = gets.chomp
    puts "Please enter age"
    animal_age = gets.chomp.to_i
    puts "Please enter gender"
    animal_gender = gets.chomp
    puts "Please enter species"
    animal_species = gets.chomp
    animal = Animal.new(animal_name, animal_age, animal_gender, animal_species)
    animal_list << animal
  elsif input == "4"
    puts "Please enter name"
    client_name = gets.chomp
    puts "Please enter number of children"
    client_child = gets.chomp.to_i
    puts "Please enter age"
    client_age = gets.chomp.to_i

    client_pets = []
    puts "Do you have any pets? y/n"
    #pets_input = gets.chomp
    # Enter pets as an array of pet attributes, separated by eg
    # "Bunny", 2, "f", "croc"."Bunny2", 5, "m", "croc"
    # pets_input.split("\n")
    # pets_input.each do |elem|
    #   split(",")
    # end

    while gets.chomp != "n"
      puts "Please enter pet name"
      animal_name = gets.chomp
      puts "Please enter pet age"
      animal_age = gets.chomp.to_i
      puts "Please enter pet gender"
      animal_gender = gets.chomp
      puts "Please enter pet species"
      animal_species = gets.chomp
      animal = Animal.new(animal_name, animal_age, animal_gender, animal_species)
      client_pets << animal

      puts "Do you have any more pets? y/n"
    end

      client = Client.new(client_name, client_child, client_age, client_pets)
      client_list << client
  elsif input == "5"
    puts "Please enter client index"
    client_index = gets.chomp.to_i
    puts "Please enter animal index"
    animal_index = gets.chomp.to_i
    adoptee = animal_list.delete_at(animal_index)
    client_list[client_index].pets << adoptee
  elsif input == "6"
    puts "Please enter client index"
    client_index = gets.chomp.to_i
    puts "Please enter animal index"
    animal_index = gets.chomp.to_i
    adoptee = client_list[client_index].pets.delete_at(animal_index)
    animal_list << adoptee
  end

  puts "Enter 1 to display all animals,"
  puts "2 to display all clients,"
  puts "3 to create an animal,"
  puts "4 to create a client,"
  puts "5 to adopt an animal,"
  puts "6 to return an animal to the shelter,"
  puts "or q to quit"
  input = gets.chomp

end


#client_list.push(client)

#class Shelter
  # attr_accessor :animals, :clients
  # def initialize()
  #   @animals = animal_list
  #   @clients = client_list
  # end

  # def add_client(client)
  #   client_list << client
  # end
  #
  # def add_animal(animal)
  #   animal_list << animal
  # end
  #
  # def display_clients
  #   client_list.each do |client|
  #     puts client.name
  #   end
  #
  # end
  #
  # def display_animals
  #   animal_list.each do |animal|
  #     puts animal.name
  #   end
  #
  # end
#end


#class Shelter
