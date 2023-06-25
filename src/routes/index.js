
const {Router}= require('express');
const router =Router()


router.get("/FaC/:id",(req,res)=>{
   const{id} = req.params
   const Celsius = {Valor:(Number(id)-32)*(5/9)}
   const C_json = JSON.stringify(Celsius)
   res.send(C_json)
})

router.get("/CaF/:id",(req,res)=>{
    const{id} = req.params
    const Fa = {Valor:((9*Number(id))/5)+32}
    const Fa_json = JSON.stringify(Fa)
    res.send(Fa_json)
 })

 router.get("/CaK/:id",(req,res)=>{
    const{id} = req.params
    const K = {Valor:Number(id)+273.15}
    const K_json= JSON.stringify(K)
    res.send(K_json)
 })

 router.get("/KaC/:id",(req,res)=>{
    const{id} = req.params
    const C = {Valor:Number(id)-273.15}
    const C_json = JSON.stringify(C)
    res.send(C_json)
 })







module.exports = router