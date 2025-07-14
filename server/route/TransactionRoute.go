package route
import (
  "server/controller"
  "github.com/gin-gonic/gin"
  )

func TransactionRoute(c*gin.Engine) {
  c.GET("/transaction",controller.GetTransaction)
  c.POST("/transaction",controller.AddTransaction)
  c.PUT("/transaction/:id",controller.PutTransaction)
  c.DELETE("/transaction/:id",controller.RemoveTransaction)
}