const container = document.querySelector(".container");
const renderCourse = (course) => {
  const html = `
    <section class="card">
        <h3 class="title">${course.courseNo} ${course.courseNameEn}</h3>
        <h4 class="credits">จำนวนหน่วยกิต</h4>
        <p class="numOfCredits">${course.credit} หน่วยกิต</p>
        <h4 class="schedule">ภาควิชา/กลุ่มวิชา/สาขาวิชา</h4>
        <p>${course.department}</p>
        <h4>จำนวนที่นั่ง</h4>
        <p>${course.totalSeats}</p>
      </section> 
    `;
  container.insertAdjacentHTML("beforeend", html);
};

const getCourse = async () => {
  const res = await fetch("https://api.minireg.thanayut.in.th/courses");
  const data = await res.json();

  const numCourse = data.courses.length;
  const randNum = Math.floor(Math.random() * numCourse);
  const course = await data.courses[randNum];
  //   console.log(course);
  return course;
};

const main = async () => {
  try {
    const courseData = await getCourse();
    renderCourse(courseData);
  } catch (err) {
    console.log(err);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
