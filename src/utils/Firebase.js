import firebase from "firebase";
require("firebase/firestore");
export class FireBase {

    constructor(){

        this._config = {

            apiKey: "AIzaSyBjKMOoo5cAPBvxU66d0PcqfUbah18tLwM",
            authDomain: "whatsapp-clone-636ee.firebaseapp.com",
            projectId: "whatsapp-clone-636ee",
            storageBucket: "whatsapp-clone-636ee.appspot.com",
            messagingSenderId: "195522367573",
            appId: "1:195522367573:web:1bef63a3a5e0e76e7404dc",
            measurementId: "G-DKYP1XQ5DP"  
        }

        this.init()

    }

   init() {
        if (!window._initializedFirebase) {
            firebase.initializeApp(this._config)
            firebase.firestore().settings({
                timestampsInSnapshots: true
            });
            window._initializedFirebase = true;
        };
    };

    static db(){

        return firebase.firestore();

    }

    static hd(){

        return firebase.storage();
    }

    initAuth() {


        return new Promise ((s, f)=> {

            let provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider)
            
            .then(result => {

                let token = result.credential.accessToken;
                let user = result.user;

                s({
                    user,
                     token
                })
            })
            .catch(err=> {

                f(err);
            })
        })
    }


}