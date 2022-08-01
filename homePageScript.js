// setting height of main tag in html page

var mainHeight=document.getElementById('mainSectionOfPageId');
var mainTagHeight=window.innerHeight-100;
mainHeight.style.height=""+mainTagHeight+"px";




// variable for thanking dialog function

var fName,emailID,mobileNo,responseBox;

var nameWarning,emailWarning,mobileWarning,responseBoxWarning,starLabel;

var index1=0,index2=0,index3=0,index4=0,index5=0;

var demoEmail=0,demoMobile=0;

var starDemo=0;

// varable for search box for mobile display when sech icon clicked
var searchBox=0;
var hideSerchBox=0;
var searchListAndSearchBox=0;


// function to of scroll event of main tag to hide or unhide the search list


function mainTagScrolledToHideSerchList(){

    var mainTopTagScrolled=document.getElementById('mainSectionOfPageId');

    var searchListDisplay=document.getElementById('searchListForLaptopId');

    var serchBox=document.getElementById('searchSectionForMobileId');

    if (mainTopTagScrolled.scrollTop) {
        searchListDisplay.style.display="none";
        serchBox.style.display="none"
        searchBox=0;
    }
    else if(searchListAndSearchBox==0){
        searchListDisplay.style.display="flex";

        if (window.innerWidth<800) {
            if (hideSerchBox==1) {
                serchBox.style.display="flex"
            }
            searchBox=1;
        }
    }
}


// Touch effect styling function

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



// devloper image function for scrolling

var countDeveloper=220;

function scrollDeveloperImage(){
    
    var z=document.getElementById('imagesId');
    z.scrollBy(countDeveloper,0);

    var y=(z.scrollWidth-z.clientWidth)-2;

    if(z.scrollLeft>=y-220){
        countDeveloper=-220
    }

    if(z.scrollLeft<=0+220){
        countDeveloper=220
    }
}

var interval=setInterval(scrollDeveloperImage,3000);





// Function for scrolling automatic navigation section
var count=20;

function scrollNaveigation(){

    var z=document.getElementById('scrollingNavigationSectionId');
    z.scrollBy(count,0);

    var y=(z.scrollWidth-z.clientWidth)-2;

    if(z.scrollLeft>=y){
        count=-20
    }

    if(z.scrollLeft<=0){
        count=20
    }
}

var interval=setInterval(scrollNaveigation,1000);





// Search Icon Function For Mobile

function searchIconForMobile(){
    var a=document.getElementById('searchSectionForMobileId');

    if (searchBox==0) {
        a.style.display="flex"
        var searchListDisplay=document.getElementById('searchListForLaptopId');
        searchListDisplay.style.display="flex"
        searchBox=1;
        hideSerchBox=1
        searchListAndSearchBox=0;
    } else {
        a.style.display="none"
        var searchListDisplay=document.getElementById('searchListForLaptopId');
        searchListDisplay.style.display="none"
        searchBox=0;
        hideSerchBox=0
        searchListAndSearchBox=1;
    }
}

// Search Icon Funnction
 var countSearch=0;
 function searchTextClicked(){
     if (countSearch==0) {
         var a=document.getElementById('searchText');
        
         if (window.innerWidth>=1400) {
            a.style.width="40%";
         }
         if (window.innerWidth<=1400) {
            a.style.width="54%";
         }
         countSearch=1;
     } 
}



// Functions for Stars in rate us page

var k=0;

function star1(){

    var starLabelInFun;

    var g=document.getElementById('starSize1');

    starLabelInFun=document.getElementById('starLabel');

    if(k==0){

        starLabelInFun.innerHTML="";

        g.style.color="yellow";
        k=1;
        starDemo=0;
    }
    else{
        
        starLabelInFun.innerHTML="* Rating is compulsary"

        g.style.color="black";
        k=0;
        starDemo=1;
    }
}

