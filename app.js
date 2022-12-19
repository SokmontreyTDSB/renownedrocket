const card = [
    {
        name: "Saturn V",
        des: "Saturn V is a retired American super heavy-lift launch vehicle developed by NASA under the Apollo program for human exploration of the Moon. The rocket was human-rated, with three stages, and powered with liquid fuel. It was flown from 1967 to 1973.",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Apollo_11_Launch_-_GPN-2000-000630.jpg/1200px-Apollo_11_Launch_-_GPN-2000-000630.jpg",
        link:"https://en.wikipedia.org/wiki/Saturn_V",
        source: "Wikipedia",
        otherImgUrl:"https://cdn.firespring.com/images/bb4ce6c2-1e54-4e39-bcfd-6208b84b3737.jpg",
    },
    {
        name: "Ariane 5",
        des: "Ariane 5 is a European heavy-lift space launch vehicle developed and operated by Arianespace for the European Space Agency (ESA). It is launched from the Centre Spatial Guyanais (CSG) in French Guiana. It has been used to deliver payloads into geostationary transfer orbit (GTO) or low Earth orbit (LEO). The launch vehicle had a streak of 82 consecutive successful launches between 9 April 2003 and 12 December 2017. Since 2014,[4] Ariane 6, a direct successor system, is in development.",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Ariane_5_with_James_Webb_Space_Telescope_Prelaunch_%2851773093465%29.jpg",
        link:"https://en.wikipedia.org/wiki/Ariane_5",
        source: "Wikipedia",
        otherImgUrl:"https://spacenews.com/wp-content/uploads/2021/07/ariane5-july2021-879x485.jpg",
    },
    {
        name: "Space Launch System",
        des: "The Space Launch System is an American super heavy-lift expendable launch vehicle developed by NASA. As of 2022, SLS has the highest payload capacity of any rocket in operational service, as well as the greatest liftoff thrust of any rocket in operation.",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/6/65/SLS_on_39B_ahead_of_launch_%28cropped%29.jpg",
        link:"https://en.wikipedia.org/wiki/Space_Launch_System",
        source: "Wikipedia",
        otherImgUrl:"https://s.yimg.com/uu/api/res/1.2/j.WIYIXLdq5dHEUeOVfAUQ--~B/Zmk9ZmlsbDtoPTU4Mzt3PTg3NTthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-11/31dff1e0-6581-11ed-bfdc-c9aa52673263.cf.jpg",
    },
    {
        name: "Falcon 9",
        des: "Falcon 9 is a partially reusable medium lift launch vehicle that can carry cargo and crew into Earth orbit, produced by American aerospace company SpaceX. The rocket has two stages.",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Falcon_9_Demo-2_Launching_6_%283%29.jpg",
        link:"https://en.wikipedia.org/wiki/Falcon_9",
        source: "Wikipedia",
        otherImgUrl:"https://cdn.mos.cms.futurecdn.net/P6Qy9QgewcweJpsXjG2tzL.jpg",
    },
    {
        name: "Falcon heavy",
        des: "Falcon Heavy is a partially reusable heavy-lift launch vehicle that is produced by SpaceX, an American aerospace manufacturer. The rocket consists of two strap-on boosters made from Falcon 9 first stages, a center core also made from a Falcon 9 first stage, and a second stage on top.",
        imgUrl: "https://www.cnet.com/a/img/resize/53961e920da5ea059d1a654e2b0b54172645b26b/hub/2019/04/16/452a39ab-e6d4-4919-9d8d-447c9a3ee32f/arabsat-launch.jpg?auto=webp&fit=crop&height=675&width=1200",
        link:"https://en.wikipedia.org/wiki/Falcon_Heavy",
        source: "Wikipedia",
        otherImgUrl:"https://imageio.forbes.com/specials-images/imageserve/635b92f3bf9ad7cf81876e05/Two-boosters-land-in-tandem-during-the-SpaceX-Falcon-Heavy-Demo-Mission-in-2018-/960x0.jpg?format=jpg&width=960",
    },
    {
        name: "Starship",
        des: "Starship is a fully-reusable, super-heavy-lift launch vehicle being developed by American aerospace company SpaceX. If successful, Starship will be the most powerful launch vehicle ever built and is expected to be the first to demonstrate total reusability.",
        imgUrl: "https://www.freethink.com/wp-content/uploads/2022/09/Starship-rocket_Web.jpg?resize=1200,630",
        link:"https://en.wikipedia.org/wiki/SpaceX_Starship",
        source: "Wikipedia",
        otherImgUrl:"https://ichef.bbci.co.uk/news/976/cpsprodpb/B4E4/production/_117380364_50906611037_ace80bbe62_k-1.jpg",
    },
];

function createCard(each, index){
    return `<div align='center' class='w-[50%] m-auto'>
        <div class='w-[((w-${index}))%] h-[50vh] overflow-hidden
        flex justify-end rounded-3xl m-5
        hover:shadow-2xl
        hover:bg-transparent
        transition delay-100 ease-in-out'
        style="background-image: url('${each.imgUrl}');
        background-position: center; background-size: cover;" >

            <div class='text-container w-full p-5 bg-white/50 
            rounded-4xl
            opacity-0 hover:opacity-100 transition ease-in-out backdrop-blur-lg z-10'>
                <h1 class='font-medium text-white text-xl pb-3'>${each.name}</h1>
                <p class='font-light'>${each.des}</p>
                <a href='${each.link}' target='_blank' class='text-blue-800 hover:text-white'>${each.source}</a>
            </div>

            <div class='background-image-container fixed top-0 left-0 w-screen h-screen z-0'
            style="background-image: url('${each.otherImgUrl}'); background-position: center; background-size: cover; background-repeat: no-repeat;"></div>
        </div>
    </div>`;
}

const width_list = [];
for(let i=0; i<card.length; i++){
    width_list.push(new Reactive(`w-${i}`, 10));
}
const loop = new Loop('cards', card, (each,index)=>{
    return createCard(each, index);
});

function updateCard(top){
    const c = 350;
    const img_h = 400;
    const move = -300;
    const margin = -10;
    for(let i=0; i<width_list.length; i++){
        const offset = (-(top-c) - i * (img_h)) + move - margin * i;
        const cal = (20 - Math.pow(Math.abs(offset) * 0.008, 1)) * 2.5;
        width_list[i].update(cal);
    }
}

window.addEventListener('scroll', (event)=>{
    const rect = document.getElementById('container').getBoundingClientRect();
    const top = rect.top;

    updateCard(top);
});