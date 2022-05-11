import {useMemo, useState} from "react";
import CommitDescription from "./CommitDescription";

export default function Commit({data}) {
    const [showDescription, setShowDescription] = useState(false);
    const [title, description] = useMemo(() => {
        const {message} = data.commit;
        const [title, ...description] = message.split('\n');

        return [title, description];
    }, [data]);

    return (
        <li className="shadow p-4 rounded-sm border border-gray-100 relative focus:outline-none focus:ring focus:ring-blue-200" tabIndex="0">
        <span className="focus:ring focus:ring-blue-400">{title}</span>

            {description.length ?
                <>
                    <span
                        className="absolute inline-block cursor-pointer p-2 right-0 top-0 mr-2 mt-2 select-none font-bold text-blue-400"
                        onClick={() => setShowDescription(!showDescription)}>X</span>

                    <div
                        className={[!showDescription ? 'hidden' : '', 'shadow-md shadow-inner', 'p-3', 'mt-5'].join(' ')}>
                        <CommitDescription descriptions={description}/>
                    </div>
                </>
                :
                null
            }
        </li>
    )
}