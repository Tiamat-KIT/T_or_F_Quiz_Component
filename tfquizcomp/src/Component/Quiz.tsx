import Image from "next/image"

export default function Quiz(){
    
    return (
        <>
            <div className="justify-center bg-color-blue">
                <div className="text-center">問題文がうんたらかんたら</div>
                <div className="flex place-items-center content-center place-content-center">
                    <div className="flex-1 place-self-center">
                        <h2>正しい</h2>
                        <div>
                            ここに○を置く
                            <Image src="/technology_blue_circle.png" width={75} height={75} alt="true"/>
                        </div>
                    </div>
                    <div className="flex-1 place-self-center">
                        <h2>正しくない</h2>
                        <div>ここに×を置く</div>
                    </div>
                </div>
            </div>            
        </>
    )
}