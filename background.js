chrome.contextMenus.create({
    "title": "Preenchimento automático de ponto",
    "contexts": ["selection"],
    "onclick" : function(e) {
      	preenchimentoAutomatico(e.selectionText);
    }
});

function preenchimentoAutomatico(texto) {
	alert(texto);
};