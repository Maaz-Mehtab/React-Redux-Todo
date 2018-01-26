import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyBll_oanbXLq-s_g7Tbp9hM6UwHkjaTBhI",
    authDomain: "todoapp-11111.firebaseapp.com",
    databaseURL: "https://todoapp-11111.firebaseio.com",
    projectId: "todoapp-11111",
    storageBucket: "todoapp-11111.appspot.com",
    messagingSenderId: "937490587630"
  };
  firebase.initializeApp(config);

export function addtodo(item){
    return dispatch => {
        var database=firebase.database().ref('/');
        var insertData = database.child('Todo_Redux').push(item);
        var insertedKey = insertData.getKey();

        firebase.database().ref('Todo_Redux').once('value')
        .then((userData) => {
            let allUsers = userData.val();
            console.log("get data",allUsers);
            let allUsersArr = [];
            for(var key in allUsers){
                allUsersArr.push(allUsers[key]);
            }
            console.log(allUsersArr);
            
            firebase.database().ref('/').child("Todo_Redux").on('child_added', (snap) => {
                var obj = snap.val();
                obj.id = snap.key;

                var iii={
                    id:obj.id
                }
                console.log(iii)
                // let allid = [];
                // for(var key in obj.id){
                //     allid.push(obj.id[key]);
                // }
                // console.log(allid);
               
                dispatch({ type: "ADD", payload: allUsersArr ,id:iii})
            })



        })


        // dispatch({ type: "ADD", payload: item })
        console.log('user', item);
       
        // var data=firebase.database().ref('/').child("Todo_redux").push(item)
        // .then(()=>{
        //     console.log('Todo add')
            
        // })
       
        
    }
    // return {
    //     type:"ADD",
    //     payload:item,
    //     id:id
    // }
}

export function deleteall(item){
    return {
        type:"DELETEALL",
        payload:''
    }
}

export function delet(dele){
    return {
        type:"DELET",
        payload:dele
    }
}