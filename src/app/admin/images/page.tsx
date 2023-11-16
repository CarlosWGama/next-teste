"use client";
import { useEffect, useState } from "react";
import { useContextLayout } from "../../../contexts/layout"
import { ImageType } from "../../../models/image";
import Script from "next/script";
import { useImagesServices } from "../../../services/images";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Dashboard(props:any)  {

    const { setChamada } = useContextLayout();
    const router = useRouter();
    const [ images, setImages ] = useState<ImageType[]>([])
    const [ imageRemove, setImageRemove ] = useState<ImageType|null>(null)
    const [ message, setMessage ] = useState<null|string>(null);
    const [ isLoading, setLoading ] = useState(false) 
    const imageServices = useImagesServices();

    // =============================================================
    const getImages = async () => {
        setLoading(true);
        try {
            const images = await imageServices.getAll();
            if (Array.isArray(images))  {
                console.log(images)
                setImages(images);
            } else {
                router.replace('/login')
            }
        } catch (error) {
            setImages([])
        }
        setLoading(false);
    }
    //Busca a URL de imagem
    const getImageURL = (image: ImageType) => {
        return `${process.env.API_URL}/uploads/${(image.rated ? 'rated' : 'not-rated')}/${image.file}`;
    }

    //Avalia imagem
    const handleRated = async (image: ImageType) => {
        setMessage(null)
        setLoading(true);

        await imageServices.rate(image)
        await getImages()
        setMessage('Imagem atualizada')
    }
    
    //Remove imagem
    const handleRemoveImage = async () => {
        setMessage(null)
        setLoading(true);

        if (imageRemove) {
            await imageServices.remove(imageRemove)
            await getImages()
            setMessage('Imagem removida com sucesso')
        }
    }

    useEffect(() => {
        setChamada("Lista de Imagens");
        getImages()
    }, [])
    // ==============================================================
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h5>Imagens disponíveis</h5>
                </div>


                {/* <form action="{{route('admin.usuarios.listar')}}">
                    <div className="form-busca">
                        <!-- BUSCAR -->
                        <div className="input-group">
                            <input type="text" name="buscar" value="{{$buscar}}" placeholder="Digite um valor para buscar" className="form-control">
                        </div>
                        <button type="submit" className="btn btn-primary btn-sm">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </form> */}

                <div className="card-block table-border-style">


                    { isLoading && <h1>Carregando, aguarde...</h1>}

                    { !isLoading && <div className="table-responsive">
                            {message && 
                                <div className="alert alert-success" role="alert" style={{marginInline:10}}>
                                    { message }
                                </div>
                            }
                            
                        <table className="table">
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td>Tipo</td>
                                    <td>Imagem</td>
                                    <td>Avaliado</td>
                                    <td>Opções</td>
                                </tr>
                            </thead>
                            <tbody>
                                {images.map((image) => (
                                    <tr key={image.id}>
                                        {/* ID */}
                                        <td><h6>{image.id}</h6></td>
                                        {/* TIPO */}
                                        <td><h6>{image.type}</h6></td>
                                        {/* IMABEM */}
                                        <td>
                                            <div className="table-data__info">
                                                <Image height={100} width={100} alt={"cancer-"+image.id} src={getImageURL(image)} />
                                                
                                            </div>
                                        </td>
                                        {/* AVALIADO  */}
                                        <td><h6>
                                            {image.rated && <p style={{color:'lightgreen'}}>Aprovado</p>}
                                            {!image.rated && <p style={{color:'tomato'}}>Pendente de avaliação</p>}</h6></td>

                                        {/* OPÇÕES  */}
                                        <td>
                                            <span title="Visualizar" className="btn btn-sm btn-info" onClick={() => window.open(getImageURL(image))}>
                                                Visualizar Imagem
                                            </span>
                                            
                                            <span title="Editar" className="btn btn-sm btn-success" onClick={() => handleRated(image)}>
                                                Aprovar
                                            </span>

                                            <span className="btn btn-sm btn-danger remover-modal" title="Excluir" data-toggle="modal" data-target="#smallmodal" onClick={() => setImageRemove(image)}>
                                                Excluir
                                            </span>
                                        </td>
                                    </tr>

                                ))}
                            </tbody>
                        </table>
                        
                
                    </div>}
                </div>
                
            </div>
    
            {/* <!-- modal small --> */}
            <div className="modal fade" id="smallmodal" role="dialog" aria-labelledby="smallmodalLabel" aria-hidden="true">
                <div className="modal-dialog modal-sm" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="smallmodalLabel">Remover Imagem de ID {imageRemove?.id}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>
                            Deseja Realmente excluir essa imagem? Essa ação não poderá ser desfeita. 
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary btn-deletar" data-dismiss="modal" onClick={() => handleRemoveImage()}>Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end modal small --> */}

           
        </div>
        
    )
}

