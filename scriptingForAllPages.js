
//variable to display srch box when scrolled

var variabletodisplayserchbarformobilewhenscroll=0;
var hideSerchBox=0;




// Scrolling Function
function rightScroll(){

    var a=document.getElementById('scrollTop');
    var b=document.getElementById('topHead');
    var c=document.getElementById('headerSection');

    if (a.scrollTop) {
        b.style.display="none";
        c.style.height="96.88px"
        
        // serch List disabled when right section scrolled

        var p1=document.getElementById('searchListForLaptopId');
        p1.style.display="none";

        // serch input text disabled when user scroll right section

        var p=document.getElementById('mobileSearchTextId');
        p.style.display="none";

    } 
    else {
        c.style.height="170px"
        b.style.display="flex";
        
        // search List disabled when right section scrolled
        if (variabletodisplayserchbarformobilewhenscroll==0) {
            var p2=document.getElementById('searchListForLaptopId');
            p2.style.display="flex";
            
            // serch input text disabled when user scroll right section

            if (window.innerWidth<800) {
                if (hideSerchBox==1) {
                    var p=document.getElementById('mobileSearchTextId');
                    p.style.display="flex";
                } 
            }
        }    
    }
}

function leftScroll(){
    var d=document.getElementById('scrollLeftTop');
    var b=document.getElementById('topHead');
    var c=document.getElementById('headerSection');

    if (d.scrollTop) {
        b.style.display="none";
        c.style.height="96.88px"

        // serch List disabled when left section scrolled

        var p=document.getElementById('searchListForLaptopId');
        p.style.display="none";

    } 
    else {
        c.style.height="170px"
        b.style.display="flex";

        // serch List disabled when left section scrolled

        var p=document.getElementById('searchListForLaptopId');
        p.style.display="flex";

    }

    // hand animation on left scroll stop

    var z=document.getElementById('handIconOnLeftSectionId');
    z.style.display="none";
}

// SearchBox Function

function searchBoxClicked(){
    var z=document.getElementById('searchTextMobileId');
    z.style.border="2px solid aqua";
}

// search icon function to siplay mobile text box 
var count=0;
function searchIconClicked(){
    if (count==0) {
        var i=document.getElementById('mobileSearchTextId');
        i.style.display="flex";

        // serch List disabled when left section scrolled

        var p=document.getElementById('searchListForLaptopId');
        p.style.display="flex";

        variabletodisplayserchbarformobilewhenscroll=0;
        count=1;
        hideSerchBox=1
    } else {
        var i=document.getElementById('mobileSearchTextId');
        i.style.display="none";

        // serch List disabled when left section scrolled

        var p=document.getElementById('searchListForLaptopId');
        p.style.display="none";

        variabletodisplayserchbarformobilewhenscroll=1
        count=0;
        hideSerchBox=0
    }
}

// HamBurger function to display side bar

function hamBurgerClicked(){
    var x=document.getElementById('burgerId').classList.toggle('click');
}

// function to display ham burger panel when clicked
var burger=0;
function hamBurgerClickedToOpenSlidePanel()
{
    var i=document.getElementById('slideDivisionId');
    if (burger==0) {
        i.style.borderBottom="2px Solid black"
        i.style.height="330px";
        burger=1;
    } else {
        i.style.height="0px";
        i.style.borderBottom="none"
        burger=0;
    }

    // Hand animation on slide division when burger is clicked

    var z=document.getElementById('handIconOnSlideDivisionId');
    z.style.fontSize='25px';

    setTimeout(leftSection,10000);

    function leftSection(){
        var z=document.getElementById('handIconOnSlideDivisionId');
        z.style.display="none";
    }
}

// Touch effect on screen Script

var a=document.addEventListener("click",(e) => {
    var a=document.getElementById('roundId');

    var x=e.pageX;
    var y=e.pageY;

    a.style.top=y+"px";
    a.style.left=x+"px";
    a.style.display="block";
    setTimeout(blockRound,1000);
});
function blockRound(){
    var a=document.getElementById('roundId');
    a.style.display="none";
}


// Navigation Hand Scroll Animation


setTimeout(hand,10000);

function hand(){
    var z=document.getElementById('handIconId');
    z.style.display="none";
}

function handNavClicked(){
    var z=document.getElementById('handIconId');
    z.style.display="none";
}


