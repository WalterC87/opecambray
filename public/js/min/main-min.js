$(document).ready(function(){$("body").addClass("loaded"),$(function(){$('a[rel="lightbox"]').fluidbox()})}),$("#addCentro").on("click",function(t){$("#frmAddCentro").submit()}),$("#addDesaparecido").on("click",function(t){$("#frmDesaparecido").submit()}),$("#addFallecido").on("click",function(t){$("#frmFallecido").submit()}),$("#addEmpresa").on("click",function(t){$("#frmEmpresa").submit()}),$("#addNoticia").on("click",function(t){$("#frmNoticia").submit()}),$("#addVoluntario").on("click",function(t){$("#frmVoluntario").submit()}),$(document).ready(function(){$("#kwd_search").keyup(function(){""!=$(this).val()?($("#my-table tbody>tr").hide(),$("#my-table td:contains-ci('"+$(this).val()+"')").parent("tr").show()):$("#my-table tbody>tr").show()})}),$.extend($.expr[":"],{"contains-ci":function(t,n,o,i){return(t.textContent||t.innerText||$(t).text()||"").toLowerCase().indexOf((o[3]||"").toLowerCase())>=0}});