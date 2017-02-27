


  puts "Enter the first number!"
  num1 = gets().chomp.to_i

  puts "Enter the second number!"
  num2 = gets().chomp.to_i

  puts "+ - * /, or q for quit "
  command = gets().chomp

  while command != 'q'

    if command == '+'
      puts num1 + num2
    elsif command == '-'
      puts num1 - num2
    elsif command == '*'
      puts num1 * num2
    else
      puts num1/ num2
    end


    puts "Enter the first number!"
    num1 = gets().chomp.to_i

    puts "Enter the second number!"
    num2 = gets().chomp.to_i

    puts "+ - * /, or q for quit "
    command = gets().chomp

  end
