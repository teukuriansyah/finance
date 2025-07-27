package main
import (
  "github.com/gin-contrib/cors"
  "github.com/gin-gonic/gin"
  "github.com/joho/godotenv"
  "server/service"
  "server/route"
  "server/dto"
  "fmt"
  "time"
  )

func main() {
  err := godotenv.Load()
  if err != nil {
    fmt.Print("Error loading .env file")
  }
  
  app := gin.Default()
  _,db := service.DatabaseService()
  
  app.Use(cors.New(cors.Config{
      AllowOrigins:[]string{"*"},
      AllowMethods:[]string{"GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"},
      AllowHeaders:[]string{"Origin", "Content-Length", "Content-Type", "Authorization"},
      ExposeHeaders:[]string{"Content-Length"},
      AllowCredentials: true,
      MaxAge:12 * time.Hour,
  }))
  
  db.AutoMigrate(&dto.User{})
  db.AutoMigrate(&dto.Transaction{})
  
  route.UserRoute(app)
  route.TransactionRoute(app)
  
  fmt.Print("Server is running on port 3000")
  app.Run(":3000")
}