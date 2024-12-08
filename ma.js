const loading = document.querySelector('#loading');

window.addEventListener('load', () => {
  loading.classList.add('loaded');
});

const items = document.querySelector('.midashi');

const keyframes={
    opacity:[0,1]
};

const options={
    duration:1000,
    fill:'forwards',
};

items.animate(keyframes,options);


const showLogo =(entries)=>{
    console.log(entries[0].terget);
    /*const keyframes = {
        opacity:[0,1],
        translate:['200px 0',0],
    };
    entries[0].terget.animate(keyframes, 600);*/
};

const LogoObserver = new IntersectionObserver(showLogo);

LogoObserver.observe(document.querySelector('#taitol'));