function courses() {
  const getCourseInfo = async (url) => {
    const result = await fetch(url);
    if (!result.ok) {
      throw new Error(`Could not fetch ${url}. Status: ${result.status}`);
    }

    return result.json();
  };

  const courseParent = document.querySelector(".product__cards");

  class CourseInfo {
    constructor(
      title,
      description,
      purposeList,
      courseAudienceTitle,
      courseAudienceList,
      courseContentList
    ) {
      this.title = title;
      this.description = description;
      this.purposeList = purposeList;
      this.courseAudienceTitle = courseAudienceTitle;
      this.courseAudienceList = courseAudienceList;
      this.courseContentList = courseContentList;
    }

    render() {
      courseParent.innerHTML = ` 
        <h2 class="course-details-title"> ${this.title} </h2>
        <div class="container">
        </div>

        <div class="course-details-wrapper">
        <div class="course-details-description">${this.description}</div> 
        <div class=course-details-purpose>
        <div class="course-details-subtitle">Цели курса:</div>
        <ul class="course-details-list">
        ${this.purposeList
          .map((item) => `<li class="course-details-list-item" >${item}</li>`)
          .join("")}
        </ul>
        </div>

        <div class="course-details-audience" >
        <div class="course-details-subtitle">${this.courseAudienceTitle}</div>
        <ul class="course-details-list">
        ${this.courseAudienceList
          .map((item) => `<li class="course-details-list-item">${item}</li>`)
          .join("")}
        </ul>

        <ul class="course-details-list">
        ${this.courseContentList
          .map((item) => `<li class="course-details-list-item">${item}</li>`)
          .join("")}
        </ul>



        </div>





        </div>

        
        
        
        
        
        `;
    }
  }

  getCourseInfo(`http://localhost:3000/courses`).then((data) => {
    console.log(data[0].title);
    new CourseInfo(
      data[0].title,
      data[0].description,
      data[0].purpose,
      data[0].courseAudienceTitle,
      data[0].courseAudienceList,
      data[0].courseContentList
    ).render();
  });
}

export default courses;
