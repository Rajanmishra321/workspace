import { VideoCard } from "./VideoCard"

const Videos = [{

    image: 'photo.jpg',
    title: "correction coefficient | correction coefficient example",
    thumbimage: 'https://yt3.ggpht.com/oqKgt0_HZRFwTJixXXLy_4oJ_W5-Fh6ZWCOFjUezrnBLvGqqxSUC4O4Ryk0M7r1u91zx2gdIpw=s68-c-k-c0x00ffffff-no-rj',
    author: 'Rajan Mishra',
    views: '30M views',
    timestamp: '20 days ago'
}, {
    image: 'photo.jpg',
    title: "learn maths in 30 min",
    thumbimage: 'https://yt3.ggpht.com/oqKgt0_HZRFwTJixXXLy_4oJ_W5-Fh6ZWCOFjUezrnBLvGqqxSUC4O4Ryk0M7r1u91zx2gdIpw=s68-c-k-c0x00ffffff-no-rj',
    author: 'Rajan Mishra',
    views: '30M views',
    timestamp: '20 days ago'
}, {
    image: 'photo.jpg',
    title: "how to study maths",
    thumbimage: 'https://yt3.ggpht.com/oqKgt0_HZRFwTJixXXLy_4oJ_W5-Fh6ZWCOFjUezrnBLvGqqxSUC4O4Ryk0M7r1u91zx2gdIpw=s68-c-k-c0x00ffffff-no-rj',
    author: 'Rajan Mishra',
    views: '30M views',
    timestamp: '20 days ago'
},{
    image: 'photo.jpg',
    title: "study maths",
    thumbimage: 'https://yt3.ggpht.com/oqKgt0_HZRFwTJixXXLy_4oJ_W5-Fh6ZWCOFjUezrnBLvGqqxSUC4O4Ryk0M7r1u91zx2gdIpw=s68-c-k-c0x00ffffff-no-rj',
    author: 'Rajan Mishra',
    views: '30M views',
    timestamp: '20 days ago'
},{
    image: 'photo.jpg',
    title: "study maths",
    thumbimage: 'https://yt3.ggpht.com/oqKgt0_HZRFwTJixXXLy_4oJ_W5-Fh6ZWCOFjUezrnBLvGqqxSUC4O4Ryk0M7r1u91zx2gdIpw=s68-c-k-c0x00ffffff-no-rj',
    author: 'Rajan Mishra',
    views: '30M views',
    timestamp: '20 days ago'
},{
    image: 'photo.jpg',
    title: "study maths",
    thumbimage: 'https://yt3.ggpht.com/oqKgt0_HZRFwTJixXXLy_4oJ_W5-Fh6ZWCOFjUezrnBLvGqqxSUC4O4Ryk0M7r1u91zx2gdIpw=s68-c-k-c0x00ffffff-no-rj',
    author: 'Rajan Mishra',
    views: '30M views',
    timestamp: '20 days ago'
},{
    image: 'photo.jpg',
    title: "study maths",
    thumbimage: 'https://yt3.ggpht.com/oqKgt0_HZRFwTJixXXLy_4oJ_W5-Fh6ZWCOFjUezrnBLvGqqxSUC4O4Ryk0M7r1u91zx2gdIpw=s68-c-k-c0x00ffffff-no-rj',
    author: 'Rajan Mishra',
    views: '30M views',
    timestamp: '20 days ago'
},{
    image: 'photo.jpg',
    title: "study maths",
    thumbimage: 'https://yt3.ggpht.com/oqKgt0_HZRFwTJixXXLy_4oJ_W5-Fh6ZWCOFjUezrnBLvGqqxSUC4O4Ryk0M7r1u91zx2gdIpw=s68-c-k-c0x00ffffff-no-rj',
    author: 'Rajan Mishra',
    views: '30M views',
    timestamp: '20 days ago'
},{
    image: 'photo.jpg',
    title: "study maths",
    thumbimage: 'https://yt3.ggpht.com/oqKgt0_HZRFwTJixXXLy_4oJ_W5-Fh6ZWCOFjUezrnBLvGqqxSUC4O4Ryk0M7r1u91zx2gdIpw=s68-c-k-c0x00ffffff-no-rj',
    author: 'Rajan Mishra',
    views: '30M views',
    timestamp: '20 days ago'
}]
export function VideoGrid() {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {Videos.map(video => <div>
            <VideoCard image={video.image}
                title={video.title}
                thumbimage={video.thumbimage}
                author={video.author}
                views={video.views}
                timestamp={video.timestamp}>
            </VideoCard>
        </div>)}

    </div>
}