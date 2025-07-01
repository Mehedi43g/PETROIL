import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"
import img4 from "../../assets/img4.png"

const Section2 = () => {
    return (
        <div className="w-full py-[100px]">
            <div className="flex w-full gap-2">
                <img className="w-1/4 " src={img1} alt="img1" />
                <img className="w-1/4 " src={img2} alt="img2" />
                <img className="w-1/4 " src={img3} alt="img3" />
                <img className="w-1/4 " src={img4} alt="img4" />
            </div>
        </div>
    )
}

export default Section2
