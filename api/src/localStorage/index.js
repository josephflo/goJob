
export function createLocalStorage(name, content){
    localStorage.setItem(name, content);
}

export function getLocalStorage(name){
    let info = localStorage.getItem(name);
    return info;
}

export function deleteLocalStorage(name){
 localStorage.removeItem(name);
 return "Eliminado con exito";
}

export function clearLocalStorage(){
    localStorage.clear();
}

