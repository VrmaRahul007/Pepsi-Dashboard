const pepsi =[
    {
        name:"Pepsi Diet",
        amount:"350 cl",
        amount_per:"8.6%",
        fat:"0g",
        fat_per:"0%",
        sodium:"310mg",
        sodium_per:"1%",
        carbohydrate:"48g",
        carbohydrate_per:"15.3%",
        protein:"0g",
        protein_per:"0%",
        ml:"250ml,",
        poster:"img/1 Pespi white.png",
        poster2:"img/1 Pespi blue.png",
        main_poster:"img/pepsi diet.png"

        
    },
    {
        name:"Pepsi Classic",
        amount:"330 cl",
        amount_per:"7.5%",
        fat:"0g",
        fat_per:"0%",
        sodium:"30mg",
        sodium_per:"1%",
        carbohydrate:"41g",
        carbohydrate_per:"14%",
        protein:"0g",
        protein_per:"0%",
        ml:"330ml,",
        poster:"img/2 can white.png",
        poster2:"img/2 can blue.png",
        main_poster:"img/can.png"
    },
    {
        name:"Pepsi 500ML",
        amount:"350 cl",
        amount_per:"12.9%",
        fat:"0g",
        fat_per:"0%",
        sodium:"40mg",
        sodium_per:"2%",
        carbohydrate:"52g",
        carbohydrate_per:"21.7%",
        protein:"0g",
        protein_per:"0%",
        ml:"500ml,",
        poster:"img/3 Pepsi white.png",
        poster2:"img/3 Pepsi blue.png",
        main_poster:"img/pepsi .5ltr.png"
    },
    {
        name:"Pepsi 1 LTR",
        amount:"510 cl",
        amount_per:"16.3%",
        fat:"0g",
        fat_per:"0%",
        sodium:"49mg",
        sodium_per:"2%",
        carbohydrate:"61g",
        carbohydrate_per:"27.4%",
        protein:"0g",
        protein_per:"0%",
        ml:"1 LTR,",
        poster:"img/4 Pepsi white.png",
        poster2:"img/4 Pepsi blue.png",
        main_poster:"img/pepsi 1ltr.png"
    },
    {
        name:"Pepsi 1.5 LTR",
        amount:"625 cl",
        amount_per:"19.4%",
        fat:"0g",
        fat_per:"0%",
        sodium:"50mg",
        sodium_per:"3%",
        carbohydrate:"60g",
        carbohydrate_per:"30.8%",
        protein:"0g",
        protein_per:"0%",
        ml:"1.5 LTR,",
        poster:"img/5 Pepsi white.png",
        poster2:"img/5 Pepsi blue.png",
        main_poster:"img/pepsi 1.5ltr.png"
    },
    {
        name:"Pepsi 2 LTR",
        amount:"729 cl",
        amount_per:"37.2%",
        fat:"0g",
        fat_per:"0%",
        sodium:"60mg",
        sodium_per:"4%",
        carbohydrate:"69g",
        carbohydrate_per:"33.2%",
        protein:"0g",
        protein_per:"0%",
        ml:"2 LTR,",
        poster:"img/6 Pepsi white.png",
        poster2:"img/6 Pepsi blue.png",
        main_poster:"img/pepsi 2ltr.png"
    }
]

Array.from(document.getElementsByClassName("card_pepsi")).forEach((ele,i)=>{
    ele.addEventListener('mouseover',()=>{
        document.getElementsByClassName('pepsi_hover_img')[i].src = pepsi[i].poster;
    })
    ele.addEventListener('mouseout',()=>{
        document.getElementsByClassName('pepsi_hover_img')[i].src = pepsi[i].poster2;
    })
})
Array.from(document.getElementsByClassName("card_pepsi")).forEach((ele,i)=>{
    ele.addEventListener('click',()=>{
        document.getElementById('Main_bottle').src = pepsi[i].main_poster
        document.getElementById('main_title').innerText=pepsi[i].name
        document.getElementById('cl').innerText=pepsi[i].amount
        document.getElementById('cl1').innerText=pepsi[i].amount_per
        document.getElementById('fat').innerText=pepsi[i].fat
        document.getElementById('fat1').innerText=pepsi[i].fat_per
        document.getElementById('sodium').innerText=pepsi[i].sodium
        document.getElementById('sodium1').innerText=pepsi[i].sodium_per
        document.getElementById('carbs').innerText=pepsi[i].carbohydrate
        document.getElementById('carbs1').innerText=pepsi[i].carbohydrate_per
        document.getElementById('protein').innerText=pepsi[i].protein
        document.getElementById('protein1').innerText=pepsi[i].protein_per
        document.getElementById('ml_title').innerText=pepsi[i].ml

    })


})
let index=1;
document.getElementById('left_btn').addEventListener('click',()=>{
    index -=1;
    if(index<0){
        index=pepsi.length;

    }
    document.getElementById('Main_bottle').src = pepsi[index].main_poster
    document.getElementById('main_title').innerText=pepsi[index].name
    document.getElementById('cl').innerText=pepsi[index].amount
    document.getElementById('cl1').innerText=pepsi[index].amount_per
    document.getElementById('fat').innerText=pepsi[index].fat
    document.getElementById('fat1').innerText=pepsi[index].fat_per
    document.getElementById('sodium').innerText=pepsi[index].sodium
    document.getElementById('sodium1').innerText=pepsi[index].sodium_per
    document.getElementById('carbs').innerText=pepsi[index].carbohydrate
    document.getElementById('carbs1').innerText=pepsi[index].carbohydrate_per
    document.getElementById('protein').innerText=pepsi[index].protein
    document.getElementById('protein1').innerText=pepsi[index].protein_per
    document.getElementById('ml_title').innerText=pepsi[index].ml
})
document.getElementById('right_btn').addEventListener('click',()=>{
    index ++;
    if(index>pepsi.length){
        index=0;

    }
    document.getElementById('Main_bottle').src = pepsi[index].main_poster
    document.getElementById('main_title').innerText=pepsi[index].name
    document.getElementById('cl').innerText=pepsi[index].amount
    document.getElementById('cl1').innerText=pepsi[index].amount_per
    document.getElementById('fat').innerText=pepsi[index].fat
    document.getElementById('fat1').innerText=pepsi[index].fat_per
    document.getElementById('sodium').innerText=pepsi[index].sodium
    document.getElementById('sodium1').innerText=pepsi[index].sodium_per
    document.getElementById('carbs').innerText=pepsi[index].carbohydrate
    document.getElementById('carbs1').innerText=pepsi[index].carbohydrate_per
    document.getElementById('protein').innerText=pepsi[index].protein
    document.getElementById('protein1').innerText=pepsi[index].protein_per
    document.getElementById('ml_title').innerText=pepsi[index].ml
})

