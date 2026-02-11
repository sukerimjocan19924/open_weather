import img1 from "../assets/sunny.png"
import img2 from "../assets/thunderstorm.png"
import img3 from "../assets/drizzle.png"
import img4 from "../assets/rain.png"
import img5 from "../assets/snow.png"
import img6 from "../assets/fogDust.png"
import img7 from "../assets/cloud.png"
import img8 from "../assets/exception.png"

export const getColorByWeatherId = (weatherId) => {
    // if(weatherId == 800) return '#FCD340'

    // const group1 = Math.floor(weatherId/100)

    // switch (group1) {
    //     case 2: // 뇌우: 어두운 하늘 + 인디고 번쩍
    //         return 'linear-gradient(135deg, #1c375dff 0%, #5953cdff 100%)';
    //     case 3: // 이슬비: 옅은 청록 → 연한 하늘
    //         return 'linear-gradient(135deg, #CFFAFE 0%, #93C5FD 100%)';
    //     case 5: // 비: 블루 톤 딥 → 라이트
    //         return 'linear-gradient(135deg, #98b8ffff 0%, #60A5FA 100%)';
    //     case 6: // 눈: 화이트에 살짝 아이스블루
    //         return 'linear-gradient(135deg, #FFFFFF 0%, #fafee0ff 100%)';
    //     case 7: // 안개/먼지: 소프트 그레이 → 블루그레이
    //         return 'linear-gradient(135deg, #CBD5E1 0%, #cce1fdff 100%)';
    //     case 8: // 구름: 라이트 슬레이트 → 미드 슬레이트
    //         return 'linear-gradient(135deg, #f5f9ffff 0%, #c3c3c3ff 100%)';
    //     default: // 예외
    //         return 'linear-gradient(135deg, #CBD5E1 0%, #64748B 100%)';
    // }
    
    if(weatherId == 800) return img1

    const group = Math.floor(weatherId/100)

    switch (group) {
        case 2: // 뇌우: 어두운 하늘 + 인디고 번쩍
            return img2
        case 3: // 이슬비: 옅은 청록 → 연한 하늘
            return img3
        case 5: // 비: 블루 톤 딥 → 라이트
            return img4
        case 6: // 눈: 화이트에 살짝 아이스블루
            return img5
        case 7: // 안개/먼지: 소프트 그레이 → 블루그레이
            return img6
        case 8: // 구름: 라이트 슬레이트 → 미드 슬레이트
            return img7
        default: // 예외
            return img8
    }
}