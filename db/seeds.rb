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

Stretch.create!(name: 'Lateral Neck Flexion', video_url: 'https://www.youtube.com/watch?v=W_ITvIc3G0I', picture_url: 'https://www.mensjournal.com/wp-content/uploads/mf/1280-slider-lunge.jpg?quality=86&strip=all', muscle_worked: 'Levator Scapulae', body_part: 'Neck', description: 'Stand with your feet hip-width apart, toes pointing forward or turned slightly outwards. Brace your core without arching your back. Slowly draw your right ear towards your right shoulder stopping when you feel the stretch. Hold the stretch for 5-10 seconds. Slowly return to start position and repeat on the left side.')

Stretch.create!(name: 'Neck Flexion and Extension', video_url: 'https://www.youtube.com/watch?v=W_ITvIc3G0I', picture_url: 'https://www.mensjournal.com/wp-content/uploads/mf/1280-slider-lunge.jpg?quality=86&strip=all', muscle_worked: 'Levator Scapulae', body_part: 'Neck', description: 'Stand with your feet hip-width apart, toes pointing forward or turned slightly outwards. Brace your core without arching your back. Slowly drop your chin toward your chest, think of making a double chin by pressing your chin into your neck. Hold for 15-30 seconds and slowly return to starting position. Slowly bring the base of your skull towards your back, looking towards the ceiling. Hold for 5-10 seconds and return to starting position. Alternate forward and back.')

Stretch.create!(name: 'Underarm Shoulder Stretch', video_url: 'https://www.youtube.com/watch?v=TmR88jZkPA8', picture_url: 'https://www.mensjournal.com/wp-content/uploads/mf/1280-slider-lunge.jpg?quality=86&strip=all', muscle_worked: 'Rotator Cuffs', body_part: 'Shoulders', description: 'While seated on the ground, place your hands (palms facing down) behind you, about shoulder width apart with your thumbs pointing away from each other. From this position slowly slide your hips away from your hands as far as possible and hold for about 30 seconds. As your mobility improves, your hands can be placed narrower than shoulder width, so that eventually they are touching.')

Stretch.create!(name: 'Kneeling Lat Stretch', video_url: 'https://www.youtube.com/watch?v=W_ITvIc3G0I', picture_url: 'https://www.mensjournal.com/wp-content/uploads/mf/1280-slider-lunge.jpg?quality=86&strip=all', muscle_worked: 'Rotator Cuffs', body_part: 'Shoulders', description: 'Kneel on an exercise mat or floor poistioning your knees and feet hip-width. Brace your core. Slowly lean forward while bending at the hips and place your arms on an elevated surface. Lean forward and "push" your head through your shoulders to feel the stretch.')

Stretch.create!(name: 'I, Y, T Stretch', video_url: 'https://www.youtube.com/watch?v=W_ITvIc3G0I', picture_url: 'https://www.mensjournal.com/wp-content/uploads/mf/1280-slider-lunge.jpg?quality=86&strip=all', muscle_worked: 'Anterior Deltoids', body_part: 'Shoulders', description: 'Lie flat on your back and maintain a bent knee position. Brace your core. Bring your arms overhead, keeping elbows extended, til you reach a point of tension. From starting position bring arms out in the same movement in a 45 degree angle. From the same starting position raise your arms out in a T position.')

Stretch.create!(name: 'High Plank T-spine Rotation', video_url: 'https://www.youtube.com/watch?v=W_ITvIc3G0I', picture_url: 'https://www.mensjournal.com/wp-content/uploads/mf/1280-slider-lunge.jpg?quality=86&strip=all', muscle_worked: 'Posterior Deltoids', body_part: 'Shoulders', description: 'Start in a push-up position with hands under the shoulders and legs straight. Brace your core and press one arm into the floor. At the same time, lift the opposite hand up and twist the hips and shoulders to raise the arm up towards the ceiling. Bring the arm down and repeat with the other side.')

Stretch.create!(name: 'Cat Cow', video_url: 'https://www.youtube.com/watch?v=W_ITvIc3G0I', picture_url: 'https://www.mensjournal.com/wp-content/uploads/mf/1280-slider-lunge.jpg?quality=86&strip=all', muscle_worked: 'Trapezius', body_part: 'Back', description: 'Kneel on an exercise mat or floor with knees and feet hip width apart. Place hands directly under your shoulders to you are in a table position. Cat phase: Gently exhale and contract your abdominal muscles pushing your spine upwards towards the ceiling. Hold for 10-15 seconds. Cow phase: Slowly relax and yeild to the effects of gravity. Let your stomach fall towards the floor (increasing the arch of your back) and let your shoulder blades fall togather. Hold for 10-15 seconds before returning to start.')

