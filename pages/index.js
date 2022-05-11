import Commit from "../components/Commit";

export default function Index({data}) {
    return (
        <div>
            <ul>
                {data.map(entry => (
                    <Commit key={entry.sha} data={entry}/>
                ))}
            </ul>
        </div>
    )
}

export async function getServerSideProps() {
    // Get the commits history
    const res = await fetch(`${process.env.GITHUB_API}/repos/${process.env.GITHUB_USER}/${process.env.GITHUB_REPO}/commits`);
    const data = await res.json();

    return {props: {data}};
}