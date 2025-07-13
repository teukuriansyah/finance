package service
import (
  "github.com/joho/godotenv"
  "gorm.io/gorm"
  "gorm.io/driver/mysql"
  "fmt"
  "os"
  )

func DatabaseService() (error,*gorm.DB){
  err := godotenv.Load()
  if err != nil {
    fmt.Print("Error loading .env file")
  }
  
  dsnEnv := os.Getenv("DB_LINK")
  
  dsn := dsnEnv
  db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
  
  if(err != nil) {
    return err,nil
  }
  return nil,db
}