module.exports = (ctx) => {
    if(ctx.get('method').toUpperCase() === 'OPTIONS') {
        return ctx.response.body = '';
    }
    ctx.response.status = 200;
    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set("Access-Control-Allow-Headers", "X-Requested-With, X_Requested_With, Content-Type, X_FILENAME");
    ctx.set("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    ctx.set("X-Powered-By", '3.2.1');
}