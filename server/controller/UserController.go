package controller
import (
  "github.com/gin-gonic/gin"
  "server/model"
  "server/dto"
  )

func LoginUser(c*gin.Context) {
  c.JSON(201,gin.H{
    "statusCode":201,
    "message":"Login successfully",
  })
}

func RegisterUser(c*gin.Context) {
  var dataBody dto.User
  c.ShouldBindJSON(&dataBody)
  model.UserModelRegister(&dataBody)
  c.JSON(201,gin.H{
    "statusCode":201,
    "message":"Register successfully",
  })
}