// Left Section hand scroll Clicked animation


function handLeftSectionClicked(){
    var z=document.getElementById('handIconOnLeftSectionId');
    z.style.display="none";
}

setTimeout(leftSection,10000);

function leftSection(){
    var z=document.getElementById('handIconOnLeftSectionId');
    z.style.display="none";
}


// Slide division hand animation stop when it clicked or scrolled

function slideDivisionOnClicked(){
    var z=document.getElementById('handIconOnSlideDivisionId');
    z.style.display="none";
}


// Function to increase the width of input text
var searchWidth=0;
function inputTextWidthIncrease(){
    if (searchWidth==0) {
        var z=document.getElementById('searchText').classList.toggle('search');
        searchWidth=1;
    }
}










// Functions of Sign Up in footer section

var signName,signEmail,signMobile,signAddress,signPassword
var signNameWarning,signEmailWarning,signMobileWarning,signAddressWarning,signPasswordWarning;
var errorCheckInsignUp=0,errorCheckInsignUpForName=0,errorCheckInsignUpForEmail=0,errorCheckInsignUpForMobile=0,errorCheckInsignUpForAddress=0,errorCheckInsignUpForPassword=0;
var signUpHeading;

function signUpSubmitFunction(){
    signName=document.getElementById('signUpName').value;
    signEmail=document.getElementById('signUpEmail').value;
    signMobile=document.getElementById('signUpMobile').value;
    signAddress=document.getElementById('signUpAddress').value;
    signPassword=document.getElementById('signUpPassword').value;

    signNameWarning=document.getElementById('signUpNameWarning')
    signEmailWarning=document.getElementById('signUpEmailWarning');
    signMobileWarning=document.getElementById('signUpMobileWarning');
    signAddressWarning=document.getElementById('signUpAddressWarning');
    signPasswordWarning=document.getElementById('signUpPasswordWarning');

    signUpHeading=document.getElementById('signUpHeading');

    if (signName=="") {
        signNameWarning.innerHTML="* Name Field is empty";
        errorCheckInsignUp=1;
    } 

    if (signEmail=="") {
        signEmailWarning.innerHTML="* Email Field is empty";
        errorCheckInsignUp=1;
    } 

    if (signMobile=="") {
        signMobileWarning.innerHTML="* Mobile Field is empty";
        errorCheckInsignUp=1;
    } 

    if (signAddress=="") {
        signAddressWarning.innerHTML="* Address Field is empty";
        errorCheckInsignUp=1;
    }

    if (signPassword=="") {
        signPasswordWarning.innerHTML="* Password Field is empty";
        errorCheckInsignUp=1;
    } 

    if(errorCheckInsignUp==0&&errorCheckInsignUpForName==0&&errorCheckInsignUpForEmail==0&&errorCheckInsignUpForMobile==0&&errorCheckInsignUpForAddress==0&&errorCheckInsignUpForPassword==0)
    
    {
        signUpHeading.insertAdjacentHTML('afterend','<h2 id="successfulh1FromJavaScript" style="padding-bottom:20px; color:blue; background-color: transparent;">Login Successful !!!</h2>')

        setTimeout(signUpHeadingTimeOut,"3000");
    }

    else
    
    {
        signUpHeading.insertAdjacentHTML('afterend','<h2 id="successfulh1FromJavaScript" style="padding-bottom:30px; color:blue; background-color: transparent;">Not Submited !!!</h2>')

        setTimeout(signUpHeadingTimeOut,"3000");
    }

}

function signUpHeadingTimeOut(){
    var a=document.getElementById('successfulh1FromJavaScript');
    a.remove();
}

// Function for name field in sign up section
function signUpNamefunction(){
    signName=document.getElementById('signUpName').value;
    signNameWarning=document.getElementById('signUpNameWarning')

    if(signName==""){
        signNameWarning.innerHTML="* Name Field is empty";
        errorCheckInsignUp=1;
        errorCheckInsignUpForName=1;
    }else{
        signNameWarning.innerHTML="";
        errorCheckInsignUp=0;
        errorCheckInsignUpForName=0;
    }
}

