
// arrays to store the student details

const originalStudentList = document.getElementsByClassName('student-item');
const studentDetails = document.getElementsByClassName('student-item');
const matchedStudentsList = [];

const pageDiv = document.getElementsByClassName('page')[0];

// showPage function to display 10 students per page , works in reference to page link clicked

function showPage(pageNumber,studentList){
  for (let i = 0;i < studentList.length;i++ ){
    studentList[i].style.display = 'none';
    if(i >= (pageNumber-1)*10  &&  i < (pageNumber*10)){
      studentList[i].style.display = 'block' ;

    }
  }
}

// function to create links and append them to the page's html

function appendPageLinks(studentList){
  let pages = Math.ceil(studentList.length/10);
  //const pageDiv = document.getElementsByClassName('page')[0];
  const comment = pageDiv.lastChild;
  pageDiv.removeChild(comment);

  let div = document.createElement('div');
  let ul = document.createElement('ul');
  div.className = 'pagination';
  div.appendChild(ul);

  for(let i =0;i < pages;i++){
    let li = document.createElement('li');
    let atag = document.createElement('a');
    atag.textContent = i+1;
    atag.addEventListener('click',()=>{showPage(i+1,studentList)});
    li.appendChild(atag);
    ul.appendChild(li);
  }
  pageDiv.appendChild(div);
  ul.firstChild.className = 'active';
  showPage(1,studentList);
}

// call the function to append the links to page and show the first page
appendPageLinks(originalStudentList);
//showPage(1,originalStudentList);

// Create Search Bar

const headerDiv = document.getElementsByClassName('page-header')[0];
const commnet = headerDiv.lastChild;
const searchDiv = document.createElement('div');
const searchInput = document.createElement('input');
const searchButton = document.createElement('button');
searchButton.addEventListener('click',() => {
  search()});

searchDiv.appendChild(searchInput);
searchDiv.appendChild(searchButton);
headerDiv.removeChild(commnet);
headerDiv.appendChild(searchDiv);


searchDiv.className = 'student-search';
searchInput.placeholder = 'Search for students';
searchButton.textContent = 'Search';

//search bar complete



// function to show search results

function search(){
  const studentNames = document.getElementsByTagName('h3');
  const studentEmails = document.getElementsByClassName('email');

  for (let i = 0 ; i < studentDetails.length;i++){
    studentDetails[i].style.display = 'block';
    let name = studentNames[i].innerText;
    let email = studentEmails[i].innerText;


    if(name.indexOf(searchInput.value.toLowerCase()) > -1 || email.indexOf(searchInput.value.toLowerCase()) > -1){
      matchedStudentsList.push(studentDetails[i]);
    }else{
      studentDetails[i].style.display = 'none' ;
    }
  }

  searchButton.innerHTML = 'Go Back';
  searchButton.style.color = 'red';
  searchButton.addEventListener('click',()=>{window.location.reload()})

  if(matchedStudentsList.length === 0 ){
      let message = document.getElementsByTagName('h2')[0];
      message.innerHTML = "NO STUDENTS FOUND";
      pageDiv.removeChild(pageDiv.lastChild);
  }else if(matchedStudentsList.length < 10 ){
    pageDiv.removeChild(pageDiv.lastChild);
  }else{
    appendPageLinks(matchedStudentsList);
  }

}

























