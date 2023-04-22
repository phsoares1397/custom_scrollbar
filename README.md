# Introdução

Plugin de propósito educacional que usa JS, HTML e CSS para implementar um ScrollBar simples e um pouco customizável em páginas WEB.

# Como usar:

new custom_scrollbar(ELEMENTO, OPÇÕES);

Examplo: 

var scroll = new custom_scrollbar(document.body, null);\
scroll.init;

# Requisitos:

1) ELEMENTO precisa ter style.position definido, pode ser qualquer uma.
2) ELEMENTO precisa ter style.height definido, pode ser qualquer uma.