Stretch.create!(name: 'Shoulder Packing', video_url: 'https://www.youtube.com/watch?v=W_ITvIc3G0I', picture_url: 'https://www.mensjournal.com/wp-content/uploads/mf/1280-slider-lunge.jpg?quality=86&strip=all', muscle_worked: 'Trapezius', body_part: 'Back', description: 'Stand with your feet hip-width apart, toes pointing forward. Brace your core. Exhale and depress and retract your scapulae (pull shoulders down and back) without arching your low back. Hold for 5-10 seconds. Repeat.')

Stretch.create!(name: '90 Lat Stretch', video_url: 'https://www.youtube.com/watch?v=W_ITvIc3G0I', picture_url: 'https://www.mensjournal.com/wp-content/uploads/mf/1280-slider-lunge.jpg?quality=86&strip=all', muscle_worked: 'Latissimus Dorsi', body_part: 'Back', description: 'Stand with your feet hip-width apart and arms at your sides. Brace your core. With a slight bend in the knee, bend forward at the hips and place your hands on a table while keeping the arms straight. Keep your legs directly under your hips while leaning back into your hips, straightening your legs and keeping a flat back. Keep your chin tucked into your neck to stabilize your spine. Hold the stretch position for 15-30 seconds.')

Stretch.create!(name: 'Rhomboid Stretch', video_url: 'https://www.youtube.com/watch?v=W_ITvIc3G0I', picture_url: 'https://www.mensjournal.com/wp-content/uploads/mf/1280-slider-lunge.jpg?quality=86&strip=all', muscle_worked: 'Rhomboids', body_part: 'Back', description: 'Bring arm across the front of the body. Hold elbow with the opposite arm. Gently pull across the chest until a stretch is felt in the back of the shoulder. Hold for 15-30 seconds. Repeat with other arm.')

Stretch.create!(name: 'Cobra Stretch', video_url: 'https://www.youtube.com/watch?v=W_ITvIc3G0I', picture_url: 'https://www.mensjournal.com/wp-content/uploads/mf/1280-slider-lunge.jpg?quality=86&strip=all', muscle_worked: 'Erector Spine', body_part: 'Back', description: 'Lie prone on your stomach with your hands by your sides, positioned directly under your shoulders and hands facing forward. Gently exhale and press your hips into the floor and pull your chest away from the ground maintaining hip stability. Your low back with arch. Hold this position for 15-30 seconds. Gently relax and low your upper body to rest back upon the floor.')

Stretch.create!(name: 'Standing Bicep Stretch', video_url: 'https://www.youtube.com/watch?v=W_ITvIc3G0I', picture_url: 'https://www.mensjournal.com/wp-content/uploads/mf/1280-slider-lunge.jpg?quality=86&strip=all', muscle_worked: 'Biceps', body_part: 'Arms', description: 'Stand with your feet hip-width apart and arms at your sides. Brace your core. Interlace your hands at the base of your spine. Straighten your arms and turn your palms facing down towards the floor. Raise your arms as high as you can. Hold this position for 30-60 seconds. Slowly return to starting position and repeat.')

Stretch.create!(name: 'Overheard Triceps Stretch', video_url: 'https://www.youtube.com/watch?v=W_ITvIc3G0I', picture_url: 'https://www.mensjournal.com/wp-content/uploads/mf/1280-slider-lunge.jpg?quality=86&strip=all', muscle_worked: 'Triceps', body_part: 'Arms', description: 'Stand with your feet hip-width apart and arms at your sides. Brace your core. Put your right arm over your head with your elbow straight up inline with your spine. Reach your left arm over your head and grab onto your right elbow. Gently push down on the elbow until you feel a stretch. Hold 15-30 seconds. Switch arms and repeat.')

Stretch.create!(name: 'Overheard Triceps Stretch', video_url: 'https://www.youtube.com/watch?v=W_ITvIc3G0I', picture_url: 'https://www.mensjournal.com/wp-content/uploads/mf/1280-slider-lunge.jpg?quality=86&strip=all', muscle_worked: 'Triceps', body_part: 'Arms', description: 'Stand with your feet hip-width apart and arms at your sides. Brace your core. Put your right arm over your head with your elbow straight up inline with your spine. Reach your left arm over your head and grab onto your right elbow. Gently push down on the elbow until you feel a stretch. Hold 15-30 seconds. Switch arms and repeat.')

Stretch.create!(name: 'Kneeling Lunge', video_url: 'https://www.youtube.com/watch?v=W_ITvIc3G0I', picture_url: 'https://www.mensjournal.com/wp-content/uploads/mf/1280-slider-lunge.jpg?quality=86&strip=all', muscle_worked: 'Hamstrings', body_part: 'Legs', description: 'Test Desc')

puts "#{Stretch.count} stretches created"

@routine1 = Routine.create!(name: 'Test Routine', user: @admin)

puts "#{Routine.count} routines created"