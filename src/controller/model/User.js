import { ClassEvent } from '../../utils/ClassEvent';
import {FireBase} from '../../utils/Firebase'

export class User extends ClassEvent {

      static getRef(){

        return FireBase.db().collection('/users')

      }

      static findByEmail(email){

        return User.getRef().doc(email);
      }

}