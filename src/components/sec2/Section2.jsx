import Container from "../HEADING/Container"
import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"
import img4 from "../../assets/img4.png"

const Section2 = () => {
    return (
        <div className="pb-[100px]">
            <Container>
                <div className="">
                    <div class="gap-3 flex">
                        <div class="">
                            <img src={img1} />
                        </div>
                        <div class="">
                            <img src={img2} />
                        </div>
                        <div class="">
                            <img src={img3} />
                        </div>
                        <div class="">
                            <img src={img4} />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Section2
