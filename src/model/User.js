import {FireBase} from '..//utils/Firebase'
import { Model } from './Model';

export class User extends Model {

     constructor(id) {

      super();

      this._data = {}

      if (id) this.getById(id);


     }
     
     get name(){return this._data.name}
     set name(value) {this._data.name = value}
     
     get email(){return this._data.email;}
     set email(value) {this._data.email = value}

     get photo(){return this._data.photo;}
     set photo(value) {this._data.photo = value}



      getById(id) {

        return new Promise((s, f) => {

            User.findByEmail(id).get().then(doc => {

                this.fromJSON(doc.data());

                s(doc);

            }).catch(err => {
                f(err);
            })

        });

    }

     save(){


      return User.findByEmail(this.email).set(this.toJSON())
     }

      static getRef(){

        return FireBase.db().collection('/users')

      }

      static findByEmail(email){

        return User.getRef().doc(email);
      }

      addContact(contact) {

         return User.getRef().doc(this.email).collection('contacts').doc(btoa(contact.email)).set(contact.toJSON())
      }

}