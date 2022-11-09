import React from 'react'
import ForumIndexCard from '../../components/ForumIndexCard';

const index = () => {
    return (
        <div>
            <article className='mt-8 w-11/12 mx-auto'>
                <h2 className='text-xl text-center'>Temas De Discusión</h2>
                <div className='flex flex-col space-y-4'>
                    <div>
                        <h3 className='text-lg font-bold'>politica</h3>
                        <p>discusiones sobre politica en general, corrupcion, desempeno, proyectos etc...</p>
                    </div>
                    <div>
                        <h3 className='text-lg font-bold'>armas</h3>
                        <p>decomiso de armas, preguntas sobre armas, noticias sobre armas, informacion acerca de armas</p>
                    </div>

                    <div>
                    <h3 className='text-lg'>drogas</h3>
                    <p>experiencias con drogas, trafico de drogas, prevencion del uso de drogas, informacion acerca de las drogas</p>
                    </div>
                    <div>
                    <h3 className='text-lg'>organizaciones criminales</h3>
                    <p>noticias sobre las organizaciones criminales y discusiones entorno a ellas  </p>     
                    </div>    

                   <div>
                   <h3 className='text-lg'>general</h3>
                   <p>consejos de seguridad personal, secuestros, rutas peligrosas etc...</p>
                   </div>
            
                </div>
            </article>
            <ForumIndexCard />
        </div>
    )
}

export default index;