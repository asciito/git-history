import {useMemo} from "react";

export default function Commit({data}) {
    const [title, description] = useMemo(() => {
        const {message} = data.commit;
        const [title, ...description] = message.split('\n');

        return [title, description];
    }, [data]);

    return (
        <li>
            <span>{title}</span>
        </li>
    )
}