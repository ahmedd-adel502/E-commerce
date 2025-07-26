import { toast, Zoom } from "react-toastify";
import { apiClient } from "../components/ApiClient/ApiClient"


export async function sendDataToSignUp(values){

    
    const options = {
        method: "POST",
        url: "/auth/signup",
        data: {
            name: values.firstName + " " + values.lastName,
            email: values.email,
            password: values.password,
            rePassword: values.confirmPassword,
            phone: values.phone,
        }
    }
    const {data} = await apiClient.request(options)
    return data;
}

export async function sendDataToLogin(values) {
    const options = {
        method: "POST",
        url: "/auth/signin",
        data: {
            email: values.email,
            password: values.password,
        },
    };

    const {data} = await apiClient.request(options);
     return data;
     
    
    
}

export async function sendEmailTocheck(values){
    const options = {
        method: "POST",
        url: "/auth/forgotPasswords",
        data: {
            email: values.email,
        }
    }
    const {data} = await apiClient.request(options)
    if (data.statusMsg === "success") {
        toast.success(data.message,{autoClose:2000,position:`top-right`,transition:Zoom,theme:"colored"});
        return data;
    }
    
}

export async function verifySentCode(values){
    const options = {
        method: "POST",
        url: "/auth/verifyResetCode",
        data: {
            resetCode:values.resetCode
        }
    }
    const {data} = await apiClient.request(options)
    toast.success(data.status,{autoClose:2000,position:`top-right`,transition:Zoom,theme:"colored"});
    return data;
    
}

export async function resetPassword(values){
    const options = {
        method: "PUT",
        url: "/auth/resetPassword",
        data: {
            email:values.email,
            newPassword:values.newPassword
        }
    }
    const response = await apiClient.request(options)
    toast.success("Your password has been reset successfully",{autoClose:2000,position:`top-right`,transition:Zoom,theme:"colored"});
    return response;
    
    
}