import Image from "next/image"

export default function Quiz(){
    
    return (
        <>
            <div className="justify-center bg-color-blue">
                <div className="text-center">問題文がうんたらかんたら</div>
                <div className="flex place-items-center content-center place-content-center">
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
        </>
    )
}