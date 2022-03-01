function getAdmins(map){
    let admins = [];
 for([key, value] of map) {
     if(value === 'Admin') {
     admins.push(key);
 }
}
 return admins;
}


const usuarios = new Map();//Criação do map

usuarios.set('Antonio', 'Admin');
usuarios.set('Bianca','Admin');
usuarios.set('Jorge', 'User');

console.log(getAdmins(usuarios));