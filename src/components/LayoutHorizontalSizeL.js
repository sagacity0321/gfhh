import { useMemo } from "react";
import SizeM from "./SizeM";
import "./LayoutHorizontalSizeL.css";
const LayoutHorizontalSizeL = ({
  name1 = "Jane Doe",
  role = "Senior Designer",
  layoutHorizontalSizeLWidth,
  layoutHorizontalSizeLPosition,
  layoutHorizontalSizeLAlignSelf,
  layoutHorizontalSizeLPadding,
  layoutHorizontalSizeLBoxSizing,
}) => {
  const layoutHorizontalSizeLStyle = useMemo(() => {
    return {
      width: layoutHorizontalSizeLWidth,
      position: layoutHorizontalSizeLPosition,
      alignSelf: layoutHorizontalSizeLAlignSelf,
      padding: layoutHorizontalSizeLPadding,
      boxSizing: layoutHorizontalSizeLBoxSizing,
    };
  }, [
    layoutHorizontalSizeLWidth,
    layoutHorizontalSizeLPosition,
    layoutHorizontalSizeLAlignSelf,
    layoutHorizontalSizeLPadding,
    layoutHorizontalSizeLBoxSizing,
  ]);

  return (
    <div className="layouthorizontal-sizel" style={layoutHorizontalSizeLStyle}>
      <SizeM
        iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--user.svg"
        sizeMPosition="unset"
      />
      <div className="details1">
        <div className="category3">{name1}</div>
        <div className="category4">{role}</div>
      </div>
    </div>
  );
};

export default LayoutHorizontalSizeL;
