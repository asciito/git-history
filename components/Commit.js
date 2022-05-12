import {useMemo, useState} from "react";
import {IoIosArrowDown} from 'react-icons/io';
import CommitDescription from "./CommitDescription";

export default function Commit({data}) {
    const [showDescription, setShowDescription] = useState(false);
    const [title, description] = useMemo(() => {
        const {message} = data.commit;
        const [title, ...description] = message.split('\n');

        return [title, !description[0] ? description.slice(1) : description];
    }, [data]);

    return (
        <li className="shadow p-4 rounded-sm border border-gray-100 relative focus:outline-none focus:ring focus:ring-blue-200"
            tabIndex="0">
            <span className="focus:ring focus:ring-blue-400">
                {title} {' '}
                <a
                    title="Go to the commit page"
                    className="text-[.8rem] text-gray-400 hover:text-blue-400 active:text-blue-500"
                    style={{letterSpacing: '1px'}}
                    target="_blank" href={data.html_url}>({data.sha.substring(0, 6)})</a>
            </span>

            {description.length ?
                <>
                    <span
                        className="absolute inline-block cursor-pointer right-0 top-0 pt-[3px] mr-4 mt-4 select-none text-xl font-bold text-blue-400"
                        onClick={() => setShowDescription(!showDescription)}>
                        <IoIosArrowDown className={'transition-all ' + (!showDescription ? '-rotate-90' : '')}/>
                    </span>

                    <div
                        className={[!showDescription ? 'hidden' : '', 'shadow-md shadow-inner p-3 mt-5 rounded-sm border border-gray-100'].join(' ')}>
                        <h3 className="text-lg font-medium mb-2">Description</h3>
                        <CommitDescription descriptions={description}/>
                    </div>
                </>
                :
                null
            }
        </li>
    )
}