var l=0
function star2(){

    var starLabelInFun;

    var g=document.getElementById('starSize2');
    var g1=document.getElementById('starSize1');

    starLabelInFun=document.getElementById('starLabel');

    if(l==0){

        starLabelInFun.innerHTML="";

        g.style.color="yellow";
        g1.style.color="yellow";
        l=1;
        starDemo=0;
    }
    else{
        
        starLabelInFun.innerHTML="* Rating is compulsary"

        g.style.color="black";
        g1.style.color="black";
        l=0;
        starDemo=1;
    }
}

var i=0;
function star3(){

    var starLabelInFun;

    var g2=document.getElementById('starSize2');
    var g1=document.getElementById('starSize1');
    var g=document.getElementById('starSize3');

    starLabelInFun=document.getElementById('starLabel');

    if(i==0){

        starLabelInFun.innerHTML="";

        g1.style.color="yellow";
        g2.style.color="yellow";
        g.style.color="yellow";
        i=1;
        starDemo=0;
    }
    else{
        
        starLabelInFun.innerHTML="* Rating is compulsary"

        g1.style.color="black";
        g2.style.color="black";
        g.style.color="black";
        i=0;
        starDemo=1;
    }
}

var j=0;
function star4(){

    var starLabelInFun;

    var g2=document.getElementById('starSize2');
    var g1=document.getElementById('starSize1');
    var g3=document.getElementById('starSize3');
    var g=document.getElementById('starSize4');

    starLabelInFun=document.getElementById('starLabel');

    if(j==0){

        starLabelInFun.innerHTML="";

        g1.style.color="yellow";
        g2.style.color="yellow";
        g3.style.color="yellow";
        g.style.color="yellow";
        j=1;
        starDemo=0;
    }
    else{
        
        starLabelInFun.innerHTML="* Rating is compulsary"

        g1.style.color="black";
        g2.style.color="black";
        g3.style.color="black";
        g.style.color="black";
        j=0;
        starDemo=1;
    }
}

var m=0;
function star5(){

    var starLabelInFun;

    var g2=document.getElementById('starSize2');
    var g1=document.getElementById('starSize1');
    var g3=document.getElementById('starSize3');
    var g4=document.getElementById('starSize4');
    var g=document.getElementById('starSize5');

    starLabelInFun=document.getElementById('starLabel');

    if(m==0){

        starLabelInFun.innerHTML="";

        g1.style.color="yellow";
        g2.style.color="yellow";
        g3.style.color="yellow";
        g4.style.color="yellow";
        g.style.color="yellow";
        m=1;
        starDemo=0;
    }
    else{

        starLabelInFun.innerHTML="* Rating is compulsary"

        g1.style.color="black";
        g2.style.color="black";
        g3.style.color="black";
        g4.style.color="black";
        g.style.color="black";
        m=0;
        starDemo=1;
    }
}



// functioon to display thanking dialog and display error message

function thankingDialog(){
    fName=document.getElementById("full_name").value;
    emailID=document.getElementById("emailAdd").value;
    mobileNo=document.getElementById("mobileNo").value;
    responseBox=document.getElementById("textarea1").value;

    nameWarning=document.getElementById("fName");
    emailWarning=document.getElementById("email");
    mobileWarning=document.getElementById("mobile");
    starLabel=document.getElementById('starLabel');
    responseBoxWarning=document.getElementById("textAreaLabel");
    

    var thankingDialoge=document.getElementById('thankingDemo');
    
    if(fName==""){
        nameWarning.innerHTML="* 'Full Name' field is empty"
        index1=1;
    }
    else{
        index1=0;
    }

    if(emailID=="")
    {
        emailWarning.innerHTML="* 'Email' field is empty"
        index2=1;
    }
    else{
        index2=0
    }

    if(mobileNo=="")
    {
        mobileWarning.innerHTML="* 'Mobile' field is empty"
        index3=1;
    }
    else{
        index3=0;
    }

    if(k==0&&l==0&&i==0&&j==0&&m==0)
    {
        starLabel.innerHTML="* Rating is compulsary"
        index4=1;
        starDemo=1;
    }
    else{
        index4=0;
    }

    if(responseBox=="")
    {
        responseBoxWarning.innerHTML="* 'Rsponse field' is empty"
        index5=1;
    }
    else{
        index5=0;
    }
    
    if(index1==0&&index2==0&&index3==0&&index4==0&&index5==0&&demoEmail==0&&demoMobile==0&&starDemo==0){ 
        document.getElementById('smileIcon').innerHTML='<span class="material-symbols-outlined" id="badLuckIcon">'+'sentiment_satisfied</span>'

        var p=document.getElementById('thanksHeadingSuccess').innerHTML='<h1 id="thankHeading">'+'Thank You...!'+'</h1>'

        thankingDialoge.style.display="block";
    }
    else{
        document.getElementById('smileIcon').innerHTML='<span class="material-symbols-outlined" id="badLuckIcon">'+'sentiment_dissatisfied</span>'

        var p=document.getElementById('thanksHeadingSuccess').innerHTML='<h1 id="thankHeading">'+'...Sorry...'+'<br>Feedback Not Submited'+'</h1>'

        thankingDialoge.style.display="block";
    }
}


