
command = undefined

while command != "q"
  puts "Enter the first number!"
  num1 = gets().to_i

  puts "Enter the second number!"
  num2 = gets().to_i

  puts "+ - * /, or q for quit "
  command = gets()

  if command == "+"
    puts(num1 + num2)
  elsif command == "-"
    puts(num1 - num2)
  elsif command == "*"
    puts num1 * num2
  else
    puts num1/ num2
  end


end
