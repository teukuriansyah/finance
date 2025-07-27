package model
import (
  "server/service"
  "server/dto"
  )

func UserModelRegister(data *dto.User)(error) {
  _,db := service.DatabaseService()
  result := db.Create(&data)
  if(result.Error != nil) {
    return result.Error
  }
  return nil
}

func UserModelLogin(email string) (error,[]dto.User){
  _,db := service.DatabaseService()
  var user []dto.User
  result := db.Where("email=?",email).First(&user)
  if(result.Error != nil) {
    return result.Error,nil
  }
  return nil,user
}

func UserModel (id string) (error,[]dto.User) {
  _,db := service.DatabaseService()
  var user []dto.User
  result := db.Where("id=?",id).First(&user)
  if(result.Error != nil) {
    return result.Error,nil
  }
  return nil,user
}