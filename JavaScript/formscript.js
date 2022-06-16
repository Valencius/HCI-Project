const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const country = document.getElementById('country');
const tnc = document.getElementById('tnc')

form.addEventListener('submit', e => {
    e.preventDefault();

    validate();
    
});


const setError = (element,message) => {
    const input = element.parentElement;
    const errorDisplay = input.querySelector('.error');

    errorDisplay.innerText = message;
    input.classList.add('error');
    input.classList.remove('success');

}

const setErrorcheck = (element,message) => {
    const input = element.parentElement.parentElement.parentElement;
    const errorDisplay = input.querySelector('.error');

    errorDisplay.innerText = message;
    input.classList.add('error');
    input.classList.remove('success');

}

const setSuccesscheck = element => {
    const input = element.parentElement.parentElement.parentElement
    const errorDisplay = input.querySelector('.error')

    errorDisplay.innerText=''
    input.classList.add('success')
    input.classList.remove('error')
}

const setSuccess = element => {
    const input = element.parentElement
    const errorDisplay = input.querySelector('.error')

    errorDisplay.innerText=''
    input.classList.add('success')
    input.classList.remove('error')
}

const validate = () => {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const countryValue = country.value.trim();
    const tncValue = tnc;
    

    if(nameValue === ''){
        setError(name,'Name must be filled!')
    }else{
        setSuccess(name);
    }

    if(emailValue === ''){
        setError(email,'Email must be filled!')
    }else if(!emailValue.includes(".com") || !emailValue.includes('@') ){
        setError(email, 'Email must consist .com or @')
    }else{
        setSuccess(email);
    }

    if(phoneValue === ''){
        setError(phone,'Phone Number must be filled!')
    }else if(phoneValue.length < 10 || phoneValue.length > 12){
        setError(phone, 'Phone Number must be between 10-12 Numbers')
    }else{
        setSuccess(phone);
    }

    if(countryValue === ''){
        setError(country,'Country must be filled!')
    }else if(countryValue === 'Indonesia' || countryValue === 'Malaysia'|| countryValue == 'Singapore'){
    
        setSuccess(country);
        
    }else{
        setError(country, 'Country can only be Indonesia, Malaysia and Singapore (Capital)')
    }

    if(tnc.checked){
        setSuccesscheck(tnc);
    }else{
        setErrorcheck(tnc,'You must agree to Terms & Conditions!')
    }
}