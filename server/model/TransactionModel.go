package model
import (
  "server/service"
  "server/dto"
  )

func GetTransactionByIdUser(idUser string)(error,[]dto.Transaction) {
  _,db := service.DatabaseService()
  var dataTransaction []dto.Transaction
  result := db.Where("id_user=?",idUser).Find(&dataTransaction)
  if(result.Error != nil) {
    return result.Error,nil
  }
  return nil,dataTransaction
}

func PostTransaction(dataBody *dto.Transaction)(error) {
  _,db := service.DatabaseService()
  result := db.Create(&dataBody)
  if(result.Error != nil) {
    return result.Error
  }
  return nil
}

func UpdateTransaction(id string, dataBody dto.Transaction)(error) {
  _,db := service.DatabaseService()
  result := db.Where("id=?",id).Updates(dto.Transaction{
    IdUser: dataBody.IdUser,
    Amount: dataBody.Amount,
    IsIncrease: dataBody.IsIncrease,
  })
  if(result.Error != nil) {
    return result.Error
  }
  return nil
}

func DeleteTransaction(id string)(error) {
  _,db := service.DatabaseService()
  result := db.Delete(&dto.Transaction{} ,id)
  if(result.Error != nil) {
    return result.Error
  }
  return nil
}