package middleware
import (
  "github.com/golang-jwt/jwt/v5"
  "server/dto"
  "time"
  "os"
  "fmt"
  )

func CreateToken(dataPayload dto.User) string {
  secretKeyEnv := os.Getenv("secretKey")
  
  secretKey := []byte(secretKeyEnv)
  token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
    "id":dataPayload.Id,
    "name":dataPayload.Name,
    "email":dataPayload.Email,
    "exp":time.Now().UTC().Add(24 * time.Hour).Unix(),
    "iat":time.Now().UTC().Unix(),
  })
  
  tokenString, err := token.SignedString(secretKey)
  if(err != nil) {
    return "Error"
  }
  
  return tokenString
}

func VerifyToken(tokenString string) (*jwt.Token, error) {
  secretKeyEnv := os.Getenv("secretKey")
  
  token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		
		return []byte(secretKeyEnv), nil
	})

	if err != nil {
		return nil, err
	}

	return token, nil
}