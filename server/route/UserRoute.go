package route
import (
  "server/controller"
  "github.com/gin-gonic/gin"
  )

func UserRoute(c*gin.Engine) {
  c.POST("/loginUser",controller.LoginUser)
  c.POST("/registerUser",controller.RegisterUser)
  c.GET("/user",controller.GetUser)
}