# It's approaching lunch hour… let's collect orders. Create a new file called `lunch_orders.rb` to complete this exercise.
#
# 1. Create a program that collects lunch orders. Prompt:
#      * **Name for order:** (enter name)
#      * **{name} wants to order:** (enter item)
# 2. Store the name/order data. When storing data, do it in such a way that additional order items may be added for the person's name.
#      * Example: **Greg** can order a *Burger*, and then add *Fries* to his order later.
# 3. After storing data, prompt the user with:
#      * **Add another item to the order? (y/n)**
#      * Repeat steps 1 & 2 if the answer is "y"
# 3. After the user completes adding orders, print out:
#      * **"All orders: {order data}"**
require 'pry'
require_relative 'order'

lunch_orders = []
order = []

puts "Would you like to enter a lunch order? y/n"

while gets.chomp == 'y'


  puts "Name for order:"
  name = gets.chomp
  puts "#{name} wants to order:"
  order << gets.chomp
  puts "add another item to the order? y/n"
  while gets.chomp == "y"
    puts "#{name} wants to order:"
    order << gets.chomp
    puts "add another item to the order? y/n"
  end
  lunch_orders << LunchOrder.new(name, order)
  order = []
  puts "Would you like to enter a lunch order? y/n"
end

#binding.pry

lunch_orders.each do |elem|
  puts "#{elem.name} ordered: #{elem.orders.join(' and ')}"
end
