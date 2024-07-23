const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menu-btn');
const closeSidebarBtn = document.getElementById('close-sidebar-btn');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const menuTabs = document.querySelectorAll('.tabs-container .tab');
// open
menuBtn.onclick=()=> openSidebar();

// close
closeSidebarBtn.onclick=()=> closeSidebar();
sidebarOverlay.onclick=()=>closeSidebar();


// close on tab click
menuTabs.forEach((tab)=>{
    tab.onclick =() => closeSidebar();
})
// function to open sidebar
const openSidebar =()=>{
sidebar.classList.add('active');
sidebarOverlay.classList.add('active');
}

// function to close sidebar
const closeSidebar =()=>{
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
}

// active tab
const sections = document.querySelectorAll('section');
menuTabs[0].classList.add('active');
window.onscroll = () => {
    sections.forEach((section)=>{
        let top = window.scrollY;
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        if(top >= offset && top < offset + height){
            menuTabs.forEach ((tab)=>{
                tab.classList.remove('active');
                document.querySelector('.tabs-container a[href *='+id+']').classList.add('active');
            })
        }
    })
}
// hero odometer
const odometers = document.querySelectorAll('.odometer')
setTimeout(function(){
    odometers.forEach((list)=>{
        let id = list.getAttribute('id');
        if (id === 'customers'){
            list.innerHTML = 5;
        }
        if (id === 'experiences'){
            list.innerHTML = 1;
        }
        if (id === 'projects-completed'){
            list.innerHTML = 8;
        }
    })
},3500)

// about video
const playButton = document.querySelector('.play');
const videoContainer = document.getElementById('video-container');
const closeButton= document.getElementById('close-btn');
const video = document.getElementById('video');

playButton.onclick =()=>openVideo();
closeButton.onclick =()=>closeVideo(); 
// function to open Video
const openVideo = ()=>{
    videoContainer.classList.add('active');
    video.play();
    video.currentTime = 0;
}
// close video
const closeVideo = ()=>{
    videoContainer.classList.remove('active');
    video.pause();

}

// feedbacks start
$('.feedbacks-container').slick({
    infinite:true,
    slidesToShow:3,
    slidesToScroll:3,
    autoplay: true,
    pauseOnHover:true,
    responsive:[
        {
            breakpoint:900,
            settings:{
                slidesToShow:2,
            }
        },
        {
            breakpoint:600,
            settings:{
                slidesToShow:1,
            }
        }
    ]
});
// feedbacks start

// animations start
// gsap nav start
gsap.timeline({delay:0.5})
.fromTo([
    'nav .logo .name','nav .logo .logo-icon'
],
{
    opacity:0,
    x:-100
},
{
    opacity:1,
    x:0,
    stagger:0.5,
}
)
.fromTo(
    'nav .tabs-container .tab',
    {
        opacity:0,
        x:-100
    },
    {
        opacity:1,
        x:0,
        stagger:0.5,
    }
)
.fromTo(
    'nav .handles-container .icon-wrapper',
    {
        opacity:0,
        y:-50
    },
    {
        opacity:1,
        y:0,
        stagger:0.5,
    }
)
.fromTo(
    'nav .contact-btn',
    {
        opacity:0,
        x:100
    },
    {
        opacity:1,
        x:0,
    }
)
// gsap nav stop

// gsap hero start
gsap.timeline({delay:0.5})
.fromTo(
    '#hero .hero-image',
    {
        scale:0
    },
    {
        scale:1,
        delay:0.5,
    }
)
.fromTo(
    ['#hero .heading-1', '#hero .description'],
    {
        x:-20,
        opacity:0
    },
    {
        x:0,
        opacity:1,
    }
)
.fromTo(
    '#hero .facts-container .fact',
    {
        x:50,
        opacity:0
    },
    {
        x:0,
        opacity:1,
        stagger:0.5,
    }
)
.fromTo(
    '#hero .buttons-wrapper .btn',
    {
        x:50,
        opacity:0
    },
    {
        x:0,
        opacity:1,
        stagger:0.5,
    }
)
//gsap hero end 

