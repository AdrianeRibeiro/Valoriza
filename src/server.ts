import express from "express"

const app = express()

app.get("/test", (request, response) => {
  //request => entrada
  //response => saída

  return response.send("Olá NLW - get")
})

app.post("/test-post", (request, response) => {
  return response.send("Olá NLW - post")
})

app.listen(3000, () => console.log("Server is running NLW"))