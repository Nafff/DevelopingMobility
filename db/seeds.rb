# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Routine.destroy_all
Stretch.destroy_all

@admin = User.create!(username: 'Chickadee', email: 'chickadee@email.com', password: '123456', profile_picture: 'https://www.allaboutbirds.org/guide/assets/photo/302472691-480px.jpg')

puts "#{User.count} users created"

10.times do
  @stretch1 = Stretch.create!(name: 'Kneeling Lunge', video_url: 'https://www.youtube.com/watch?v=W_ITvIc3G0I', picture_url: 'https://www.mensjournal.com/wp-content/uploads/mf/1280-slider-lunge.jpg?quality=86&strip=all', muscle_worked: 'Hamstrings', body_part: 'Legs', description: 'Test Desc')
end

puts "#{Stretch.count} stretches created"

@routine1 = Routine.create!(name: 'Test Routine', user: @admin)

puts "#{Routine.count} routines created"