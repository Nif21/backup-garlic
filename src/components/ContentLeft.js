export default function ContentLeft({title,content,button}){
    return(
        <>
            <div class="container mx-auto pb-40">
                <div class="flex flex-wrap pt-40">
                    <img src="/circle.png" class="my-10 mx-10"/>
                    <div class="w-10/12 md:w-6/12 lg:w-6/12 text-justify break-all">
                        <div class="text-5xl m-5 font-semibold">
                            {title}
                        </div>
                        <div class="m-5">
                            {content}          
                        </div>                
                    </div>                   
                </div>  
                <div class="flex">
                    <div class="w-3/12"></div>
                    <div class="m-5 cursor-pointer py-5 w-40 bg-coco-normal text-center text-black rounded-xl hover:bg-black hover:text-white">{button}</div>    
                </div>   
            </div>
        </>
    )
}