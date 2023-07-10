const {model, SchemaTypes, Schema} = require("mongoose")

const dashboardSchema = new Schema({
    month:{
        type: SchemaTypes.String,
        required:true
    },
    user:{
        type: SchemaTypes.Array,
        require:true,
        week1:{
            type: SchemaTypes.Number,
            required:true
        },
        week2:{
            type: SchemaTypes.Number,
            required:true
        },
        week3:{
            type: SchemaTypes.Number,
            required:true
        },
        week4:{
            type: SchemaTypes.Number,
            required:true
        }
    },
    guest:{
        type: SchemaTypes.Array,
        require:true,
        week1:{
            type: SchemaTypes.Number,
            required:true
        },
        week2:{
            type: SchemaTypes.Number,
            required:true
        },
        week3:{
            type: SchemaTypes.Number,
            required:true
        },
        week4:{
            type: SchemaTypes.Number,
            required:true
        }
    },
    pie:{
        type: SchemaTypes.Array,
        required:true,
        tees:{
            type: SchemaTypes.Number,
            required:true
        },
        pants:{
            type: SchemaTypes.Number,
            required:true
        },
        shorts:{
            type: SchemaTypes.Number,
            required:true
        },

    },
    stats:{
        type: SchemaTypes.Array,
        required:true,
        revenue: {
            type:SchemaTypes.Number,
            required:true
        },
        transactions: {
            type:SchemaTypes.Number,
            required:true
        },

    },
    createdAt:{
        type: SchemaTypes.String,
        require:true
    },
    updatedAt:{
        type: SchemaTypes.String,
        require:true
    },
});

module.exports = model("statistics", dashboardSchema);