const mongoose = require('mongoose')

const connectDB = async () => {

  try {
    const dbUrl = `mongodb+srv://${encodeURIComponent(process.env.DB_USER)}:${encodeURIComponent(process.env.DB_PASSWORD)}@${process.env.DB_HOST}/?retryWrites=true&w=majority`
    const conn = await mongoose.connect(dbUrl, {})
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB
