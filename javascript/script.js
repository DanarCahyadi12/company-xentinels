const detailBtn = document.querySelectorAll('.detail-btn')
const projectBtn = document.querySelectorAll('.project-btn')
const detailCard = document.querySelectorAll('.detail-card')
const msgBtn = document.querySelectorAll('.msg-member')
const cancelBtn = document.querySelector("#cancel-btn")
const listProjectCard = document.querySelector('.cont-project')
const searchBar = document.querySelector('#searchBar')
const listProject = document.querySelectorAll('.list-project')
const parentProject = document.querySelector('.cont-project')
const imageProject = parentProject.querySelector("img")
const nameOwnerProject = parentProject.querySelector(".name-owner-project")
const noProject = document.querySelector(".no-project")
const changeBtn = document.querySelectorAll('.change-btn')
const linkElement = document.querySelector('link')

const Data = [
    {
        name : "Danar",
        image : "../image/danar.jpeg",
        project : [
            {
                nameProject :"Saklar lampu",
                sourceProject : "../projects/lamp/index.html"
            },
            {
                nameProject :"Stopwatch",
                sourceProject : "../projects/Stopwatch/index.html"
            },
            {
                nameProject :"Timer",
                sourceProject : "../projects/Timer/index.html"
            }
        ]

    },
    {
        name : "Wida",
        image : "../image/wida.jpeg",
        project : [
         
        ]

    },
    {
        name : "Hellen",
        image : "../image/hellen.jpeg",
        project : [
        
          
        ]

    },
    {
        name : "Tuja",
        image : "../image/tuja.jpeg",
        project : [
           
        
        ]

    },
    {
        name : "Edy",
        image : "../image/edy.jpeg",
        project : [
       
        ]

    }
]

const stylingMem = [
    //Danar//
    '../team-styling/12.css',

    //Wida//
    '../team-styling/15.css',
    
    //Hellen//
    '../team-styling/05.css',

    //Tuja//
    '../team-styling/17.css',

    //Edy//
    '../team-styling/18.css'

]

let indexProject = 0




const ShowdDetailcard =(param) => {
    detailCard[param].classList.toggle('show-detail-card')
}
detailBtn.forEach((val,i) => {
    val.addEventListener('click',() =>[
        ShowdDetailcard(i)
    ])
})

const targetListProjectcard = (index) =>{
    imageProject.setAttribute("src",Data[index].image)
    nameOwnerProject.innerHTML = Data[index].name
    listProject.forEach((val,i) => {
        if(Data[index].project ==0 ){
            noProject.style.display = "block"
            val.style.display = "none"
        
        }else if(i <= Data[index].project.length-1){
            val.innerHTML = Data[index].project[i].nameProject
            val.setAttribute("href",Data[index].project[i].sourceProject)
            noProject.style.display = "none"
            val.style.display = "block"
        }else{
            val.style.display ="none"
        }
    })
}

projectBtn.forEach((val,i) => {
    val.addEventListener('click',() => {
        listProjectCard.classList.replace('hide-project-card','show-card-project')
        indexProject = i
        targetListProjectcard(indexProject)
    })
})

cancelBtn.addEventListener('click',() => {
    listProjectCard.classList.replace('show-card-project','hide-project-card')
})


const SearchProject = (input,index) => {
   let filtered = Data[index].project.filter((val,i) => {
        let included = val.nameProject.toLowerCase().includes(input) ||  val.nameProject.toUpperCase().includes(input)
        included ? listProject[i].style.display = "block" : listProject[i].style.display = "none" 
    
    })
}

searchBar.addEventListener('input',e=> {
    let values = e.target.value.toUpperCase()
    SearchProject(values,indexProject)
})

changeBtn.forEach((val,i) => {
    val.addEventListener('click',()=> {
        linkElement.setAttribute('href',stylingMem[i])
    })
})
