
"use strict"
//localStorage.clear()
function loadstorage(){
    $("ul").empty()
    let tab=JSON.parse(localStorage.getItem("élèments"));
    return tab;
}
function refresh(){
    
    let tab=loadstorage();
    if(tab!=null)
        {
            for(let i=0;i<tab.length;i++)
            $("ul").append("<li><a href='#' data-id='"+i+"'>"+tab[i].designation+"</a></li>");
            
        }
}
    function AddToStorage(){

        let categorie=$("#categorie").val();
      
        let ref=$("#ref").val();
       
        let designation=$("#designation").val();
      
        let P={categorie : categorie,reference: ref,designation: designation};
        
        let tab=JSON.parse(localStorage.getItem("élèments"));//JSON.parse pour convertir la chaine de caractere en objet
     
        if(tab==null)
        {
            tab=[P];
        }
        else
        {
            tab.push(P);
        }
        console.log(tab);

        localStorage.setItem("élèments",JSON.stringify(tab));
        refresh();
    }
    

    function AfficheDetail(event){
        if(event.target.matches("li a")){
        let tab=JSON.parse(localStorage.getItem("élèments"));
        let cmpt=$(event.target).data("id");
       
        $(event.target).after("<ul><li>Catégorie : "+tab[cmpt].categorie+"</li><li>Référence : "+tab[cmpt].reference+"</li><li>Designation : "+tab[cmpt].designation+"</li><li ><a id='supprimer' data-id='"+cmpt+"' href='#'>supprimer</a></li></ul>");
        
        }
    }


    
    function supprimer(event){
        if(event.target.matches("#supprimer")){

            let tab=JSON.parse(localStorage.getItem("élèments"));

            tab.splice($(event.target).data("id"),1);
        
            localStorage.setItem("élèments",JSON.stringify(tab));
            $(event.target).parent().parent().parent().remove();
        }
    }
