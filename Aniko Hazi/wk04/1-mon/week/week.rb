
require 'pry'

days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

first_day = days_of_the_week.pop
#first_day = days_of_the_week.last

days_of_the_week.unshift(first_day)




#week_days = days_of_the_week.first(6).drop(1) #delete_at(6)
week_days = days_of_the_week[1..-2]


weekend_days = Array.new(2)
weekend_days[0] = days_of_the_week.last
weekend_days[1] = days_of_the_week.first

#weekend_days = (days_of_the_week.first).concat(days_of_the_week.last)

#puts week_days
#puts weekend_days


new_days_of_the_week = [week_days, weekend_days]

new_days_of_the_week.delete_at(1)


#binding.pry
new_days_of_the_week[0].sort!

puts new_days_of_the_week
