import { SidebarEnum } from "../utils/SidebarEnum";
import { ReactComponent as EmailLogo } from "../images/emailLogo.svg"
import { ReactComponent as PublicationLogo } from "../images/publicationLogo.svg"
import { ReactComponent as ProposalLogo } from "../images/proposalLogo.svg"
import { ReactComponent as CaseLogo } from "../images/caseLogo.svg"

export const sidebarData=[
  {
    id:0,
    name:"Email",
    routeUrl:SidebarEnum.EMAIL,
    icon: <EmailLogo/>
  },
  {
    id:0,
    name:"Publication",
    routeUrl:SidebarEnum.EMAIL,
    icon: <PublicationLogo/>
  },
  {
    id:0,
    name:"Proposal",
    routeUrl:SidebarEnum.EMAIL,
    icon: <ProposalLogo/>
  },
  {
    id:0,
    name:"Case Study",
    routeUrl:SidebarEnum.EMAIL,
    icon: <CaseLogo/>
  },

]