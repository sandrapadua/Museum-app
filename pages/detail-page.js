const submitComment = () => {
    const inputField = document.getElementById('name')
    let name = inputField.value
    console.log(name)
    const textArea = document.getElementById('msg')
    const msg = textArea.value
    console.log(msg)
    if(name.charAt(0)!== name.charAt(0).touppercase){
    name = name.charAt(0).toUpperCase() + name.slice(1);
    }
    if(doesNotPassAllValidations(name,msg)){
       return null; 
    }
    else{
    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    h3.innerHTML = `${name} said:`
    p.innerHTML = msg
    comment.classList.add('comment')
    comment.appendChild(h3)
    comment.appendChild(p)
    console.log(comment)

    const commentSection = document.getElementById("comments")
    console.log(commentSection);
    commentSection.appendChild(comment)
    inputField.value = null
    textArea.value = null
    }
    function doesNotPassAllValidations(name,msg){
        if(!name){
            alert('You forgot to fill in your name!!')
            return true
        }
        if(!msg){
            alert('You forgot to fill in your message!!')
            return true
        }
        if(msg.length > 280){
            alert('comment is too long!')
            return true   
        }
        var letters = /^[a-zA-Z ]+$/;
        if(msg.match(letters)){
            return false  
        }
        else{
            alert('Warning: this comment has been flagged as offensive')
            return true   
        }
        return false
    }

}