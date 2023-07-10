const Statistics = require("../schema/dashboardSchema");


const createStat = async({body})=>{
    try {
        const date = new Date();
        const data = await Statistics.create({
            ...body,
            createdAt: date,
            updatedAt: date,
        })
        return data;
    } catch (error) {
        return error.message
    }
};

const getStats = async () =>{
    try{
        const data = await Statistics.find({});
        return data;
    }catch(error){
        return error.message;

    }
};

module.exports = {createStat, getStats};