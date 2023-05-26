var va11=null,va12=null,oper=null;
function clr(){
    var res=document.getElementById("res");
    res.value="";
    va11 = va12 = oper = null;
}
function inval(val){
    var res=document.getElementById("res");
    res.value=res.value +val;
}
function inop(op){
    var res = document.getElementById("res");
    oper =op;
    va11=parseInt(res.value);
    res.value="";
}
function result(){
    switch(oper){
        case '+':return va11+va12; break;
        case '-':return va11-va12; break;
        case '*':return va11*va12; break;
        case '/':return va11/va12; break;
             if(va12==0){
                alert("Enter an other value!");
             }else{
                return va11/va12;
             }
        break;     

        
    }
}
function calculate(){
    var res=document.getElementById("res");
    if((va11 == null)||(res.value == "")){
        alert("please enter a value!");
    }else{
        va12=parseInt(res.value);
        res.value=result();

    }
}