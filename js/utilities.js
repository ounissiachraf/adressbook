'use strict';

/*******************************************************************************************/
/********************************** FONCTIONS UTILITAIRES **********************************/
/*******************************************************************************************/
function AddToStorage(){

    let civilite=$("#civilite").val();
  
    let prenom=$("#prenom").val();
   
    let nom=$("#nom").val();

    let telephone=$("#telephone").val();

  
    let contact={Civilite: civilite, Prenom: prenom, Nom: nom,Telephone: telephone}
    console.log(contact);
    let tab=JSON.parse(localStorage.getItem("contacts"));
 
    if(tab==null)
    {
        tab=[];
    }

     tab.push(contact);
    console.log(tab);

    localStorage.setItem("contacts",JSON.stringify(tab));
    afficher();
}

function afficher(){

    $("ul").empty();
    let tab=JSON.parse(localStorage.getItem("contacts"));
    console.log(tab);

    if(tab!=null)
        {
            for(let i=0;i<tab.length;i++)
            $(".liste ul").append("<li data-id='"+i+"'><i class='far fa-user' >"+tab[i].Prenom+" "+tab[i].Nom+"</i></li>");
        }
    else
        {
            $(".liste ul").append("<li> Aucun contact engregistré </li>");
        }
}

function select(event){
    let tab=JSON.parse(localStorage.getItem("contacts"));
    var id=$(event.target).data("id");
    console.log(tab)
    if(event.target.matches("li"))
{   
    
    console.log(id)

    $("#edit").data("id",id)
    $("#effacer").data("id",id)
    //$("#trash").data("id",id)
    //console.log("mydata :"+$("#trash").data("id"));
    $(".form").hide();
    $(".detail").show();
    $("#name").text(tab[$(event.target).data("id")].Civilite+" "+tab[$(event.target).data("id")].Prenom+" "+tab[id].Nom);
    $("#tel").text(tab[id].Telephone);
}   
    
    

    if(event.target.matches("#edit"))
    {
        var civ=tab[$(event.target).data("id")].Civilite;
        var P=tab[$(event.target).data("id")].Prenom;
        var  N=tab[$(event.target).data("id")].Nom;
        var T=tab[$(event.target).data("id")].Telephone;

        $(".form").show();

        $(".detail").hide();

        $("#civilite").val(civ);
  
        $("#prenom").val(P);
    
        $("#nom").val(N);

        $("#telephone").val(T);

    }


    if(event.target.matches("#effacer") )
    {

        $("li[data-id='"+id+"']").remove();
        /*
        if(tab.length==1)
        {
            tab=[]
        }
        else*/
        tab.splice(id,1);

        localStorage.setItem("contacts",JSON.stringify(tab));

        $("#civilite").val("");
  
        $("#prenom").val("");
    
        $("#nom").val("");

        $("#telephone").val("");
        afficher();
    }

    if(event.target.matches("#trash"))
    {
        localStorage.clear();
        $("ul").empty();
    }

}

function plus(){

    $(".form").show();

    $(".detail").hide();

    $("#civilite").val("");
  
    $("#prenom").val("");
   
    $("#nom").val("");

    $("#telephone").val("");

}