// Function for email field in sign up section
function signUpEmailfunction(){
    signEmail=document.getElementById('signUpEmail').value;
    signEmailWarning=document.getElementById('signUpEmailWarning')

    if(signEmail==""){
        signEmailWarning.innerHTML="* Email Field is empty";
        errorCheckInsignUp=1;
        errorCheckInsignUpForEmail=1;
    }

    else if(signEmail.indexOf('@')==0){
        signEmailWarning.innerHTML="* '@' wrong position";
        errorCheckInsignUp=1;
        errorCheckInsignUpForEmail=1;
    }

    else if(signEmail.includes("A", 0)||signEmail.includes("B", 0)||signEmail.includes("C", 0)||signEmail.includes("D", 0)||signEmail.includes("E", 0)||signEmail.includes("F", 0)||signEmail.includes("G", 0)||signEmail.includes("H", 0)||signEmail.includes("I", 0)||signEmail.includes("J", 0)||signEmail.includes("K", 0)||signEmail.includes("L", 0)||signEmail.includes("M", 0)||signEmail.includes("N", 0)||signEmail.includes("O", 0)||signEmail.includes("P", 0)||signEmail.includes("Q", 0)||signEmail.includes("R", 0)||signEmail.includes("S", 0)||signEmail.includes("T", 0)||signEmail.includes("U", 0)||signEmail.includes("V", 0)||signEmail.includes("W", 0)||signEmail.includes("X", 0)||signEmail.includes("Y", 0)||signEmail.includes("Z", 0))

    {
        signEmailWarning.innerHTML="* Email can't contain UpperCase"
        errorCheckInsignUp=1;
        errorCheckInsignUpForEmail=1;
    }

    else if(!signEmail.includes("@gmail.com", 0)){
        signEmailWarning.innerHTML="* Email contains '@gmail.com'"
        errorCheckInsignUp=1;
        errorCheckInsignUpForEmail=1;
    }
    else{
        signEmailWarning.innerHTML="";
        errorCheckInsignUp=0;
        errorCheckInsignUpForEmail=0;
    }
}

// Function for mobile field in sign up section
function signUpMobilefunction(){
    signMobile=document.getElementById('signUpMobile').value;
    signMobileWarning=document.getElementById('signUpMobileWarning')

    len=signMobile.length;

    if(signMobile==""){
        signMobileWarning.innerHTML="* Mobile Field is empty";
        errorCheckInsignUp=1;
        errorCheckInsignUpForMobile=1;
    }
    else if(signMobile.includes('e',0)||signMobile.includes('E',0)){
        signMobileWarning.innerHTML="PhoneNo can't contains letters"
        errorCheckInsignUp=1;
        errorCheckInsignUpForMobile=1;
    }
    else if(len!=10){
        signMobileWarning.innerHTML="PhoneNo contains 10 digit"
        errorCheckInsignUp=1;
        errorCheckInsignUpForMobile=1;
    }
    else{
        signMobileWarning.innerHTML="";
        errorCheckInsignUp=0;
        errorCheckInsignUpForMobile=0;
    }
}


// Function for Address field in sign up section
function signUpAddressfunction(){
    signAddress=document.getElementById('signUpAddress').value;
    signAddressWarning=document.getElementById('signUpAddressWarning')

    if(signAddress==""){
        signAddressWarning.innerHTML="* Address Field is empty";
        errorCheckInsignUp=1;
        errorCheckInsignUpForAddress=1;
    }else{
        signAddressWarning.innerHTML="";
        errorCheckInsignUp=0;
        errorCheckInsignUpForAddress=0;
    }
}


