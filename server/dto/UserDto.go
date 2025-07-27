package dto
import ("gorm.io/gorm")

type User struct {
  gorm.Model
  Id string `json:"id" gorm:"primaryKey;autoIncrement"`
  Name string `json:"name"` 
  Email string `json:"email" gorm:"uniqueIndex;not null"`
  Password string `json:"password" gorm:"not null"`
}