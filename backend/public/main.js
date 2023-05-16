const select = (selector) =>document.querySelector(selector)


const form = select('.form');
const message = select('.message')




const displayMessage = (text, color)=>{

    message.style.visibility = 'visible';
    message.style.backgrounColor = color;
    message.innerText = text; 
    setTimeout(()=>{
        message.visibility = 'hidden'

    },3000)
}
const validateForm = ()=>{
    const title = select('#title').value.trim()
    const content = select('#content').value.trim()
    const thumbnail = select('#thumbnail').value
    const category = select('#category').value

    const exceptImageFiles = [ 'jpg','png','jpeg','gif']
    
    if(!title || !content ||!thumbnail ||category =='0'){

        return displayMessage('field can not be empty','red')
    }

    const extension = thumbnail.split('.').pop();
    if(!exceptImageFiles.includes(extension)){

        
        return displayMessage('have to be a image','red')
    }
    

    return true;
}
 
form.addEventListener('submit', async (e)=>{
    e.preventDefault();


const valid = validateForm()

if(valid){
    const formData = new FormData(form)
   await postData(formData);
 
}
});

const postData = async (data) =>{
    const result = await fetch('/api/create',{
        method:'POST',
        body:data,
       
       
    })
}

