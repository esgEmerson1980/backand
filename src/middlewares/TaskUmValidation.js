const TaskModel = require('../model/TaskUmModel');
const TaskUmValidation = require('../model/TaskUmModel');
const { isPast } = require('date-fns');

const TaskUmValidation = async (req, res, next) => {

  const { macaddress, funcionario, combustivel, origem, 
          kmInicio, destino, kmFinal, when } = req.body;

  if(!macaddress)
  return res.status(400).json({ error: 'macaddress é obrigatório'});
  else if(!funcionario)
  return res.status(400).json({ error: 'nome é obrigatório'});
  else if(!combustivel)
  return res.status(400).json({ error: 'tipo de combustível é obrigatório'});
  else if(!origem)
  return res.status(400).json({ error: 'origem é obrigatório'});
  else if(!kmInicio)
  return res.status(400).json({ error: 'Km inicial é obrigatório'});
  else if(!destino)
  return res.status(400).json({ error: 'destino é obrigatório'});
  else if(!kmFinal)
  return res.status(400).json({ error: 'Km final é obrigatório'});
  
  else if(!when)
  return res.status(400).json({ error: 'Data e Hora são obrigatórios'});
  
  else{
    let exists;

    if(req.params.id){
      exists = await TaskUmModel.
                    findOne(
                      { '_id': { '$ne': req.params.id },
                        'when': {'$eq': new Date(when) },  
                        'macaddress': {'$in': macaddress}
                      });
    }    
   
  }

}

module.exports = TaskUmValidation;