// Function for password field in sign up section
function signUpPasswordfunction(){

    signPassword=document.getElementById('signUpPassword').value;
    signPasswordWarning=document.getElementById('signUpPasswordWarning')

    if(signPassword==""){
        signPasswordWarning.innerHTML="* Password Field is empty";
        errorCheckInsignUp=1;
        errorCheckInsignUpForPassword=1;
    }

    else if(!signPassword.includes('A',0)&&!signPassword.includes('B',0)&&!signPassword.includes('C',0)&&!signPassword.includes('D',0)&&!signPassword.includes('E',0)&&!signPassword.includes('F',0)&&!signPassword.includes('G',0)&&!signPassword.includes('H',0)&&!signPassword.includes('I',0)&&!signPassword.includes('J',0)&&!signPassword.includes('K',0)&&!signPassword.includes('L',0)&&!signPassword.includes('M',0)&&!signPassword.includes('N',0)&&!signPassword.includes('O',0)&&!signPassword.includes('P',0)&&!signPassword.includes('Q',0)&&!signPassword.includes('R',0)&&!signPassword.includes('S',0)&&!signPassword.includes('T',0)&&!signPassword.includes('U',0)&&!signPassword.includes('V',0)&&!signPassword.includes('W',0)&&!signPassword.includes('X',0)&&!signPassword.includes('Y',0)&&!signPassword.includes('Z',0))
    
    {
        signPasswordWarning.innerHTML="* Password contains UpperCase Letters"
        errorCheckInsignUp=1;
        errorCheckInsignUpForPassword=1;
    }

    
    else if(!signPassword.includes('a',0)&&!signPassword.includes('b',0)&&!signPassword.includes('c',0)&&!signPassword.includes('d',0)&&!signPassword.includes('e',0)&&!signPassword.includes('f',0)&&!signPassword.includes('g',0)&&!signPassword.includes('h',0)&&!signPassword.includes('i',0)&&!signPassword.includes('j',0)&&!signPassword.includes('k',0)&&!signPassword.includes('l',0)&&!signPassword.includes('m',0)&&!signPassword.includes('n',0)&&!signPassword.includes('o',0)&&!signPassword.includes('p',0)&&!signPassword.includes('q',0)&&!signPassword.includes('r',0)&&!signPassword.includes('s',0)&&!signPassword.includes('t',0)&&!signPassword.includes('u',0)&&!signPassword.includes('v',0)&&!signPassword.includes('w',0)&&!signPassword.includes('x',0)&&!signPassword.includes('y',0)&&!signPassword.includes('z',0))
    
    {
        signPasswordWarning.innerHTML="* Password contains LowerCase Letters"
        errorCheckInsignUp=1;
        errorCheckInsignUpForPassword=1;
    }

    else if(!signPassword.includes('~',0)&&!signPassword.includes('`',0)&&!signPassword.includes('!',0)&&!signPassword.includes('@',0)&&!signPassword.includes('#',0)&&!signPassword.includes('$',0)&&!signPassword.includes('%',0)&&!signPassword.includes('^',0)&&!signPassword.includes('&',0)&&!signPassword.includes('*',0)&&!signPassword.includes('(',0)&&!signPassword.includes(')',0)&&!signPassword.includes('-',0)&&!signPassword.includes('_',0)&&!signPassword.includes('=',0)&&!signPassword.includes('+',0)&&!signPassword.includes('[',0)&&!signPassword.includes(']',0)&&!signPassword.includes('{',0)&&!signPassword.includes('}',0)&&!signPassword.includes(';',0)&&!signPassword.includes('|',0)&&!signPassword.includes(':',0)&&!signPassword.includes('"',0)&&!signPassword.includes("'",0)&&!signPassword.includes(',',0)&&!signPassword.includes('<',0)&&!signPassword.includes('.',0)&&!signPassword.includes('>',0)&&!signPassword.includes('?',0)&&!signPassword.includes('/',0)&&!signPassword.includes('\\',0))
    
    {
        signPasswordWarning.innerHTML="* Password contains Special Charecter"
        errorCheckInsignUp=1;
        errorCheckInsignUpForPassword=1;
    }

    else if(!signPassword.includes('0',0)&&!signPassword.includes('2',0)&&!signPassword.includes('3',0)&&!signPassword.includes('4',0)&&!signPassword.includes('5',0)&&!signPassword.includes('6',0)&&!signPassword.includes('7',0)&&!signPassword.includes('8',0)&&!signPassword.includes('9',0))
    
    {
        signPasswordWarning.innerHTML="* Password contains digits"
        errorCheckInsignUp=1;
        errorCheckInsignUpForPassword=1;
    }

    else if(signPassword.length<=6){
        signPasswordWarning.innerHTML="* Password lenght Minimum 6 letters";
        errorCheckInsignUp=1;
        errorCheckInsignUpForPassword=1;
    }

    else if(signPassword.length>30){
        signPasswordWarning.innerHTML="* Password lenght Maximum 30 letters";
        errorCheckInsignUp=1;
        errorCheckInsignUpForPassword=1;
    }

    else{
        signPasswordWarning.innerHTML="";
        errorCheckInsignUp=0;
        errorCheckInsignUpForPassword=0;
    }

}