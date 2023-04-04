const checkComplete = () => {
  let i = document.createElement('i')
  i.classList.add('far', 'fa-check-square', 'icon')
  i.addEventListener("click", completeTask)
  return i;
}

const completeTask = (event) =>{
  let element = event.target;

  // toggle, verifica si existe o no existe la clase
  element.classList.toggle('fas');
  element.classList.toggle('completeIcon')
  element.classList.remove('far');
}

export default checkComplete;