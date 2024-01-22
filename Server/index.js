import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

const courseURL=process.env.URL
console.log(courseURL);
const port = 4000

const Schema=mongoose.Schema

const CourseSchema = new Schema({
  image:{type:String, required:true},
  title:{type:String, required:true},
  info:{type:String, required:true},
  image2:{type:String, required:true},
  author:{type:String, required:true},
  price:{type:Number, required:true}
  });

const Courses=mongoose.model('Course',CourseSchema)

app.get('/', async(req, res) => {
    try {
        const allCourse=await Courses.find({})
        res.send(allCourse)
    } catch (error) {
        res.status(500).json({message:error})    
    }
  
})

app.get('/:id', async(req, res) => {
    try {
        const {id}=req.params
        const course=await Courses.findById(id)
        res.send(course)
    } catch (error) {
        res.status(500).json({message:error})    
    }
  
})

app.post('/', async (req, res) => {
    try {
        const course = new Courses(req.body)
        await course.save()
        res.send(course)
    } catch (error) {
        res.status(500).json({ messaage: error })

    }

})

app.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const course=await Courses.findByIdAndDelete(id)
        res.status(200).json({ messaage: "deleted" })
    } catch (error) {
        res.status(500).json({ messaage: error })

    }

})

mongoose.connect(courseURL)
  .then(() => console.log('Connected!'))
  .catch(() => console.log('db not connect'));
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})