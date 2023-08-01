
let openMenu=document.querySelector('.humber-menu');
let close=document.querySelector('.close');
let menuPlate=document.querySelector('.menu');


openMenu.addEventListener('click',()=>{
    menuPlate.classList.add('show-menu');
});
close.addEventListener('click',()=>{
    menuPlate.classList.remove('show-menu');
})


// next

let CartBtn=document.querySelector('.cart-btn');
let CartBox=document.querySelector('.card-box');
let cardClose=document.querySelector('.Cart-close');

CartBtn.addEventListener('click',()=>{
    CartBox.classList.add('card-show');
});

 cardClose.addEventListener('click',()=>{
    CartBox.classList.remove('card-show');
 });


 // slide image 

 let slideImage=document.querySelectorAll('.slide-img');
 let Btn=document.querySelectorAll('.btn');
//  let leftBtn=document.querySelector('.left');
 
 let num=0;
 let index=0;

  let next1=(x)=>{
      num=num+x;
      slideshow(num);
    }
    let slideshow=(index)=>{
        if(index==slideImage.length){
            num=0;
            index=0;
            
        }if
        (index<0){
            num=slideImage.length-1;
            index=slideImage.length-1;
        }
        
        for(let y of slideImage){
            y.style.display="none";
        }
        slideImage[num].style.display="block";
    }
    // setInterval(next1,1000);


    let menuData=[
        { id:1, 
            image:'./Photo/menu-1-370x278.jpg',
            icon:'./photo/salad.png',
            title:'salad'
        },
        { id:2, 
            image:'./Photo/menu-2-370x278.jpg',
            icon:'./photo/pizza.png',
            title:'pizzas'
        },
        { id:3, 
            image:'./Photo/menu-3-370x278.jpg',
            icon:'./photo/burger.png',
            title:'burger'
        },
        { id:4, 
            image:'./Photo/menu-4-370x278.jpg',
            icon:'./photo/ice-cream.png',
            title:'ice-crean'
        },
        { id:5, 
            image:'./Photo/menu-5-370x278.jpg',
            icon:'./photo/drink.png',
            title:'drink'
        },
        { id:6, 
            image:'./Photo/menu-6-370x278.jpg',
            icon:'./photo/dish.png',
            title:'seafood'
        }

    ];


    let menucard=document.querySelector('.menu-card');

    menuData.map((data)=>{
         let{image,icon,title,id}=data;
         menucard.innerHTML+=`
         <div class="menu-image"><img src="${image}" alt="" class="img-menu">
         <div class="menu-text">
         <div class="icon-text"><img src="${icon}" alt="" class="logo-menu">
         <h3 class="text">${title}</h3>
         </div>
         </div>
         </div>
         `

    })

     
   
    
    
     
   