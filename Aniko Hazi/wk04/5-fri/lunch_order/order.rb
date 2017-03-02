

class LunchOrder

  attr_accessor :name, :orders

  def initialize(new_name, new_order_list)
    @name =new_name
    @orders = new_order_list
  end
end
