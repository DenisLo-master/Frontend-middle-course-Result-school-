import React from 'react'

function EpisodeUI({ itemInfo = null }) {
    return (
        <div className='flex grow h-screen w-full  justify-center items-center'>
            {itemInfo ?
                <div className='flex border-4 border-sky-500 mr-5'>
                    <div className='flex flex-col text-2xl mr-10 p-4'>
                        <span>name: {itemInfo.name}</span>
                        <span>air_date: {itemInfo.air_date}</span>
                        <span>episode: {itemInfo.episode}</span>
                        <span>created: {itemInfo.created}</span>
                    </div>
                </div> :
                <span className='p-20 text-2xl '>
                    Эпизоды из популярной вселенной Рика и Морти представляют собой серии анимационного сериала, описывающие приключения Рика Санчеза, гениального и эксцентричного научного гения, и его внука Морти Смита. В сериале сочетаются элементы научной фантастики, черного юмора и сатиры на поп-культуру. Каждый эпизод представляет собой самодостаточную историю, но все они связаны общим сюжетом и развитием отношений между Риком и Морти. В сериале изображаются различные миры и вселенные, что дает возможность создателям свободно играть с идеями и экспериментировать с сюжетами. Эпизоды Рика и Морти являются одними из самых популярных и культовых среди молодежи и любителей научной фантастики.
                </span>
            }
        </div>)
}

export default EpisodeUI