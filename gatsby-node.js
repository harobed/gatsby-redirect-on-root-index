exports.createPages = ({ actions }) => {
    const { createRedirect } = actions;

    createRedirect({
        fromPath: '/',
        isPermanent: false,
        redirectInBrowser: true,
        toPath: '/page-2/'
    });
};
