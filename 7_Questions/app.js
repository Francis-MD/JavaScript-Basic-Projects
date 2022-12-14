//using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
    //console.log(question);
    const btn = question.querySelector('.question-btn');
    //console.log(btn);
    //showing the text on click event
    btn.addEventListener('click', function () {
    //hiding non-selected text when selecting another question
    questions.forEach(function (item) {
        if (item !== question) {
            item.classList.remove('show-text');
        }
    });

        question.classList.toggle('show-text');
    });
});


// TRAVERSING THE DOM

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;

//     question.classList.toggle("show-text");
//   });
// });