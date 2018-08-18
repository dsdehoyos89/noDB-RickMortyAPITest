const axios = require('axios');

let data = [];


const getCharacters = (req, res) => {
    // console.log(data)
    // 
    axios.get("https://rickandmortyapi.com/api/character")
    // res.status(200).json(data)
    .then(response=>{
        // response.status(200).send(response)
        // console.log(response.data.results);
        // data=response.data\
        data.push(response.data.results)
        console.log(response.data.results)
        res.status(200).send(data)
    });


}
const addCharacter = (req,res) => {
    data.push(req.body);
    res.status(200).send(data)
}



module.exports = {
    getCharacters,
    addCharacter
}