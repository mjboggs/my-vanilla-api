module.exports = async function (context, req) {
    context.res = {
        body: {
            text: "Hello Michael, from the API"
        }
    };
};
