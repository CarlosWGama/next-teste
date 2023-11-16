import { createContext, useContext, useState } from 'react';

export type ContextLayoutType = {
    titulo: string,
    setTitulo?:any
    subtitulo?: any,
    setSubtitulo?:any,
    setChamada?: any
}

const ContextLayout = createContext<ContextLayoutType>({titulo: "Hello World"})

export function ContextLayoutProvider({children}:any) {

    const [ titulo, setTitulo ] = useState<string>('')
    const [ subtitulo, setSubtitulo ] = useState<string|undefined>('')

    const setChamada = (titulo:string, subtitulo?:string) => {
        setTitulo(titulo)
        setSubtitulo(subtitulo)
    }
    
    return (
        <ContextLayout.Provider value={{titulo, subtitulo, setTitulo, setSubtitulo, setChamada}}>
            {children}
        </ContextLayout.Provider>
    )
}

export const useContextLayout = () => useContext(ContextLayout)