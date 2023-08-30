import { useMemo } from "react";
import PlaceholderPicture from "./PlaceholderPicture";
import StyleOutlineSizeMBrand from "./StyleOutlineSizeMBrand";
import "./TeamMember.css";
const TeamMember = ({
  placeholderPicture,
  name1 = "Johanna Doe",
  iconJamIconsOutlineLogos,
  iconJamIconsOutlineLogos1,
  iconJamIconsOutlineLogos2,
  iconJamIconsOutlineLogos3,
  iconJamIconsOutlineLogos4,
  buttonText,
  iconJamIconsOutlineLogos5,
  role = "Sr. Product Designer",
  icons = true,
  image = true,
  button = true,
  teamMemberPosition,
  teamMemberWidth,
  teamMemberHeight,
  teamMemberFlex,
}) => {
  const teamMemberStyle = useMemo(() => {
    return {
      position: teamMemberPosition,
      width: teamMemberWidth,
      height: teamMemberHeight,
      flex: teamMemberFlex,
    };
  }, [teamMemberPosition, teamMemberWidth, teamMemberHeight, teamMemberFlex]);

  return (
    <div className="team-member" style={teamMemberStyle}>
      <PlaceholderPicture
        placeholderPicturePlaceho="/placeholder--picture7@2x.png"
        placeholderPicturePosition="unset"
        placeholderPictureWidth="unset"
        placeholderPictureHeight="unset"
        placeholderPictureAlignSelf="stretch"
        placeholderPictureFlex="1"
        placeholderPictureMaxWidth="100%"
        placeholderPictureOverflow="hidden"
        placeholderPictureMaxHeight="100%"
        placeholderPictureFlexShrink="unset"
      />
      <div className="name-and-role">
        <div className="name">{name1}</div>
        {role && <div className="role">{role}</div>}
      </div>
      {icons && (
        <div className="icon-jam-icons-outline-l-group">
          <img
            className="icon-jam-icons-outline-l14"
            alt=""
            src={iconJamIconsOutlineLogos}
          />
          <img
            className="icon-jam-icons-outline-l14"
            alt=""
            src={iconJamIconsOutlineLogos1}
          />
          <img
            className="icon-jam-icons-outline-l14"
            alt=""
            src={iconJamIconsOutlineLogos2}
          />
          <img
            className="icon-jam-icons-outline-l14"
            alt=""
            src={iconJamIconsOutlineLogos3}
          />
        </div>
      )}
      <StyleOutlineSizeMBrand
        iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--plus17.svg"
        text="Contact Johanna"
        iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--arrowright17.svg"
        text
        iconLeft={false}
        iconRight={false}
        styleOutlineSizeMBrandPosition="unset"
        styleOutlineSizeMBrandHeight="48px"
        styleOutlineSizeMBrandPadding="var(--padding-base) var(--padding-xs)"
        styleOutlineSizeMBrandBackgroundColor="unset"
        styleOutlineSizeMBrandZIndex="unset"
        styleOutlineSizeMBrandWidth="180px"
        styleOutlineSizeMBrandFlex="unset"
        styleOutlineSizeMBrandCursor="unset"
        textContainerBoxSizing="border-box"
        buttonTextFontSize="16px"
        buttonTextColor="#0f62fe"
        buttonTextDisplay="inline-block"
      />
    </div>
  );
};

export default TeamMember;
