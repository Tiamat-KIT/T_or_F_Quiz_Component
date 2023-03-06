import Image from "next/image"

export default function Quiz(){
    
    return (
        <>
            <div className="container mx-auto p-5">
            <div className="card">
                <div className="card-body card-bordered">
                <div className="text-center card-title">問題</div>
                <figure>
                <Image src="/testImage.jpg" width={500} height={250} alt="image" />
                </figure>
                <p>問題文が云々</p>
                <div className="flex">
                    <div className="flex-1 place-self-center">
                        <h2>正しい</h2>
                        <button className="btn btn-square btn-ghost">
                            <div>
                                <Image src="/technology_blue_circle.png" width={75} height={75} alt="true" />
                            </div>
                        </button>
                    </div>
                    <div className="flex-1 place-self-center">
                        <h2>正しくない</h2>
                        <button className="btn btn-square btn-ghost">
                            <div>
                                <Image src="/Batsu.png" width={75} height={75} alt="true" />
                            </div>
                        </button>
                    </div>
                </div>
                </div>
            </div>  
            </div>          
        </>
    )
}