//gsap about start
gsap.registerPlugin(ScrollTrigger);
gsap.timeline({
    delay: 0.5,
    scrollTrigger:{
        trigger:"#about",
        start: '20% bottom',
        end: 'bottom top'
    }
})
.fromTo(
    ['#about .section-header .sub-title','#about .section-header .heading-1', '#about .section-header .muted'],
    {
        y:60,
        opacity:0
    },
    {
        y:0,
        opacity:1,
        stagger:0.5,
    }
)
.fromTo(
    ['#about .section-header .readmore-btn','#about .section-header .play-btn'],
    {
        x:-100,
        opacity:0
    },
    {
        x:0,
        opacity:1,
        stagger:0.5,
    }
)
.fromTo(
    '#about .brands-container',
    {
        x:100,
        opacity:0
    },
    {
        x:0,
        opacity:1,
    }
)
.fromTo(
    '#about .education-experience-container .heading-1',
    {
        x:-50,
        opacity:0
    },
    {
        x:0,
        opacity:1,
        stagger:0.5
    }
)
.fromTo(
    '#about .education-experience-container .contents',
    {
        x:100,
        opacity:0
    },
    {
        x:0,
        opacity:1,
        stagger:0.5
    }
)
//gsap about end
//gsap skills start
gsap.timeline({
    delay: 0.5,
    scrollTrigger:{
        trigger:"#skills",
        start: '20% bottom',
        end: 'bottom top'
    }
})
.fromTo(
    ['#skills .section-header .heading-1','#skills .section-header .muted'],
    {
        y:60,
        opacity:0
    },
    {
        y:0,
        opacity:1,
        stagger:0.5
    }
)
.fromTo(
    ['#skills .skills-container .skill'],
    {
        y:60,
        opacity:0
    },
    {
        y:0,
        opacity:1,
        stagger:0.5
    }
)

//gsap skills end
// gsap services start
gsap.registerPlugin(ScrollTrigger);
gsap.timeline({
    delay: 0.5,
    scrollTrigger:{
        trigger:"#services",
        start: '20% bottom',
        end: 'bottom top'
    }
})
.fromTo(
    ['#services .section-header .heading-1','#services .section-header .muted'],
    {
        y:60,
        opacity:0
    },
    {
        y:0,
        opacity:1,
        stagger:0.5
    }
)
.fromTo(
    ['#services .services-container .service'],
    {
        y:60,
        opacity:0
    },
    {
        y:0,
        opacity:1,
        stagger:0.5
    }
)
// gsap services end
// gsap projects start
gsap.registerPlugin(ScrollTrigger);
gsap.timeline({
    delay: 0.5,
    scrollTrigger:{
        trigger:"#projects",
        start: '20% bottom',
        end: 'bottom top'
    }
})
.fromTo(
    ['#projects .section-header .heading-1','#projects .section-header .muted'],
    {
        y:60,
        opacity:0
    },
    {
        y:0,
        opacity:1,
        stagger:0.5
    }
)
.fromTo(
    ['#projects .projects-container .project'],
    {
        y:60,
        opacity:0
    },
    {
        y:0,
        opacity:1,
        stagger:0.5
    }
)
// gsap projects end
// gsap feedback start
gsap.registerPlugin(ScrollTrigger);
gsap.timeline({
    delay: 0.5,
    scrollTrigger:{
        trigger:"#feedbacks",
        start: '20% bottom',
        end: 'bottom top'
    }
})
.fromTo(
    ['#feedbacks .section-header .heading-1','#feedbacks .section-header .muted'],
    {
        y:60,
        opacity:0
    },
    {
        y:0,
        opacity:1,
        stagger:0.5
    }
)
.fromTo(
    ['#feedbacks .feedbacks-container .feedblock'],
    {
        y:60,
        opacity:0
    },
    {
        y:0,
        opacity:1,
        stagger:0.5
    },
    '-=2.5'
)
// gsap feedback end
// gsap blog start
gsap.registerPlugin(ScrollTrigger);
gsap.timeline({
    delay: 0.5,
    scrollTrigger:{
        trigger:"#blog",
        start: '20% bottom',
        end: 'bottom top'
    }
})
.fromTo(
    ['#blog .section-header .heading-1','#blog .section-header .muted'],
    {
        y:60,
        opacity:0
    },
    {
        y:0,
        opacity:1,
        stagger:0.5
    }
)
.fromTo(
    '#blog .blogs-container .blog',
    {
        y:60,
        opacity:0,
    },
    {
        y:0,
        opacity:1,
        stagger:0.5,
    },

)
// gsap blog end
// gsap contact start
gsap.registerPlugin(ScrollTrigger);
gsap.timeline({
    delay: 0.5,
    scrollTrigger:{
        trigger:"#contact",
        start: '20% bottom',
        end: 'bottom top'
    }
})
.fromTo(
    ['#contact .contact-options .heading-1','#contact .contact-options .muted'],
    {
        y:60,
        opacity:0
    },
    {
        y:0,
        opacity:1,
        stagger:0.5
    }
)
.fromTo(
    '#contact .contact-options .option','#contact .contact-options',
    {
        y:60,
        opacity:0,
    },
    {
        y:0,
        opacity:1,
        stagger:0.5,
    },
)
.fromTo(
   [ '#contact .contact-form .muted','#contact .contact-form .row', '#contact .contact-form textarea',]
,    {
        y:60,
        opacity:0,
    },
    {
        y:0,
        opacity:1,
        stagger:0.5,
    },
)
// gsap contact end
// animations stop
