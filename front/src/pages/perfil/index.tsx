import "./perfil.css"
import { UserImg } from "../../components/UserImg"
import { BarraPerfil } from "../../components/BarraPerfil"
import { FormPerfil } from "../../components/FormPerfil"
import { FooterForm } from "../../components/FooterForm"

export function Perfil(){
    return(
        <main className="shape">
            <div className="left">
            <UserImg/>
            </div>
            <div className="squer">
                <BarraPerfil/>
                <FormPerfil/>
                <FooterForm/>
                
            </div>
            

        </main>
    )
}