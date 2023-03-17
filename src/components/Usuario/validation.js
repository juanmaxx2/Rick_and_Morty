const validation = (userData, errorsImportados) => {
    const errors = {...errorsImportados}

    //! Errores del usuario
    if (!userData.username) {
        errors.username = 'Por Favor completa este campo';
    }
    else if(userData.username.length > 35){
        errors.username = 'No se puede superar los 35 caracters';
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i.test(userData.username)){
        errors.username = 'Email invalido';
    }
    else {
        errors.username = '';
    }

    //! Errores de la password
    if(userData.password.length<6 || userData.password.length>10){
        errors.password ='Longitud de password invalida';
    }
    else if (!/\d/.test(userData.password)){
        errors.password='Debe contener al menos un numero';
    }
    else {
        errors.password ='';
    }
    
    return errors;
}

export default validation;