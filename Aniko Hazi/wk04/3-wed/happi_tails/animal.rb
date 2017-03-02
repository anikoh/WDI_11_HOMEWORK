
class Animal
attr_accessor :name

  def initialize(new_name, new_age, new_gender, new_species)

    @name = new_name
    @age = new_age
    @gender = new_gender
    @species = new_species
    @toys = []
  end

end
