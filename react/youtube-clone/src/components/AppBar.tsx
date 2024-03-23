import { SearchBar } from "./SearchBar";

export function AppBar()
{
    return <div className="flex justify-between p-3">
        <div className="text-md inline-flex items-center">
            youtube
        </div>
        <div className="">
            <SearchBar></SearchBar>
        </div>
        <div className="text-md inline-flex items-center">
            sign in
        </div>

    </div>
}