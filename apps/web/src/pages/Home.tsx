import { PageWrapper } from "../components/PageWrapper"
import { NavBar } from "@/components/NavBar"

export function Home () {
    return (<>
        <PageWrapper>
            <NavBar/>
            <div className="max-w-full flex flex-col">            
                <div className="max-w-[800] text-center my-10">
                    <h1 className="font-modak text-5xl text-sky-950 m-8">Coming Soon &lt;3</h1>
                    <p className="mx-8">Still crafting the scrapbooking experience...</p>
                    <div>
                        <p>Place example scrollable scrapbook here</p>
                    </div>
                </div>
            </div>

        </PageWrapper>
    </>)
}