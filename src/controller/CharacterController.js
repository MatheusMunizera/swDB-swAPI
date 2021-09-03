
const CharacterModel = require('../model/CharacterModel');

class CharacterController {

     async add(req, res){
         const character = new CharacterModel(req.body);
         await character
                 .save()
                 .then(response => {
                     return res.status(200).json(response);
                 })
                 .catch(err => {
                     return res.status(500).json(err)
                 });
     }

     async update(req, res){ // Atualiza baseado no _ID
         await CharacterModel.findByIdAndUpdate({'_id': req.params.id}, req.body, {new: true}) // New:true para devolver info ja atualizada
            .then(response =>{
                return res.status(200).json(response);
            }) 
            .catch(err =>{
                return res.status(500).json(err)
            })
     }  

     async getAll(req,res){
         const filter = {};
         await CharacterModel.find(filter)
            .sort('id')
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(err => {
                return res.status(500).json(err);
            })

    }

    async findById(req, res){
        const filter = {id: req.params.id};
        await CharacterModel.find(filter)
            .then(response => {
                if(response)
                    return res.status(200).json(response);
                else{
                    return res.status(404).json( {error: 'O ID BUSCADO NAO EXISTE'});
                }
            })
            .catch(err => {
                return res.status(500).json(err)
            })
    }
    
    async delete(req, res){ // Deleta baseado no _ID
        await CharacterModel.deleteOne({'_id': req.params.id})
            .then(response=>{
                return res.status(200).json(response);
            })
            .catch(err => {
                return res.status(500).json(err)
            })
    }

   /*
   
    '$ne': não existe
    '$in: se existe
    '$eq': se é igual
    '$gt': maior que
    '$gte': maior ou igual que
    '$lte': menor ou igual que
    '$lt': menor que


    */
}

module.exports = new CharacterController();