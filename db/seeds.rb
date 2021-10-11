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


@stretch1 = Stretch.create!(name: 'Kneeling Lunge', video_url: 'https://www.youtube.com/watch?v=W_ITvIc3G0I', picture_url: 'https://www.mensjournal.com/wp-content/uploads/mf/1280-slider-lunge.jpg?quality=86&strip=all', muscle_worked: 'Hamstrings', body_part: 'Legs', description: 'Test Desc')

@stretch2 = Stretch.create!(name: 'Underarm Shoulder Stretch', video_url: 'https://www.youtube.com/watch?v=TmR88jZkPA8', picture_url: 'https://www.mensjournal.com/wp-content/uploads/mf/1280-slider-lunge.jpg?quality=86&strip=all', muscle_worked: 'Rotator Cuffs', body_part: 'Shoulders', description: 'While seated on the ground, place your hands (palms facing down) behind you, about shoulder width apart with your thumbs pointing away from each other. From this position slowly slide your hips away from your hands as far as possible and hold for about 30 seconds. As your mobility improves, your hands can be placed narrower than shoulder width, so that eventually they are touching.')

@stretch3 = Stretch.create!(name: 'Kneeling Lat Stretch', video_url: 'https://www.youtube.com/watch?v=W_ITvIc3G0I', picture_url: 'https://www.mensjournal.com/wp-content/uploads/mf/1280-slider-lunge.jpg?quality=86&strip=all', muscle_worked: 'Rotator Cuffs', body_part: 'Shoulders', description: 'Kneel on an exercise mat or floor poistioning your knees and feet hip-width. Brace your core. Slowly lean forward while bending at the hips and place your arms on an elevated surface. Lean forward and "push" your head through your shoulders to feel the stretch.')

puts "#{Stretch.count} stretches created"

@routine1 = Routine.create!(name: 'Test Routine', user: @admin)

puts "#{Routine.count} routines created"