const HOME = "/";
const ABOUT = "/about";

const PROJECTS = "/projects";
const PROJECT_DETAIL = "/:id";

const routes = {
    home: HOME,

    // deleteVideo: (id) => {
    //     return id ? `/videos/${id}/delete` : DELETE_VIDEO;
    // },
    about: ABOUT,
    projects: PROJECTS,
    projectDetail: (id) => {
        return id ? `/project/${id}` : PROJECT_DETAIL;
    },
};

export default routes;
