const router = require("express").Router();
const blogController = require("./blog.controller");

router.get("/", (req, res, next) =>{
    try { 
        res.json({msg: "hello from blogreoutw"});

    } catch (e) {
        next(e)
    }
})



router.post("/", async(req, res, next)=> {
    try{
        const data = req.body;
        data.time = Math.floor(data.words / 238);
        console.log({data});
        const result = await blogController.create(data);
        res.json({msg: result});
    } catch (e) {
        next(e);
    }

    
})


module.exports = router;