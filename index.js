
let errors = [];
function checkAll(){
    errors = [];
    let inputs = document.querySelectorAll('input');
    let errorsInfo = document.querySelector('.errorsInfo')
    for(let input of inputs){
        let error = checkValidityInput(input);
        if(error){
            errors.push(error);
        }
    }
    if(errors.length>0){
        errorsInfo.innerHTML = errors.join('. \n');
    }
}

function checkValidityInput(input){
    switch(input.name){
        case 'name':
            if(input.value.length<2){
                return 'Your name should be more than 1 symbols';
            }
            break;
        case 'email':
            if(!input.value.includes('@')){
                return 'Your email should include @';
            }
            break;
        case 'name':
        if(input.value <= 0){
                return 'Your age should be more than 0';
            }
            break;
    }
}

document.getElementById('myForm').addEventListener('submit', function(e){
    e.preventDefault();
    checkAll();
    if(errors.length > 0){
        return;
    }
});