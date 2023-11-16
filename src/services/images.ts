import { ImageType } from "../models/image";


const ImagesService = {

    //BUSCA TODAS IMAGENS
    getAll: async () => {
        return fetch(`${process.env.API_URL}/images`, {
            headers: {
                'Authorization': `Bearer ${window.sessionStorage.getItem('jwt')}`
            }
        }).then(response => response.json())
        .catch(erro => [])
    },

    //LIBERA A FOTO
    rate: async(image: ImageType) => {
        return fetch(`${process.env.API_URL}/images/${image.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${window.sessionStorage.getItem('jwt')}`
            },
            body: JSON.stringify({rated: !image.rated})
        })
    },

    //REMOVE UMA IMAGEM
    remove: async(image: ImageType) => {
        return fetch(`${process.env.API_URL}/images/${image.id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${window.sessionStorage.getItem('jwt')}`
            }
        })
    }

}


export const useImagesServices = () => ImagesService;