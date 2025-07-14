package controller

import (
  "github.com/gin-gonic/gin"
  "server/dto"
  )

func GetTransaction(c*gin.Context) {
  c.JSON(200,gin.H{
    "statusCode":200,
    "data":"data",
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
  c.JSON(201,gin.H{
    "statusCode":201,
    "data":dataBody,
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
  c.JSON(201,gin.H{
    "statusCode":201,
    "data":dataBody,
    "message":"Put transaction with id " + id + " successfully",
  })
}

func RemoveTransaction(c*gin.Context) {
  id := c.Param("id")
  c.JSON(200,gin.H{
    "statusCode":200,
    "message":"Remove transaction with id " + id + " successfully",
  })
}
