package main
import (
  "github.com/gin-contrib/cors"
  "github.com/gin-gonic/gin"
  "github.com/joho/godotenv"
  "server/service"
  "server/route"
  "server/dto"
  "fmt"
  )

func main() {
  err := godotenv.Load()
  if err != nil {
    fmt.Print("Error loading .env file")
  }
  
  app := gin.Default()
  _,db := service.DatabaseService()
  
  app.Use(cors.Default())
  db.AutoMigrate(&dto.User{})
  db.AutoMigrate(&dto.Transaction{})
  
  route.UserRoute(app)
  route.TransactionRoute(app)
  
  fmt.Print("Server is running on port 3000")
  app.Run(":3000")
}