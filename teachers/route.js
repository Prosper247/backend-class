const express = require('express');
const router = express.Router();
const Teacher = require('./model');


//url/api/newteacher

router.post('/newTeacher', async (req, res)=>{
    const data = new Teacher({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        username: req.body.username
    });
    try {
        const dataTosave = await data.save();
        res.status(200).json(dataTosave)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
});

   //url/api/getteacher
router.get('/getTeacher', async (req, res)=>{
    try {
        const data = await Teacher.find();
         res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});


//url/api/getTeacher/2
router.put('/getTeacher/:id', async (req, res)=>{
    try {
        const id = req.params.id;
        const dataToGet = req.body;
        console.log('Id = ' + id);
        const result = await Teacher.findById(id)
         res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});


//url/api/editStudents/2
router.put('/editTeacher/:id', async (req, res)=>{
    try {
        const id = req.params.id;
        const dataToEdit = req.body;
        const options = {new: true}
        console.log('Id = ' + id);
        const result = await Teacher.findByIdAndUpdate(id, dataToEdit, options)
         res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});


//url/api/deleteStudents/2
router.delete('/deleteTeacher/:id', async (req,res)=>{
    try {
        const id = req.params.id;
        console.log('Id = ' + id);
        const dataToDelete = await Teacher.findByIdAndDelete(id);
        res.status(200).send(`data deleted successfully`)
    }
    catch(error) {
        res.status(400).json({message: error.message})
    }


});

module.exports = router

