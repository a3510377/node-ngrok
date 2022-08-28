@ECHO OFF

docker build -t node-ngrok -f Dockerfile .
docker tag node-ngrok a3510377/node-ngrok
docker push a3510377/node-ngrok

docker build -t node-ngrok:linux-arm64 -f Dockerfile --platform linux/arm64 .
docker tag node-ngrok:linux-arm64 a3510377/node-ngrok:linux-arm64
docker push a3510377/node-ngrok:linux-arm64
