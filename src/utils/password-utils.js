export function checkPasswordStrength(password){

    const feedback={
        text:"",
        background:"",
        width:""
    }
    let strength=0;
     if(password.length>=16){
        strength+=1;
    }
    if(password.length>=8){
        strength+=1;
    }
    if(/[A-Z]/.test(password)){
        strength+=1;
    }
    if(/[a-z]/.test(password)){
        strength+=1;
    }
    if(/[0-9]/.test(password)){
        strength+=1;
    }
    if(/[!@#$%^&*]/.test(password)){
        strength+=1;
    }
    switch(strength){
        case 1:
                feedback.background ="bg-red-400"
                feedback.text="Very Weak"
                feedback.width="w-1/6"
                break
        case 2:
            
                feedback.background="bg-orange-400",
                feedback.text="weak",
                feedback.width="w-2/6"
                break
        case 3:
            
                feedback.background="bg-yellow-400",
                feedback.text="Fair",
                feedback.width="w-3/6"
                break
        case 4:
            
                feedback.background="bg-lime-400",
                feedback.text="Good",
                feedback.width="w-4/6"
                break
        case 5:
            
                feedback.background="bg-primary-400",
                feedback.text="Strong",
                feedback.width="w-5/6"
                break
        case 6:
            
                feedback.background="bg-primary-600",
                feedback.text="Very Strong",
                feedback.width="fw-ull"
                break
    }
    return feedback

}