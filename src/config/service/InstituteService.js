import Realm from 'realm';
import InstituteModel from '../db/model/InstitudeModel';

let repository  = new Realm({


    schema:[{
        primaryKey:'id',
        name:'Institute',
        properties:{
            id:{type:'string',indexed :true},
            name:'string',
            address:'string'
        }
    }]
});


let InstituteService ={
    save:function(institute,callback){
        repository.write(()=>{
repository.create('Institute',institute);
            callback();
        })
    },

getAll:function(){
    repository.objects('Institute');
}


};

module.exports=InstituteService; 
 