// onKeyUp Event Function for full name


function nameFunction(){
    var fNameInFun,nameWarningInFun;

    fNameInFun=document.getElementById("full_name").value;

    nameWarningInFun=document.getElementById("fName");

    if(fNameInFun==""){
        nameWarningInFun.innerHTML="* 'Full Name' field is empty"
    }else{
        nameWarningInFun.innerHTML=""
    }
}


// onKeyUp Event Function for email 


function emailFunction(){
    var emailIDInFun,emailWarningInFun;

    emailIDInFun=document.getElementById("emailAdd").value;

    emailWarningInFun=document.getElementById("email");

    if(emailIDInFun=="")
    {
        emailWarningInFun.innerHTML="* 'Email' field is empty"
    }
    else if(emailIDInFun.indexOf('@')==0)
    {
        emailWarningInFun.innerHTML="* '@' wrong position"
        demoEmail=1;
    }

    else if(emailIDInFun.includes("A", 0)||emailIDInFun.includes("B", 0)||emailIDInFun.includes("C", 0)||emailIDInFun.includes("D", 0)||emailIDInFun.includes("E", 0)||emailIDInFun.includes("F", 0)||emailIDInFun.includes("G", 0)||emailIDInFun.includes("H", 0)||emailIDInFun.includes("I", 0)||emailIDInFun.includes("J", 0)||emailIDInFun.includes("K", 0)||emailIDInFun.includes("L", 0)||emailIDInFun.includes("M", 0)||emailIDInFun.includes("N", 0)||emailIDInFun.includes("O", 0)||emailIDInFun.includes("P", 0)||emailIDInFun.includes("Q", 0)||emailIDInFun.includes("R", 0)||emailIDInFun.includes("S", 0)||emailIDInFun.includes("T", 0)||emailIDInFun.includes("U", 0)||emailIDInFun.includes("V", 0)||emailIDInFun.includes("W", 0)||emailIDInFun.includes("X", 0)||emailIDInFun.includes("Y", 0)||emailIDInFun.includes("Z", 0))

    {
        emailWarningInFun.innerHTML="* Email can't contain UpperCase"
        demoEmail=1;
    }

    else if(!emailIDInFun.includes("@gmail.com", 0))
    {
        emailWarningInFun.innerHTML="* Email contains '@gmail.com'"
        demoEmail=1;
    }
    else{
        emailWarningInFun.innerHTML=""
        demoEmail=0;
    }
}


//onKeyUp Event Function for Mobile Number 

