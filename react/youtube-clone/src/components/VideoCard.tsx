export function VideoCard(props:any)
{
    return <div className="p-2 cursor-pointer">
        <img className="rounded-lg" src={props.image}/>
        <div className="grid grid-cols-12 pt-2 pl-2">
            <div className="grid-span-1 ">
            <img className="rounded-full w-12 h-12" src={props.thumbimage} />
            </div>
            <div className="col-span-11 pl-5 ">
                <div>{props.title}</div>
                <div className="col-span-11 text-gray-500 text-base ">
                <div>{props.author}</div>
            </div>
            <div className="col-span-11 text-gray-500 text-base ">
                <div>{props.views} . {props.timestamp}</div>
            </div>
            </div>
        </div>
    </div>
}