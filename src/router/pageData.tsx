import RecruitMore from "@/pages/RecruitMore";
import Home from "@pages/Home";
import Landing from "@pages/Landing";
import Search from "@pages/Search";
import SearchDetail from "@pages/SearchDetail";
import routerType from "@_types/router.types";
import Lecture from "../pages/Lecture";
import MyPage from "../pages/MyPage";
import NotFound from "../pages/NotFound";
import ProfileView from "../pages/ProfileView";
import RecruitPost from "../pages/RecruitPost";
import RecruitView from "../pages/RecruitView";
import ReviewMore from "../pages/ReviewMore";
import ReviewPost from "../pages/ReviewPost";
import ReviewView from "../pages/ReviewView";
const pagesData: routerType[] = [
    {
        name: "Home",
        path: "",
        component: <Home />,
        exact: false,
    },
    {
        name: "Landing",
        path: "/login",
        component: <Landing />,
        exact: true,
    },
    {
        name: "Mypage",
        path: "/mypage",
        component: <MyPage />,
        exact: true,
    },
    {
        name: "Seach",
        path: "/search",
        component: <Search />,
        exact: true,
    },
    {
        name: "Seach",
        path: "/search/detail/",
        component: <SearchDetail />,
        exact: true,
    },

    {
        name: "RecruitView",
        path: "/recruit/:id",
        component: <RecruitView />,
        exact: false,
    },

    {
        name: "RecruitPost",
        path: "/recruit/post",
        component: <RecruitPost />,
        exact: false,
    },

    {
        name: "Lecture",
        path: "/lecture/:id",
        component: <Lecture />,
        exact: false,
    },

    {
        name: "ReviewPost",
        path: "/review/post/:id",
        component: <ReviewPost />,
        exact: false,
    },

    {
        name: "ReviewView",
        path: "/review/:id/:lectureId",
        component: <ReviewView />,
        exact: false,
    },

    {
        name: "RecruitsList",
        path: "/recruits",
        component: <RecruitMore />,
        exact: false,
    },

    {
        name: "ReviewsList",
        path: "/reviews",
        component: <ReviewMore />,
        exact: false,
    },
    {
        name: "Profile",
        path: "/profile/:id",
        component: <ProfileView />,
        exact: false,
    },

    {
        name: "Notfound",
        path: "*",
        component: <NotFound />,
    },
];

export default pagesData;
