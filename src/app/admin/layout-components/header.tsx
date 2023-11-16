"use client";

import { useContextLayout } from "../../../contexts/layout";


export default function HeaderLayout() {

    

    const { titulo, subtitulo } = useContextLayout();
    // =====================================================
    return (
        <div className="page-header">
        <div className="page-block">
            <div className="row align-items-center">
                <div className="col-md-8">
                    <div className="page-header-title">
                        <h5 className="m-b-10">{titulo}</h5>
                        <p className="m-b-0">{subtitulo}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}