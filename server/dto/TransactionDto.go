package dto
import ("gorm.io/gorm")

type Transaction struct {
  gorm.Model
  IdUser string `json:"idUser" gorm:"not null"` 
  Amount int64 `json:"amount" gorm:"not null"`
  IsIncrease bool `json:"isIncrease" gorm:"not null"`
}