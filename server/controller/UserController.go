package controller
import (
  "github.com/golang-jwt/jwt/v5"
  "github.com/gin-gonic/gin"
  "server/middleware"
  "server/model"
  "server/dto"
  "strings"
  "fmt"
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

func GetUser (c*gin.Context) {
  header := c.GetHeader("Authorization")
  
  token,err := middleware.VerifyToken(strings.Split(header," ")[1])
  if(err != nil) {
    c.JSON(401,gin.H{
      "statusCode":401,
      "message":"Unauthorized",
    })
    return;
  }
  
  claims,_ := token.Claims.(jwt.MapClaims)
  
  idUser := claims["id"].(string)
  fmt.Print(idUser)
  err,dataUser := model.UserModel(idUser)
  if(err != nil) {
    c.JSON(404,gin.H{
      "statusCode":404,
      "message":"Not found",
    })
    return;
  }
  c.JSON(200,gin.H{
    "statusCode":200,
    "data":dataUser[0],
    "message":"Get user successfull",
  })
}