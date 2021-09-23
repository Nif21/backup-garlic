    export default function ContentRight({ title, content, button, image ,background}) {
    const setImage = image ? image : "/circle.png";
    const setBackground = background ? background : "bg-white";

    return (
        <>
        <div class={`${setBackground}`}>
            <div class="container mx-auto pb-40">
            <div class="flex flex-wrap pt-40">
                <div class="w-10/12 md:w-8/12 lg:w-8/12 text-justify break-all">
                <div class="text-5xl m-5 font-semibold text-white">{title}</div>
                <div class="m-5 text-white">{content}</div>
                </div>
                <img src={`${setImage}`} class="my-10 mx-10" />
            </div>
            <div class="m-5 cursor-pointer py-5 w-40 bg-coco-normal text-center text-white rounded-xl hover:bg-white hover:text-black">
                {button}
            </div>
            </div>
        </div>
        </>
    );
    }