function mobileFunction(){
    var mobileNoInFun,mobileWarningInFun;

    mobileNoInFun=document.getElementById("mobileNo").value;

    mobileWarningInFun=document.getElementById("mobile");

    len=mobileNoInFun.length;

    if(mobileNoInFun=="")
    {
        mobileWarningInFun.innerHTML="* 'Mobile' field is empty"
    }
    else if(mobileNoInFun.includes('e',0)||mobileNoInFun.includes('E',0))
    {
        mobileWarningInFun.innerHTML="* Phone Number can't contain Alphabates";
        demoMobile=1
    }
    else if(len!=10)
    {
        mobileWarningInFun.innerHTML="* Phone Number Contains 10 Digit";
        demoMobile=1
    }
    else{
        mobileWarningInFun.innerHTML=""
        demoMobile=0;
    }

}


//onKeyUp Event Function for ResponceBox 

function responseFunction(){
    var responseBoxInFun,responseBoxWarningInFun;

    responseBoxInFun=document.getElementById("textarea1").value;

    responseBoxWarningInFun=document.getElementById("textAreaLabel");

    if(responseBoxInFun=="")
    {
        responseBoxWarningInFun.innerHTML="* 'Rsponse field' is empty"
    }else{
        responseBoxWarningInFun.innerHTML=""
    }
}


// Function for when user click ok button of thanking dialog then it will close

