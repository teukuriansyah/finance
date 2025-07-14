package controller
import (
  "github.com/gin-gonic/gin"
  "server/model"
  "server/dto"
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
  c.JSON(201,gin.H{
    "statusCode":201,
    "data":data,
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