const { createStat, getStats } = require("../controllers/dashboardController");
const {Router} = require("express");


const dashboadRouter = new Router();

dashboadRouter.post("/addData", async(req,res)=>{
    try {
        const data = await createStat(req);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
});

dashboadRouter.get("/getData", async(req,res)=>{
    try {
        const data = await getStats(req);
        res.send(data);
    } catch (error) {
        res.send(error.message)
    }
});


module.exports = dashboadRouter;