function thankingOkButtonClicked(){
    var thankingDialoge=document.getElementById('thankingDemo');
    thankingDialoge.style.display="none";
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












// functions of intersectionObserver on rightSlideSubDiv and leftSlideSubDiv for laptop





var cLang=document.getElementById('cLeftSlideDiv');

function intersectionObserverOnC(entries){
    entries.forEach((entry)=>{
        if(entry.intersectionRatio>=0.1){
            cLang.style.transform="scaleX(1)"
        }
        else{
            if (window.innerWidth>=1200) {
                cLang.style.transform="scaleX(0.1)"
            }
           
            if (window.innerWidth<=1200) {
                cLang.style.transform="scaleX(0.2)"
            }
        }
    })
}

let options = {
    root: null,
    rootMargin: '105px 0px 0px 0px',
}
  
var observe1= new IntersectionObserver(intersectionObserverOnC,{
    threshold:0.1
},options)
observe1.observe(cLeftSlideDiv);





var javaLang=document.getElementById('javaLeftSlideDiv');

function intersectionObserverOnjava(entries){
    entries.forEach((entry)=>{
        if(entry.intersectionRatio>=0.1){
            javaLang.style.transform="scaleX(1)"
        }
        else{
            if (window.innerWidth>=1200) {
                javaLang.style.transform="scaleX(0.1)"
            }
           
            if (window.innerWidth<=1200) {
                javaLang.style.transform="scaleX(0.2)"
            }
        }
    })
}

let options1 = {
    root: null,
    rootMargin: '105px 0px 0px 0px',
}
  
var observe2= new IntersectionObserver(intersectionObserverOnjava,{
    threshold:0.1
},options1)
observe2.observe(javaLeftSlideDiv);





var htmlLang=document.getElementById('htmlLeftSlideDiv');

function intersectionObserverOnhtml(entries){
    entries.forEach((entry)=>{
        if(entry.intersectionRatio>=0.1){
            htmlLang.style.transform="scaleX(1)"
        }
        else{
            if (window.innerWidth>=1200) {
                htmlLang.style.transform="scaleX(0.1)"
            }
           
            if (window.innerWidth<=1200) {
                htmlLang.style.transform="scaleX(0.2)"
            }
        }
    })
}

let options2 = {
    root: null,
    rootMargin: '105px 0px 0px 0px',
}
  
var observe3= new IntersectionObserver(intersectionObserverOnhtml,{
    threshold:0.1
},options2)
observe3.observe(htmlLeftSlideDiv);





var javaScriptLang=document.getElementById('javaScriptLeftSlideDiv');

function intersectionObserverOnjavaScript(entries){
    entries.forEach((entry)=>{
        if(entry.intersectionRatio>=0.1){
            javaScriptLang.style.transform="scaleX(1)"
        }
        else{
            if (window.innerWidth>=1200) {
                javaScriptLang.style.transform="scaleX(0.1)"
            }
           
            if (window.innerWidth<=1200) {
                javaScriptLang.style.transform="scaleX(0.2)"
            }
        }
    })
}

let options3 = {
    root: null,
    rootMargin: '105px 0px 0px 0px',
}
  
var observe4= new IntersectionObserver(intersectionObserverOnjavaScript,{
    threshold:0.1
},options3)
observe4.observe(javaScriptLeftSlideDiv);





var androidLang=document.getElementById('androidLeftSlideDiv');

function intersectionObserverOnandroid(entries){
    entries.forEach((entry)=>{
        if(entry.intersectionRatio>=0.1){
            androidLang.style.transform="scaleX(1)"
        }
        else{
            if (window.innerWidth>=1200) {
                androidLang.style.transform="scaleX(0.1)"
            }
           
            if (window.innerWidth<=1200) {
                androidLang.style.transform="scaleX(0.2)"
            }
        }
    })
}

let options4 = {
    root: null,
    rootMargin: '105px 0px 0px 0px',
}
  
var observe5= new IntersectionObserver(intersectionObserverOnandroid,{
    threshold:0.1
},options4)
observe5.observe(androidLeftSlideDiv);





var cplusLang=document.getElementById('cplusRightSlideDiv');

function intersectionObserverOncplus(entries){
    entries.forEach((entry)=>{
        if(entry.intersectionRatio>=0.1){
            cplusLang.style.transform="scaleX(1)"
        }
        else{
            if (window.innerWidth>=1200) {
                cplusLang.style.transform="scaleX(0.1)"
            }
           
            if (window.innerWidth<=1200) {
                cplusLang.style.transform="scaleX(0.2)"
            }
        }
    })
}

let options5 = {
    root: null,
    rootMargin: '105px 0px 0px 0px',
}
  
var observe6= new IntersectionObserver(intersectionObserverOncplus,{
    threshold:0.1
},options5)
observe6.observe(cplusRightSlideDiv);





var pythonLang=document.getElementById('pythonRightSlideDiv');

function intersectionObserverOnpython(entries){
    entries.forEach((entry)=>{
        if(entry.intersectionRatio>=0.1){
            pythonLang.style.transform="scaleX(1)"
        }
        else{
            if (window.innerWidth>=1200) {
                pythonLang.style.transform="scaleX(0.1)"
            }
           
            if (window.innerWidth<=1200) {
                pythonLang.style.transform="scaleX(0.2)"
            }
        }
    })
}

let options6 = {
    root: null,
    rootMargin: '105px 0px 0px 0px',
}
  
var observe7= new IntersectionObserver(intersectionObserverOnpython,{
    threshold:0.1
},options6)
observe7.observe(pythonRightSlideDiv);





var cssLang=document.getElementById('cssRightSlideDiv');

function intersectionObserverOncss(entries){
    entries.forEach((entry)=>{
        if(entry.intersectionRatio>=0.1){
            cssLang.style.transform="scaleX(1)"
        }
        else{
            if (window.innerWidth>=1200) {
                cssLang.style.transform="scaleX(0.1)"
            }
           
            if (window.innerWidth<=1200) {
                cssLang.style.transform="scaleX(0.2)"
            }
        }
    })
}

let options7 = {
    root: null,
    rootMargin: '105px 0px 0px 0px',
}
  
var observe8= new IntersectionObserver(intersectionObserverOncss,{
    threshold:0.1
},options7)
observe8.observe(cssRightSlideDiv);





var phpLang=document.getElementById('phpRightSlideDiv');

function intersectionObserverOnphp(entries){
    entries.forEach((entry)=>{
        if(entry.intersectionRatio>=0.1){
            phpLang.style.transform="scaleX(1)"
        }
        else{
            if (window.innerWidth>=1200) {
                phpLang.style.transform="scaleX(0.1)"
            }
           
            if (window.innerWidth<=1200) {
                phpLang.style.transform="scaleX(0.2)"
            }
        }
    })
}

let options8 = {
    root: null,
    rootMargin: '105px 0px 0px 0px',
}
  
var observe9= new IntersectionObserver(intersectionObserverOnphp,{
    threshold:0.1
},options8)
observe9.observe(phpRightSlideDiv);





var sqlLang=document.getElementById('sqlRightSlideDiv');

function intersectionObserverOnsql(entries){
    entries.forEach((entry)=>{
        if(entry.intersectionRatio>=0.1){
            sqlLang.style.transform="scaleX(1)"
        }
        else{
            if (window.innerWidth>=1200) {
                sqlLang.style.transform="scaleX(0.1)"
            }
           
            if (window.innerWidth<=1200) {
                sqlLang.style.transform="scaleX(0.2)"
            }
        }
    })
}

let options9 = {
    root: null,
    rootMargin: '105px 0px 0px 0px',
}
  
var observe10= new IntersectionObserver(intersectionObserverOnsql,{
    threshold:0.1
},options9)
observe10.observe(sqlRightSlideDiv);





// functions of intersectionObserver on rightSlideSubDiv and leftSlideSubDiv for mobile





var cLangForMobile=document.getElementById('cSlideDiv');

function intersectionObserverOnCForMobile(entries){
    entries.forEach((entry)=>{
        if(entry.intersectionRatio>=0.1){
            cLangForMobile.style.transform="scaleX(1)"
        }
        else{
            cLangForMobile.style.transform="scaleX(0.01)"
        }
    })
}

let optionsForMobile = {
    root: null,
    rootMargin: '105px 0px 0px 0px',
}
  
var observeForMobile1= new IntersectionObserver(intersectionObserverOnCForMobile,{
    threshold:0.1
},optionsForMobile)
observeForMobile1.observe(cSlideDiv);





var javaLangForMobile=document.getElementById('javaSlideDiv');

function intersectionObserverOnjavaForMobile(entries){
    entries.forEach((entry)=>{
        if(entry.intersectionRatio>=0.1){
            javaLangForMobile.style.transform="scaleX(1)"
        }
        else{
            javaLangForMobile.style.transform="scaleX(0.01)"
        }
    })
}

let optionsForMobile1 = {
    root: null,
    rootMargin: '105px 0px 0px 0px',
}
  
var observeForMobile2= new IntersectionObserver(intersectionObserverOnjavaForMobile,{
    threshold:0.1
},optionsForMobile1)
observeForMobile2.observe(javaSlideDiv);





var htmlLangForMobile=document.getElementById('htmlSlideDiv');

function intersectionObserverOnhtmlForMobile(entries){
    entries.forEach((entry)=>{
        if(entry.intersectionRatio>=0.1){
            htmlLangForMobile.style.transform="scaleX(1)"
        }
        else{
            htmlLangForMobile.style.transform="scaleX(0.01)"
        }
    })
}

let optionsForMobile2 = {
    root: null,
    rootMargin: '105px 0px 0px 0px',
}
  
var observeForMobile3= new IntersectionObserver(intersectionObserverOnhtmlForMobile,{
    threshold:0.1
},optionsForMobile2)
observeForMobile3.observe(htmlSlideDiv);





var javaScriptLangForMobile=document.getElementById('javaScriptSlideDiv');

function intersectionObserverOnjavaScriptForMobile(entries){
    entries.forEach((entry)=>{
        if(entry.intersectionRatio>=0.1){
            javaScriptLangForMobile.style.transform="scaleX(1)"
        }
        else{
            javaScriptLangForMobile.style.transform="scaleX(0.01)"
        }
    })
}

let optionsForMobile3 = {
    root: null,
    rootMargin: '105px 0px 0px 0px',
}
  
var observeForMobile4= new IntersectionObserver(intersectionObserverOnjavaScriptForMobile,{
    threshold:0.1
},optionsForMobile3)
observeForMobile4.observe(javaScriptSlideDiv);





var androidLangForMobile=document.getElementById('androidSlideDiv');

function intersectionObserverOnandroidForMobile(entries){
    entries.forEach((entry)=>{
        if(entry.intersectionRatio>=0.1){
            androidLangForMobile.style.transform="scaleX(1)"
        }
        else{
            androidLangForMobile.style.transform="scaleX(0.01)"
        }
    })
}

let optionsForMobile4 = {
    root: null,
    rootMargin: '105px 0px 0px 0px',
}
  
var observeForMobile5= new IntersectionObserver(intersectionObserverOnandroidForMobile,{
    threshold:0.1
},optionsForMobile4)
observeForMobile5.observe(androidSlideDiv);





var cplusLangForMobile=document.getElementById('cplusSlideDiv');

function intersectionObserverOncplusForMobile(entries){
    entries.forEach((entry)=>{
        if(entry.intersectionRatio>=0.1){
            cplusLangForMobile.style.transform="scaleX(1)"
        }
        else{
            cplusLangForMobile.style.transform="scaleX(0.01)"
        }
    })
}

let optionsForMobile5 = {
    root: null,
    rootMargin: '105px 0px 0px 0px',
}
  
var observeForMobile6= new IntersectionObserver(intersectionObserverOncplusForMobile,{
    threshold:0.1
},optionsForMobile5)
observeForMobile6.observe(cplusSlideDiv);





var pythonLangForMobile=document.getElementById('pythonSlideDiv');

function intersectionObserverOnpythonForMobile(entries){
    entries.forEach((entry)=>{
        if(entry.intersectionRatio>=0.1){
            pythonLangForMobile.style.transform="scaleX(1)"
        }
        else{
            pythonLangForMobile.style.transform="scaleX(0.01)"
        }
    })
}

let optionsForMobile6 = {
    root: null,
    rootMargin: '105px 0px 0px 0px',
}
  
var observeForMobile7= new IntersectionObserver(intersectionObserverOnpythonForMobile,{
    threshold:0.1
},optionsForMobile6)
observeForMobile7.observe(pythonSlideDiv);





var cssLangForMobile=document.getElementById('cssSlideDiv');

function intersectionObserverOncssForMobile(entries){
    entries.forEach((entry)=>{
        if(entry.intersectionRatio>=0.1){
            cssLangForMobile.style.transform="scaleX(1)"
        }
        else{
            cssLangForMobile.style.transform="scaleX(0.01)"
        }
    })
}

let optionsForMobile7 = {
    root: null,
    rootMargin: '105px 0px 0px 0px',
}
  
var observeForMobile8= new IntersectionObserver(intersectionObserverOncssForMobile,{
    threshold:0.1
},optionsForMobile7)
observeForMobile8.observe(cssSlideDiv);





var phpLangForMobile=document.getElementById('phpSlideDiv');

function intersectionObserverOnphpForMobile(entries){
    entries.forEach((entry)=>{
        if(entry.intersectionRatio>=0.1){
            phpLangForMobile.style.transform="scaleX(1)"
        }
        else{
            phpLangForMobile.style.transform="scaleX(0.01)"
        }
    })
}

let optionsForMobile8 = {
    root: null,
    rootMargin: '105px 0px 0px 0px',
}
  
var observeForMobile9= new IntersectionObserver(intersectionObserverOnphpForMobile,{
    threshold:0.1
},optionsForMobile8)
observeForMobile9.observe(phpSlideDiv);





var sqlLangForMobile=document.getElementById('sqlSlideDiv');

function intersectionObserverOnsqlForMobile(entries){
    entries.forEach((entry)=>{
        if(entry.intersectionRatio>=0.1){
            sqlLangForMobile.style.transform="scaleX(1)"
        }
        else{
            sqlLangForMobile.style.transform="scaleX(0.1)"
        }
    })
}

let optionsForMobile9 = {
    root: null,
    rootMargin: '105px 0px 0px 0px',
}
  
var observeForMobile10= new IntersectionObserver(intersectionObserverOnsqlForMobile,{
    threshold:0.1
},optionsForMobile9)
observeForMobile10.observe(sqlSlideDiv);