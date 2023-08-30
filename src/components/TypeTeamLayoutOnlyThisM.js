import { useMemo } from "react";
import AlignmentCenter from "./AlignmentCenter";
import TeamMember from "./TeamMember";
import "./TypeTeamLayoutOnlyThisM.css";
const TypeTeamLayoutOnlyThisM = ({
  iconJamIconsOutlineLogos,
  iconJamIconsOutlineLogos1,
  iconJamIconsOutlineLogos2,
  iconJamIconsOutlineLogos3,
  iconJamIconsOutlineLogos4,
  iconJamIconsOutlineLogos5,
  iconJamIconsOutlineLogos6,
  iconJamIconsOutlineLogos7,
  iconJamIconsOutlineLogos8,
  iconJamIconsOutlineLogos9,
  iconJamIconsOutlineLogos10,
  iconJamIconsOutlineLogos11,
  iconJamIconsOutlineLogos12,
  iconJamIconsOutlineLogos13,
  iconJamIconsOutlineLogos14,
  iconJamIconsOutlineLogos15,
  iconJamIconsOutlineLogos16,
  iconJamIconsOutlineLogos17,
  iconJamIconsOutlineLogos18,
  iconJamIconsOutlineLogos19,
  iconJamIconsOutlineLogos20,
  iconJamIconsOutlineLogos21,
  iconJamIconsOutlineLogos22,
  iconJamIconsOutlineLogos23,
  typeTeamLayoutOnlyThisMPosition,
  typeTeamLayoutOnlyThisMBackgroundColor,
  typeTeamLayoutOnlyThisMZIndex,
}) => {
  const typeTeamLayoutOnlyThisMStyle = useMemo(() => {
    return {
      position: typeTeamLayoutOnlyThisMPosition,
      backgroundColor: typeTeamLayoutOnlyThisMBackgroundColor,
      zIndex: typeTeamLayoutOnlyThisMZIndex,
    };
  }, [
    typeTeamLayoutOnlyThisMPosition,
    typeTeamLayoutOnlyThisMBackgroundColor,
    typeTeamLayoutOnlyThisMZIndex,
  ]);

  return (
    <div
      className="typeteam-layoutonly-this-m"
      style={typeTeamLayoutOnlyThisMStyle}
    >
      <AlignmentCenter
        caption="The Team"
        headline1="Purus sagittis fringilla arcu neque."
        bibendumAmetAtMolestieMat="Bibendum amet at molestie mattis."
        text="Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis."
        caption
        text={false}
        headline1={false}
        headline2
        showBibendumAmetAt
        alignmentCenterPosition="unset"
        alignmentCenterWidth="1280px"
        alignmentCenterAlignSelf="unset"
        captionTextAlign="center"
        mainHeadlineTextAlign="center"
        secondaryHeadlineTextAlign="center"
        secondaryHeadlineAlignSelf="stretch"
        secondaryHeadlinePosition="relative"
        secondaryHeadlineFontSize="42px"
        secondaryHeadlineLineHeight="110%"
        secondaryHeadlineFontFamily="Roboto"
        secondaryHeadlineColor="#21272a"
        secondaryHeadlineMarginBlockStart="unset"
        secondaryHeadlineMarginBlockEnd="unset"
        secondaryHeadlineFontWeight="unset"
        loremIpsumDolorAlignSelf="unset"
        loremIpsumDolorPosition="unset"
        loremIpsumDolorFontSize="unset"
        loremIpsumDolorLineHeight="unset"
        loremIpsumDolorFontFamily="unset"
        loremIpsumDolorColor="unset"
        loremIpsumDolorTextAlign="unset"
        bibendumAmetAtMargin="0"
        bibendumAmetAtAlignSelf="unset"
        bibendumAmetAtPosition="unset"
        bibendumAmetAtFontSize="unset"
        bibendumAmetAtLineHeight="unset"
        bibendumAmetAtFontFamily="unset"
        bibendumAmetAtColor="unset"
        bibendumAmetAtTextAlign="unset"
        bibendumAmetAtFontWeight="unset"
        paragraphTextAlign="center"
        paragraphAlignSelf="stretch"
        paragraphPosition="relative"
        paragraphFontSize="18px"
        paragraphLineHeight="140%"
        paragraphFontFamily="Roboto"
        paragraphColor="#21272a"
        paragraphMarginBlockStart="unset"
        paragraphMarginBlockEnd="unset"
      />
      <div className="images">
        <TeamMember
          placeholderPicture="/placeholder--picture1@2x.png"
          name1="Darrell Steward"
          role={`UI Designer & Co-founder`}
          iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--linkedin2.svg"
          iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--twitter2.svg"
          iconJamIconsOutlineLogos2="/icon--jamicons--outline--logos--instagram3.svg"
          iconJamIconsOutlineLogos3="/icon--jamicons--outline--logos--facebook2.svg"
          iconJamIconsOutlineLogos4="/icon--jamicons--outline--logos--plus15.svg"
          buttonText="Contact Darrell"
          iconJamIconsOutlineLogos5="/icon--jamicons--outline--logos--arrowright15.svg"
          role
          icons
          image
          button
          teamMemberPosition="unset"
          teamMemberWidth="unset"
          teamMemberHeight="473px"
          teamMemberFlex="1"
        />
        <TeamMember
          placeholderPicture="/placeholder--picture2@2x.png"
          name1="Savannah Nguyen"
          role={`UX Designer & Co-founder`}
          iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--linkedin2.svg"
          iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--twitter2.svg"
          iconJamIconsOutlineLogos2="/icon--jamicons--outline--logos--instagram3.svg"
          iconJamIconsOutlineLogos3="/icon--jamicons--outline--logos--facebook2.svg"
          iconJamIconsOutlineLogos4="/icon--jamicons--outline--logos--plus16.svg"
          buttonText="Contact Savannah"
          iconJamIconsOutlineLogos5="/icon--jamicons--outline--logos--arrowright16.svg"
          role
          icons
          image
          button
          teamMemberPosition="unset"
          teamMemberWidth="unset"
          teamMemberHeight="473px"
          teamMemberFlex="1"
        />
        <TeamMember
          placeholderPicture="/placeholder--picture3@2x.png"
          name1="Dianne Russell"
          role="Developer"
          iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--linkedin2.svg"
          iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--twitter2.svg"
          iconJamIconsOutlineLogos2="/icon--jamicons--outline--logos--instagram3.svg"
          iconJamIconsOutlineLogos3="/icon--jamicons--outline--logos--facebook2.svg"
          iconJamIconsOutlineLogos4="/icon--jamicons--outline--logos--plus15.svg"
          buttonText="Contact Dianne"
          iconJamIconsOutlineLogos5="/icon--jamicons--outline--logos--arrowright15.svg"
          role
          icons
          image
          button
          teamMemberPosition="unset"
          teamMemberWidth="unset"
          teamMemberHeight="473px"
          teamMemberFlex="1"
        />
        <TeamMember
          placeholderPicture="/placeholder--picture4@2x.png"
          name1="Kristin Watson"
          role="Sr. Product Designer"
          iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--linkedin2.svg"
          iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--twitter2.svg"
          iconJamIconsOutlineLogos2="/icon--jamicons--outline--logos--instagram3.svg"
          iconJamIconsOutlineLogos3="/icon--jamicons--outline--logos--facebook2.svg"
          iconJamIconsOutlineLogos4="/icon--jamicons--outline--logos--plus16.svg"
          buttonText="Contact Kristin"
          iconJamIconsOutlineLogos5="/icon--jamicons--outline--logos--arrowright16.svg"
          role
          icons
          image
          button
          teamMemberPosition="unset"
          teamMemberWidth="unset"
          teamMemberHeight="473px"
          teamMemberFlex="1"
        />
      </div>
    </div>
  );
};

export default TypeTeamLayoutOnlyThisM;
