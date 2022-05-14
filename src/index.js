
export default function App({data}) {
    const groceryList = data.groceryList
    return(
        <div>
            <Head>
                <title>Learn Next.js</title>
            </Head>

            <main>
                <p>{groceryList[0].title}</p>
            </main>

        </div>
    )
}



export function getStaticProps() {
    return {
        props: {
            data: {
                groceryList: [{title: "GroceryList"}],
            },
        }
    }
}