//clearInterval serve para limpar um setInterval já registrado
const timeOut = 1000
const checking = () => console.log('checking');
const interval = setInterval(checking, timeOut); 

setTimeout(() => clearInterval(interval), 3000); 