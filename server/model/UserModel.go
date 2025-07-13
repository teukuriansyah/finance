package model
import (
  "server/service"
  "server/dto"
  )

func UserModelRegister(data *dto.User) {
  _,db := service.DatabaseService()
  db.Create(&data)
}

func UserModelLogin() {
  _,db := service.DatabaseService()
  db.Find(&dto.User{})
}