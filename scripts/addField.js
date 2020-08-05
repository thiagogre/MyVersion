// Procuar o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', cloneField)
// Executar uma ação
function cloneField() {
    // Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //Node == HTML document
    // pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')
    // Para cada campo, limpar
    fields.forEach(function(field){
        // pegar o field e limpa
        field.value = ""
    })
    // Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer) 
}
