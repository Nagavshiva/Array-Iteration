

const url ='https://restcountries.com/v3.1/all';

const req = async()=>{
    const res = await fetch(url);
    const result = await res.json();
    console.log(result);
    rescountries(result);
}
req();

const rescountries = (countryData)=>{

         //.......................question 5..................//
         var total=countryData.reduce((acc,element)=>acc+element.population,0);
 
     alert(` Task 5 -Total Population:${total}`);


         //.......................question 4..................//
            alert('In console.log,Task 4: USD Currency Country is displayed.')
       for(let i=0; i<countryData.length; i++){
     
        let isCurrency = countryData[i].currencies;
        if(isCurrency){
           let currencyObj = countryData[i].currencies;
           let isUSD = currencyObj.USD !== undefined;
           if(isUSD){
               console.log("Currency usd Country: ",countryData[i].name.common);
           }
        }
      }
     
         //.......................question 3..................//
        alert('In console.log,Task 3: All Country Name,Capital,Flag is displayed.')
   const result=countryData.forEach(element =>  {  
   
    console.log(`Country: Name-(${element.name.common}) Capital- (${element.capital}) Flag-(${element.flag})`)
})

  
   //.......................question 2..................//
   const population= countryData.filter((element)=>element.population<200000)
  alert('In console.log,Task2:Less than 2L population is displayed.');
   console.log(population);
           
    
    //.......................question 1..................//

    alert ('In console.log,Task1:Asia Region is displayed.')

    const Region=countryData.filter((item)=>item.region ==='Asia' );
         
           console.log(Region);
    
     
    


}


