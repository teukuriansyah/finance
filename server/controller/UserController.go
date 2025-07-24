package controller
import (
  "github.com/gin-gonic/gin"
  "server/model"
  "server/dto"
  "server/middleware"
  )

func LoginUser(c*gin.Context) {
  var dataBody dto.User
  if err := c.ShouldBindJSON(&dataBody); err != nil {
    c.JSON(500,gin.H{
      "statusCode":500,
      "message":"Login failed",
    })
    return;
  }
  err, data := model.UserModelLogin(dataBody.Email)
  if(err != nil) {
    c.JSON(404,gin.H{
      "statusCode":404,
      "message":"Login failed",
    })
    return;
  }
  if(dataBody.Password != data[0].Password) {
    c.JSON(404,gin.H{
      "statusCode":404,
      "message":"Login failed",
    })
    return;
  }
  
  token := middleware.CreateToken(data[0])
  if(token == "Error") {
    c.JSON(500,gin.H{
      "message":"Unauthorized",
    })
    return;
  }
  c.JSON(201,gin.H{
    "statusCode":201,
    "token":token,
    "message":"Login successfully",
  })
}

func RegisterUser(c*gin.Context) {
  var dataBody dto.User
  if err := c.ShouldBindJSON(&dataBody); err != nil {
    c.JSON(500,gin.H{
      "statusCode":500,
      "message":"Register failed",
    })
    return;
  }
  err := model.UserModelRegister(&dataBody)
  if(err != nil) {
    c.JSON(500,gin.H{
      "statusCode":500,
      "message":"Register failed",
    })
    return;
  }
  c.JSON(201,gin.H{
    "statusCode":201,
    "message":"Register successfully",
  })
}