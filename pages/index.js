export default function Index({data}) {
    return (
        <h1>Hello, world</h1>
    )
}

export async function getServerSideProps() {
    // Get the commits history
    const res = await fetch(`${process.env.GITHUB_API}/repos/${process.env.GITHUB_USER}/${process.env.GITHUB_REPO}/commits`);
    const data = await res.json();

    return {props: {data}};
}