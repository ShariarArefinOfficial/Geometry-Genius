console.log("connected");

//Tringle Calculation

document.getElementById('triangle-calculation').addEventListener('click',function(){
    const half=0.5;
    //Base INput
    const tringleBaseInput=document.getElementById('tringle-base-input');
    const tringleBase=parseFloat(tringleBaseInput.value);


    //Height INput 
    const tringleHeightInput=document.getElementById('tringle-height-input');
    const tringleHeight=parseFloat(tringleHeightInput.value);

    //Calculation
    const area=half * tringleBase *tringleHeight;
   
   //show result
    const result=document.getElementById('resultArea');
    result.innerText="Triangle Area is "+ area;

})

//rectangle Calculation
document.getElementById('rectangle-calculation').addEventListener('click',function(){
   
    //Width INput
    const rectangleWidthInput=document.getElementById('rectangle-width-input');
    const rectangleWidth=parseFloat(rectangleWidthInput.value);


    //Length INput 
    const rectangleLengthInput=document.getElementById('rectangle-length-input');
    const rectangleLength=parseFloat(rectangleLengthInput.value);

    //Calculation
    const area= rectangleWidth *rectangleLength;


    //show result
    const result=document.getElementById('resultArea');
    result.innerText="Rectangle Area is "+ area;
})

//Parallelogram Calcultaion
function ParallelogramArea(){
     //Width INput
     const ParallelogramBaseInput=document.getElementById('Parallelogram-base-input');
     const ParallelogramBase=parseFloat(ParallelogramBaseInput.value);
 
 
     //Length INput 
     const ParallelogramHeightInput=document.getElementById('Parallelogram-height-input');
     const ParallelogramHeight=parseFloat(ParallelogramHeightInput.value);
 
     //Calculation
     const area= ParallelogramBase *ParallelogramHeight;

     //show result
    const result=document.getElementById('resultArea');
    result.innerText="Parallelogram Area is "+ area;

    }



//Rhombus
function rhombusArea(){
    const half=0.5;
    //Base INput
    const rhombusDiagonalOneInput=document.getElementById('Rhombus-diagonal1-input');
    const rhombusDiagonalOne=parseFloat(rhombusDiagonalOneInput.value);


    //Height INput 
    const rhombusDiagonalTwoInput=document.getElementById('Rhombus-diagonal2-input');
    const rhombusDiagonalTwo=parseFloat(rhombusDiagonalTwoInput.value);

    //Calculation
    const area=half * rhombusDiagonalOne *rhombusDiagonalTwo;
      //show result
      const result=document.getElementById('resultArea');
      result.innerText="Rhombus Area is "+ area;
}


//Pentagon
function pentagonArea(){
    const half=0.5;
    //Base INput
    const pentagonPInput=document.getElementById('pentagon-p-input');
    const pentagonP=parseFloat(pentagonPInput.value);


    //Height INput 
    const pentagonBInput=document.getElementById('pentagon-b-input');
    const pentagonB=parseFloat(pentagonBInput.value);

    //Calculation
    const area=half * pentagonP *pentagonB;

     //show result
     const result=document.getElementById('resultArea');
     result.innerText="Pentagon Area is "+ area;
}

//ellipse
function ellipseArea(){
    //Base INput
    const ellipseAInput=document.getElementById('ellipse-a-input');
    const ellipseA=parseFloat(ellipseAInput.value);


    //Height INput 
    const ellipseBInput=document.getElementById('ellipse-b-input');
    const ellipseB=parseFloat(ellipseBInput.value);

    //Calculation
    const area=Math.PI * ellipseA *ellipseB;
    const result=document.getElementById('resultArea');
    result.innerText="ellipse Area is "+ area;
}