
// SearchList function For Laptop

function inputTextKeyDownToDiaplySearchList(){

    var a=document.getElementById('searchListForLaptopId')


    var search=document.getElementById('searchText').value.toUpperCase();
    var listItem=document.getElementsByClassName('searchListItem');

    for(var i=0;i<listItem.length;i++){
        var z=document.getElementsByClassName('searchListItemAnchor')[i].innerHTML;
        var y=z.toUpperCase();
        
        if(y.indexOf(search)>-1||search.match(y)){
            listItem[i].style.display="flex"

            a.style.borderBottom="2px solid black"
            a.style.borderLeft="2px solid black"

        }else{
            listItem[i].style.display="none" 
            a.style.borderBottom="none" 
            a.style.borderLeft="none"
        }

        
        if(search==""){

            var j=listItem.length;
            for(var h=0;h<j;h++){
                listItem[h].style.display="none";
                a.style.borderBottom="none"
                a.style.borderLeft="none"
                a.style.borderRight="none"
            }
        }
    }
}





// SearchList function For Mobile

function searchTextForMobileClicked(){
    
    var a=document.getElementById('searchListForLaptopId')


    var search=document.getElementById('searchTextMobileId').value.toUpperCase();
    var listItem=document.getElementsByClassName('searchListItem');

    for(var i=0;i<listItem.length;i++){
        var z=document.getElementsByClassName('searchListItemAnchor')[i].innerHTML;
        var y=z.toUpperCase();
        
        if(y.indexOf(search)>-1||search.match(y)){
            listItem[i].style.display="flex"

            a.style.borderBottom="2px solid black"
            a.style.borderLeft="2px solid black"

        }else{
            listItem[i].style.display="none" 
        }

        
        if(search==""){

            var j=listItem.length;
            for(var h=0;h<j;h++){
                listItem[h].style.display="none";
                a.style.borderBottom="none"
                a.style.borderLeft="none"
                a.style.borderRight="none"
            }
        }
    }
}




// function for both mobile and laptop when user click on search button of mobile or laptop to serch text in input text

function laptopSearchIconclicked(){

    z=0;
    
    var search=document.getElementById('searchText').value.toUpperCase();
    var searchForMobile=document.getElementById('searchTextMobileId').value.toUpperCase();

    if(search.includes("TATA",0)||searchForMobile.includes("TATA",0))
    {
        window.open("http://www.google.com","_self");
        z++;
    }

    else if(search.includes("FORTUNER",0)||searchForMobile.includes("FORTUNER",0))
    {
        window.open("http://www.youtube.com","_self");
        z++;
    }
    else{
        alert('Sorry No Match Found')
    }

}