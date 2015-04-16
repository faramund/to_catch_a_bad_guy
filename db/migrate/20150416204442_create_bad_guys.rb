class CreateBadGuys < ActiveRecord::Migration
  def change
    create_table :bad_guys do |t|
      t.decimal :lat
      t.decimal :lng

      t.timestamps
    end
  end
end
