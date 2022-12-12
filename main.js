const textArea = document.querySelector('#message-content')
const durationInput = document.querySelector('#duration')
const cancelable = document.querySelector('#cancelable')
const radioSuccess  = document.querySelector('#success')
const radioError = document.querySelector('#error')
const addToastButton = document.querySelector('#add-button')
const clearToastButton = document.querySelector('#clear-button')
const cancelButton = document.querySelector('.cancel-button')
const toast = document.createElement('div')
const rm = document.querySelector('.cancel-button')
toast.classList.add('indep')

let duration = durationInput.value

let text = textArea.value

// cancelButton.addEventListener('click', ()=>{
//     document.querySelector('.toast').remove()
// })

textArea.addEventListener('input', ()=>{
    text = textArea.value
})

durationInput.addEventListener('input', ()=>{
    duration = +(durationInput.value)
    console.log(duration)
})

clearToastButton.addEventListener('click', ()=>{
    toast.innerHTML=''
})

const state = {
    error,
    success,
}

radioError.addEventListener('click', ()=>{
    state.success = false
    state.error = true
})

radioSuccess.addEventListener('click', ()=>{
    state.success = true
    state.error = false
})



console.log(radioError.value, duration)

const renderSuccessToast = ()=>{
    return(
        `
        <div class="toast success-toast">
        <p class="message">${text}</p>
        <button class="cancel-button">X</button>
    </div>
        `
    )
}


const  renderErrorToast = ()=>{
    return(
        `
        <div class="toast error-toast">
        <p class="message">${text}</p>
        <button class="cancel-button">X</button>
    </div>
        `
    )
}


addToastButton.addEventListener('click', ()=>{

    if(state.success){ 
        
        toast.innerHTML += renderSuccessToast()

        document.body.appendChild(toast)

      

    }
    else if(state.error) {
        toast.innerHTML += renderErrorToast()
        document.body.appendChild(toast)

    }        
   

    setTimeout(()=>{
        document.querySelectorAll('.toast')[0].remove()
    }, duration)


})


