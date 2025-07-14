package dto

type Transaction struct {
  IdUser uint `json:"idUser"` 
  Amount int64 `json:"amount"`
  IsIncrease bool `json:"isIncrease"`
}