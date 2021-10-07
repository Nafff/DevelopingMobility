class CreateStretches < ActiveRecord::Migration[6.1]
  def change
    create_table :stretches do |t|
      t.string :name
      t.string :video_url
      t.string :picture_url
      t.string :muscle_worked
      t.string :body_part
      t.text :description

      t.timestamps
    end
  end
end
