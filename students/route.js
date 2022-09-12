const express = require('express');
const router = express.Router();
const Students = require('./model');


//url/api/newstudent

router.post('/newstudent', async (req, res)=>{
    const data = new Students({
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

   //url/api/getStudents
router.get('/getStudents', async (req, res)=>{
    try {
        const data = await Students.find();
         res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});


//url/api/getStudents/2
router.put('/getStudents/:id', async (req, res)=>{
    try {
        const id = req.params.id;
        const dataToGet = req.body;
        console.log('Id = ' + id);
        const result = await Students.findById(id)
         res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});


//url/api/editStudents/2
router.put('/editStudents/:id', async (req, res)=>{
    try {
        const id = req.params.id;
        const dataToEdit = req.body;
        const options = {new: true}
        console.log('Id = ' + id);
        const result = await Students.findByIdAndUpdate(id, dataToEdit, options)
         res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});


//url/api/deleteStudents/2
router.delete('/deleteStudents/:id', async (req,res)=>{
    try {
        const id = req.params.id;
        console.log('Id = ' + id);
        const dataToDelete = await Students.findByIdAndDelete(id);
        res.status(200).send(`data deleted successfully`)
    }
    catch(error) {
        res.status(400).json({message: error.message})
    }


});

module.exports = router

































