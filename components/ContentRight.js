export default function ContentRight({title,content,button,image}){
const setImage = image ? image : '/circle.png'; 

    return(
        <>
            <div class="container mx-auto pb-40">
                <div class="flex flex-wrap pt-40">
                    <div class="w-10/12 md:w-6/12 lg:w-6/12 text-justify break-all">
                        <div class="text-5xl m-5 font-semibold">
                            {title}
                        </div>
                        <div class="m-5">
                            {content}          
                        </div>                
                    </div>
                    <img src={`${setImage}`} class="w-2/12 my-10 mx-10"/>
                </div>     
                <div class="m-5 cursor-pointer py-5 w-40 bg-coco-normal text-center text-white rounded-xl hover:bg-black ">{button}</div>    

            </div>
        </>
    )
}