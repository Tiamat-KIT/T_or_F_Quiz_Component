import Image from "next/image"
import React from "react"

export default function Quiz(){
    function IconButton({ImageLink,alt_str}:{ImageLink:string,alt_str:string}){
        return (
            <button className="btn btn-square btn-ghost" type="submit">
                <div>
                    <Image src={ImageLink} width={100} height={100} alt={alt_str} />
                </div>
            </button>
        )
    }

    function FlexItem({children}: {children:React.ReactNode}){
        return(
            <div className="flex-1">
                {children}
            </div>
        )
    }

    function Container({children}: {children: React.ReactNode}){
        return(
            <div className="container mx-auto p-5">
                {children}
            </div>
        )
    }
    
    function Card({children}: {children: React.ReactNode}){
        return(
            <div className="card">
                <div className="card-body card-bordered">
                    {children}
                </div>
            </div>
        )
    }


    return (
        <>
            <Container>
                <Card>
                    <div className="text-center card-title">問題</div>
                        <figure>
                            <Image src="/testImage.jpg" width={500} height={250} alt="image" />
                        </figure>
                        <p>問題文が云々</p>
                        <div className="flex">
                            <FlexItem>
                                <div className="flex">
                                    <h2>正しい</h2>
                                    <IconButton ImageLink="/technology_blue_circle.png" alt_str="true" />
                                </div>
                            </FlexItem>
                            <FlexItem>
                                <div className="flex">
                                    <h2>正しくない</h2>
                                    <IconButton ImageLink="/Batsu.png" alt_str="false" />
                                </div>
                            </FlexItem>
                    </div>
                </Card>
            </Container>          
        </>
    )
}