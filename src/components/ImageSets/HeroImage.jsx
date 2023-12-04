// import Hero1M from "../../assets/images/heromob1x.jpg";
import Hero2M from "../../assets/images/heromob2x.jpg";
// import Hero1T from "../../assets/images/herotab1x.jpg";
import Hero2T from "../../assets/images/herotab2x.jpg";
// import Hero1W from "../../assets/images/heroweb1x.jpg";
import Hero2W from "../../assets/images/heroweb2x.jpg";

export default function Hero() {
  return (
    <>
      <img
        srcSet={`
                ${Hero2M} 480w,
                ${Hero2T} 768w,
                ${Hero2W} 1280w
            `}
        sizes="(max-width: 480px) 440px,
                        (max-width: 768px) 708px,
                        (max-width: 1280px) 1240px"
        src={`${Hero2M}`}
        alt="Wind turbine"
      />
    </>
  );
}
