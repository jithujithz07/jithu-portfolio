const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () =>
    container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
    container.classList.remove('right-panel-active'));

var sname = document.getElementById("sna");
var smail = document.getElementById("sem"); 
var spass = document.getElementById("spa"); 
var lmail = document.getElementById("lem"); 
var lpass = document.getElementById("lpa"); 

function sivalidate(){
    if(sname.value == "")
    {
        sname.style.border="2px solid red"
        return false;
    }
    else if(sname.value != "")
    {
        sname.style.border="2px solid green"
    }
    if(smail.value == "")
    {
        smail.style.border="2px solid red"
        return false;
    }
    else if(smail.value != "")
    {
        
        smail.style.border="2px solid green"
    }
    if(spass.value == "" || spass.value.length < 7)
    {
        spass.style.border="2px solid red"
        return false;
    }
    else if(spass.value != "")
    {
        
        spass.style.border="2px solid green"
    }
    if(sname.value != "" && smail.value != "" && spass.value != ""){
        return true
    }
    
}
function lovalidate(){
    if(lmail.value == "")
    {
        lmail.style.border="2px solid red"
        return false;
    }
    else if(lmail.value != "")
    {
        lmail.style.border="2px solid green"
       
    }
    if(lpass.value.length < 7)
    {
        lpass.style.border="2px solid red"
        return false;
    }
    else if(lpass.value.length > 6)
    {
        
        lpass.style.border="2px solid green"
    }
    if(lmail.value != "" && lpass.value != "" && lpass.value.length > 7)
    {
        return true
    }


}
function l_ma_Vali(){
    if(lmail.value=="")
    {
        lmail.style.border="2px solid red"
        return false;
    }
    else{
        lmail.style.border="2px solid green"
        return true;

    }
}
    function s_na_Vali(){
        if(sname.value=="")
        {
            sname.style.border="2px solid red"
            return false;
        }
        else{
            sname.style.border="2px solid green"
        }

    }
    function s_ma_Vali(){
        if(smail.value=="")
        {
            smail.style.border="2px solid red"
            return false;

        }
        if(sname.value==''){
            sname.style.border="2px solid red"
            return false;

        }
        else{
            smail.style.border="2px solid green"
        }

    }