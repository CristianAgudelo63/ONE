const deleteIcon = () => {
  let i = document.createElement('i')
  i.classList.add('fas', 'fa-trash-alt',  'trashIcon', 'icon')
  i.addEventListener('click', deleteTask)

  return i
}

const deleteTask = (evento) => {
  let parent = evento.target.parentElement;
  parent.remove();
}

export default deleteIcon;