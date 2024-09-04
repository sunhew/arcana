import LoginIcon from "../assets/img/svg/login.svg";
import UseIcon from "../assets/img/svg/use.svg";
import LightIcon from "../assets/img/svg/Light.svg";
import DarkIcon from "../assets/img/svg/Dark.svg";
import LanguageIcon from "../assets/img/svg/Language.svg";

export const headerInfo = [
    {
        title: "로그인",
        icon: <img src={LoginIcon} alt="로그인" />
    },
    {
        title: "회원가입",
        icon: <img src={UseIcon} alt="회원가입" />
    },
    {
        icon: <img src={LightIcon} alt="라이트모드" />
    },
    {
        icon: <img src={DarkIcon} alt="다크모드" />
    },
    {
        icon: <img src={LanguageIcon} alt="언어" />
    },
]