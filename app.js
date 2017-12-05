
// const studentList contains the details 0r list of students.
const studentItem=() => {
  const studentDetails = document.getElementsByClassName('student-item');
  return studentDetails ;
};

// Number of students in the list
const studentCount = studentItem().length;

// Number of pages based on length of studentList
const pageCount = () => {
return Math.ceil((studentCount/10)) ;

};

//Shows the page with 10 students based on page number

const showPage = (pageNumber)=>{



for(let i=0;i<studentCount;i++){

    studentItem()[i].style.display = 'none' ;



    if(i >= (pageNumber-1)*10  &&  i < (pageNumber*10)){

      studentItem()[i].style.display = 'block' ;

    }else{}

    }

  };

// Function to append the page links

  function appendPageLinks(){
    const pageDiv = document.getElementsByClassName('page');
    const newDiv = document.createElement('div');
    const newUl = document.createElement('ul');

    pageDiv[0].removeChild(pageDiv[0].lastChild);

    newDiv.appendChild(newUl);
    newDiv.className="pagination";


  for(let i = 0 ; i < pageCount();i++){

    const newLi = document.createElement('li');
    const newA = document.createElement('a');
     newUl.appendChild(newLi);
     newLi.appendChild(newA);
     newA.textContent = i+1 ;

     newA.addEventListener('click',()=>{
      showPage(i+1) ;

     })

  }
    pageDiv[0].appendChild(newDiv);
    document.getElementsByTagName('a')[0].className ='active';

}



 pageCount();
 showPage(1);
 appendPageLinks();








