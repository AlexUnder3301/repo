    if (window.innerWidth < 768) {
        const brandsRepair = new Swiper('.swiper',  {
            pagination: {
                 el: '.swiper-pagination',
                clickable: true,
            },
            slidesPerView: 'auto',
            })
        
        const devicesRepair = new Swiper('.swiper',  {
            pagination: {
                 el: '.swiper-pagination2',
                clickable: true,
            },
            slidesPerView: 'auto',
            })

        const prices  = new Swiper('.swiper',  {
            pagination: {
                 el: '.swiper-pagination2',
                clickable: true,
            },
            slidesPerView: 'auto',
            })
    }

// document.addEventListener('resize', () => {
//     if (window.innerWidth >= 768) {
//         brandsRepair.destroy(true, true)
//     }
//     else {
//         const brandsRepair = new Swiper('.swiper',  {
//             pagination: {
//                 el: '.swiper-pagination',
//                 clickable: true,
//             },
//             slidesPerView: 'auto',
//             })
//     }
// })