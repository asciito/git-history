import {useMemo} from "react";
import CommitDescription from "./CommitDescription";

export default function Commit({data}) {
    const [title, description] = useMemo(() => {
        const {message} = data.commit;
        const [title, ...description] = message.split('\n');

        return [title, description];
    }, [data]);

    return (
        <li>
            <span>{title}</span>

            <div>
                {description.length ?
                    <CommitDescription descriptions={description}/> :
                    null
                }
            </div>
        </li>
    )
}