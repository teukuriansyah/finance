package controller

import (
  "github.com/gin-gonic/gin"
  "server/model"
  "server/dto"
  "server/middleware"
  "fmt"
  )

func GetTransaction(c*gin.Context) {
  idUser := c.Param("idUser")
  
  token,err := middleware.VerifyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IloyRmxkV3hqWVc1MGFXdEFaMjFoYVd3dVkyOXQiLCJleHAiOjE3NTM0NTY1OTksImlhdCI6MTc1MzQ1Mjk5OSwiaWQiOiI3IiwibmFtZSI6IkdhZXVsIn0.PPF1lCVtYq63gPM5Y-xgZPAoGI3P73noluaEYYM-wUw")
  
  fmt.Println(token)
  fmt.Println(err)
  
  err,data := model.GetTransactionByIdUser(idUser)
  if(err != nil) {
    c.JSON(500,gin.H{
      "statusCode":500,
      "message":"Get transaction failed",
    })
    return;
  }
  if(len(data) == 0) {
    c.JSON(200,gin.H{
      "statusCode":200,
      "data":[]dto.Transaction{},
      "message":"Get transaction successfully",
    })
    return;
  }
  c.JSON(200,gin.H{
    "statusCode":200,
    "data":data,
    "message":"Get transaction successfully",
  })
}

func AddTransaction(c*gin.Context) {
  var dataBody dto.Transaction
  if err := c.ShouldBindJSON(&dataBody); err != nil {
    c.JSON(500,gin.H{
      "statusCode":500,
      "message":"Add transaction failed",
    })
    return;
  }
  err := model.PostTransaction(&dataBody);
  if(err != nil) {
    c.JSON(500,gin.H{
      "statusCode":500,
      "message":"Add transaction failed",
    })
    return;
  }
  c.JSON(201,gin.H{
    "statusCode":201,
    "message":"Add transaction successfully",
  })
}

func PutTransaction(c*gin.Context) {
  id := c.Param("id")
  var dataBody dto.Transaction
  if err := c.ShouldBindJSON(&dataBody); err != nil {
    c.JSON(500,gin.H{
      "statusCode":500,
      "message":"Put transaction failed",
    })
    return;
  }
  err := model.UpdateTransaction(id,dataBody)
  if(err != nil) {
    c.JSON(500,gin.H{
      "statusCode":500,
      "message":"Put transaction with id " + id + " failed",
    })
  }
  
  c.JSON(201,gin.H{
    "statusCode":201,
    "message":"Put transaction with id " + id + " successfully",
  })
}

func RemoveTransaction(c*gin.Context) {
  id := c.Param("id")
  err := model.DeleteTransaction(id)
  if(err != nil) {
    c.JSON(500,gin.H{
      "statusCode":500,
      "message":"Remove transaction with id " + id + " failed",
    })
    return
  }
  c.JSON(200,gin.H{
    "statusCode":200,
    "message":"Remove transaction with id " + id + " successfully",
  })
}