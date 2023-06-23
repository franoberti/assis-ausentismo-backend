import { connect } from "mongoose"

export async function connectMongo() {
    try {
        await connect(
            "mongodb+srv://assissolutions1:l36Gb0aW77eF8yLH@assiscluster.l6vqoqm.mongodb.net/?retryWrites=true&w=majority"
        )
        console.log("plug to mongo!")
    } catch (e) {
        console.log(e)
        throw 'can not connect to the db'
    }
}