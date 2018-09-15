import Utils from './Utils'


class InstituteModel{
    constructor( name,address ){
        this.id =Utils.guid();
        this.name=name;
        this.address=address;

    }
}
module.exports = InstituteModel;