const router = require("express").Router();

router.get("./index", (req, res, next)=>{
    try{

        res.json({ msg: "index ma aais"});
    }catch (e) {
next(e);
    };
});


module.exports = router