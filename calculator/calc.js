function solve(val){
    var a=document.getElementById('ans');
    a.value+=val;
}
function  ans(){
    var n=document.getElementById('ans').value;
    var nn=eval(n);
    document.getElementById('ans').value=nn;
}
function clr(){
    var w=document.getElementById('ans');
    w.value='';
}
function del(){
    var e=document.getElementById('ans');
    e.value=e.value.slice(0,-1);
}
