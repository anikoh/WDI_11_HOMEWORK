



puts "Enter minimum!"
min = gets.to_i

puts "Enter maximum!"
max = gets.to_i


random_number = rand(min..max)

puts "Guess the number!"
guess = gets.to_i

while guess != random_number
  if guess < random_number
    puts "Guess higher!"
  else
    puts "Guess lower!"
  end
  guess = gets.to_i
end

puts "Congrats you got it!"
