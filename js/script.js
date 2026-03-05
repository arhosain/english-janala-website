const loadLessons = () => {
  fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res => res.json())
    .then(json => displayLesson(json.data));
}


const displayLesson = (lessons) => {
  // 1. get the container 
  const levelContainer = document.getElementById('level-container');
  levelContainer.innerHTML = ""; 
  // 2. get into every lesson
  for (let lesson of lessons) {
    //  3. create a element
    console.log(lesson)
    const btnDiv = document.createElement('div');

    btnDiv.innerHTML = `
    <button  class="btn btn-primary btn-outline "><i class="fa-solid fa-book-open"></i>
    Lesson ${lesson.level_no}</button>
    `;
    // 4. append inside every lesson
    levelContainer.append(btnDiv)
  }
 
}
loadLessons()