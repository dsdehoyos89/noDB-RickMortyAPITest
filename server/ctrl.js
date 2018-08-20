const axios = require('axios');

let favorites = [];

module.exports = {
    

    getFavorites(req,res){
        res.status(200).json(favorites)
    },
    
    addChar(req, res){
        favorites.push(req.body);
        res.status(200).json(favorites);
    },

    deleteChar(req,res){
        deleteId = req.params.id;
        let index = favorites.findIndex(char=>char.id==deleteId);
        favorites.splice(index, 1);
        res.status(200).json(favorites);
    },

    updateName(req,res){
        console.log(req.body);
        favorites.forEach(char=>char.id == req.params.id && Object.assign(char,req.body))
        return res.status(200).json(favorites);
    }
    getComment(req,res){
        console.log(req.body);
        favorites.push(req.body);
        res.status(200).json(favorites)
    }

}
// let data = [];


// const getCharacters = (req, res) => {
//     // console.log(data)
//     // 
//     axios.get("https://rickandmortyapi.com/api/character")
//     // res.status(200).json(data)
//     .then(response=>{
//         // response.status(200).send(response)
//         // console.log(response.data.results);
//         // data=response.data\
//         data.push(response.data.results)
//         console.log(response.data.results)
//         res.status(200).send(data)
//     });


// }
// const addCharacter = (req,res) => {
//     data.push(req.body);
//     res.status(200).send(data)
// }



// module.exports = {
//     getCharacters,
//     addCharacter
// }