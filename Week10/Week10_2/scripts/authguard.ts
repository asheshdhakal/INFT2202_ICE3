"use strict";

(function(){

    let protected_list = ["contact-list"];

    if(protected_list.indexOf(router.ActiveLink)>-1){
        if(!sessionStorage.getItem("user")){
            location.href = "login.html";
        }
    }


})();
