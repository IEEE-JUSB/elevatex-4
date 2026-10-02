export interface FormDataType{
    name: string;
    email: string;
    password: string;
    college: string;
    dept: string;
    year: string;
    phone: string;
}

export const validateForm = (formData: FormDataType) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!formData.name) return {ok: false, message: "Name is required!"};
    // regex check
    if(!formData.email || !emailRegex.test(formData.email)) return {ok: false, message: "Invalid email address!"}; 
    if(!formData.password || formData.password.length < 8) return {ok: false, message: "Invalid password!"};
    if(!formData.college) return {ok: false, message: "College is required!"};
    if(!formData.dept) return {ok: false, message: "Department is required!"};
    if(!formData.year) return {ok: false, message: "Year is required!"};
    // regex check
    if(!formData.phone) return {ok: false, message: "Phone number is required"};

    return {ok: true, message: "Registration data validated."}
}