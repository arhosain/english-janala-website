const loadLessons = () => {
  fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res => res.json())
    .then(json => displayLesson(json.data));
}

const loadLevelWord = id => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then(res => res.json())
    .then(json => displayLevelWord(json.data));
  
  const clickBtn = document.getElementById(`lesson-btn-${id}`);
  clickBtn.classList.add("bg-blue")
};

const displayLevelWord = (words) => {
 
 
   
  const wordContainer = document.getElementById('word-container');
  wordContainer.innerHTML = "";


   if (words.length === 0) {
     wordContainer.innerHTML = `
     <div class="text-center col-span-3 flex flex-col items-center">
  <img src="assets/alert-error.png" alt="">
  <p class="text-[15px] text-gray-500">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
  <p class="text-4xl py-4">নেক্সট Lesson এ যান</p>
</div>
     
     `;
     return;
   }
  
  words.forEach(word => {
    const card = document.createElement("div")
    card.innerHTML = ` 
     <div class="bg-white p-6 rounded-lg">
  <div class="text-center mb-7 font-medium">
    <h4 class="font-bold text-3xl">${word.word ? word.word: "শব্দ পাওয়া যায়নি!"}</h4>
    <p class="my-6 text-xl">Meaning /Pronounciation</p>
    <p class="text-3xl">"${word.meaning ? word.meaning : "অর্থ পাওয়া যায়নি"} / ${word.pronunciation ? word.pronunciation : "উচ্চারণ পাওয়া যায়নি"}"</p>
  </div>
  <div class="flex justify-between">
    <button class="btn bg-blue-100 rounded-sm text-[#374957] "><i class="fa-solid fa-circle-info"></i></button>
    <button class="btn rounded-sm bg-blue-100 text-[#374957]"><i class="fa-solid fa-volume-high"></i></button>
  </div>
 </div>
    `; 
    wordContainer.append(card)
  })
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
    <button id="lesson-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})"  class="btn btn-primary btn-outline "><i class="fa-solid fa-book-open"></i>
    Lesson ${lesson.level_no}</button>
    `;
    // 4. append inside every lesson
    levelContainer.append(btnDiv)
  }
 
}
loadLessons()