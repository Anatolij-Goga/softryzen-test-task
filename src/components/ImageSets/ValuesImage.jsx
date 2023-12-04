// import Val1T1 from "../../assets/images/val1tab1x.jpg";
import Val1T2 from "../../assets/images/val1tab2x.jpg";
// import Val1W1 from "../../assets/images/val1web1x.jpg";
import Val1W2 from "../../assets/images/val1web2x.jpg";
// import Val2T1 from "../../assets/images/val2tab1x.jpg";
import Val2T2 from "../../assets/images/val2tab2x.jpg";
// import Val2W1 from "../../assets/images/val2web1x.jpg";
import Val2W2 from "../../assets/images/val2web2x.jpg";

const ValuesImg1 = () => {
  return (
    <>
      <img
        srcSet={`
                ${Val1T2} 768w,
                ${Val1W2} 1280w
            `}
        sizes="(max-width: 768px) 708px,
                    (max-width: 1280px) 1240px"
        src={`${Val1T2}`}
        alt="Workers near wind turbines"
        style={{ objectFit: "cover" }}
      />
    </>
  );
};

const ValuesImg2 = () => {
  return (
    <>
      <img
        srcSet={`
                ${Val2T2} 768w,
                ${Val2W2} 1280w
            `}
        sizes="(max-width: 768px) 708px,
                    (max-width: 1280px) 1240px"
        src={`${Val2T2}`}
        alt="Worker near solar panel"
        style={{ objectFit: "cover" }}
      />
    </>
  );
};

export { ValuesImg1, ValuesImg2 };
