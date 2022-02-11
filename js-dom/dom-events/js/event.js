function makeRed(){
    document.body.style.backgroundColor='red';
}

function makeGreen(){
    document.body.style.backgroundColor='green';
}



// handel blue button click by setting funtion name;


const bluebutton = document.getElementById('makeBlue');
        bluebutton.onclick = makeBlue;

        function makeBlue(){
            document.body.style.backgroundColor='blue';
        }



        // handel event using annonymus function
        const makeTom = document.getElementById('make-tomato');

        makeTom.onclick = function(){
            document.body.style.backgroundColor='tomato';
        }


        // handel by using add event listener

        const goldenButton = document.getElementById('make-goldenRod');
        // console.log(goldenButton);
        goldenButton.addEventListener('click',makeGolden)
        function makeGolden(){
            document.body.style.backgroundColor='goldenRod';
        }
     
        



        const hotPinkButton = document.getElementById('make-hotPink');
        hotPinkButton.addEventListener('click',
            function (){
                document.body.style.backgroundColor='hotPink';
            }
        )







