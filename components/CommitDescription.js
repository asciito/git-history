export default function CommitDescription({descriptions}) {

    const addTabs = (text) => {
        const spaces = [...text.matchAll(/^[ ]/g)].length;

        return (!spaces ? text : <>
                {Array(spaces).fill(0).map((_, i) => <span key={i} className="p-[.4rem]"></span>)}
                {text}
            </>)
    }

    return (<>
            {descriptions.length ? descriptions.map((d, i) => (d ? <p key={i}>{addTabs(d)}</p> :
                    <p key={i} className="h-5"></p>)) : null}
        </>)
}
