'use strict';

/**
 * Gestionnaires d'événements
 */
$(document).ready(function(){
$("#enregistrer").click(AddToStorage);
$(".project-section").click(select);
$("#plus").click(plus);
});