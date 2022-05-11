import Commit from "../components/Commit";

export default function Index({data}) {
    return (
        <div className="w-full max-w-4xl mx-auto space-y-10">
            <h1 className="text-center text-6xl">Git <span className="font-bold text-blue-400">History</span></h1>

            <ul className="space-y-5">
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