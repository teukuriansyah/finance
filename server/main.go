package main
import (
  "github.com/gin-contrib/cors"
  "github.com/gin-gonic/gin"
  "server/service"
  "server/route"
  "server/dto"
  "fmt"
  )

func main() {
  app := gin.Default()
  _,db := service.DatabaseService()
  
  app.Use(cors.Default())
  db.AutoMigrate(&dto.User{})
  
  route.UserRoute(app)
  
  fmt.Print("Server is running on port 3000")
  app.Run(":3000")
}