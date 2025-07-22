package controller

import (
  "github.com/gin-gonic/gin"
  "server/model"
  "server/dto"
  )

func GetTransaction(c*gin.Context) {
  idUser := c.Param("idUser")
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