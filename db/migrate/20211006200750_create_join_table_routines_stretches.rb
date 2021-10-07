class CreateJoinTableRoutinesStretches < ActiveRecord::Migration[6.1]
  def change
    create_join_table :routines, :stretches do |t|
      # t.index [:routine_id, :stretch_id]
      # t.index [:stretch_id, :routine_id]
    end
  end
end
