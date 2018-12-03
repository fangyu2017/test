const express=require('express')
const app=express()

const port =process.env.PORT || 5000

  app.get('/',(req,res)=>{
    res.send('今天是充满希望的一天!')
  })
app.listen(port,()=>{
  console.log(`server running on port ${port}`)
})