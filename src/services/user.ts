


const UserServices = {

    //REALIZA O LOGIN DO USUÁRIO
    login: async (login:string, password:string) => {
        
        return fetch(`${process.env.API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({login, password})
        }).then(async (response) => {
            if (response.status != 200) return false;
            const data = await response.json()
            window.sessionStorage.setItem('jwt', data.jwt)
            return true;
        }).catch((error) => {
            console.log(error)
            return false;
        })
    },
    
    //DESLOGA O USUÁRIO
    logout: async () => {
        window.sessionStorage.removeItem('jwt')
    }
}

export const useUserService = () => UserServices