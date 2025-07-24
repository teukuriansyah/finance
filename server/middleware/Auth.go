package middleware
import (
  "github.com/golang-jwt/jwt/v5"
  "github.com/joho/godotenv"
  "time"
  "os"
  "server/dto"
  )

func CreateToken(dataPayload dto.User) string {
  err := godotenv.Load()
  if err != nil {
    fmt.Print("Error loading .env file")
  }
  
  secretKey := os.Getenv("secretKey")
  
  secretKey := []byte(secretKey)
  token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
    "id":dataPayload.Id,
    "name":dataPayload.Name,
    "email":dataPayload.Email,
    "exp":time.Now().Add(time.Hour).Unix(),
    "iat":time.Now().Unix(),
  })
  tokenString, err := token.SignedString(secretKey)
  if(err != nil) {
    return "Error"
  }
  return tokenString
}