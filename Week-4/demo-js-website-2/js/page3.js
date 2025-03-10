function page_load(){
    const msgText = "# page3: page load"

    console.log(msgText.toUpperCase())


}

function btnSubmit(){
    
    const msgText = "# page3: btnSumbit"

    console.log(msgText.toUpperCase())

    //prevent from post
    return false 

}

function btnClear
    const msgText = "# page3: btnClear"

    console.log(msgText.toUpperCase())




    const divdisplayinfo = document.getElementById("divdisplayinfo")

    if(divdisplayinfo == null divdisplayinfo == undefined) {
        msgText = "#divdisplayinfo Not found"
        console.log(msgText)
        return false; // prevent form submit

    
    }
    

    /*

    firstname
        1. select firstnmae field using document.getElementById
        2. validate ife field is not nyll or undefined, if so, display field not found message 
        3. 
    
    */

    const txtfirstname = document.getElementById("txtfirstname")

    if(txtfirstname == null txtfirstname == undefined) {
        msgText = "#txtfirstname not found"
        console.log(msgText)
        return false; // prevent form submit
    }

    if(txtfirstname.ariaValueMax.trim().length == 0){
        msgText = "# txtfirstname is required"
        console.log
    }


}