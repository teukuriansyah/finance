package middleware
import (
  "github.com/golang-jwt/jwt/v5"
  "github.com/joho/godotenv"
  // "github.com/gin-gonic/gin"
  "server/dto"
  "time"
  "os"
  "fmt"
  // "errors"
  )

func CreateToken(dataPayload dto.User) string {
  err := godotenv.Load()
  if err != nil {
    fmt.Print("Error loading .env file")
  }
  
  secretKeyEnv := os.Getenv("secretKey")
  
  secretKey := []byte(secretKeyEnv)
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

func VerifyToken(tokenString string) (*jwt.Token, error) {
  err := godotenv.Load()
  if err != nil {
    fmt.Print("Error loading .env file")
  }
  
  secretKeyEnv := os.Getenv("secretKey")
  
  token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		return secretKeyEnv, nil
	})

	if err != nil {
		return nil, err
	}

	return token, nil
}