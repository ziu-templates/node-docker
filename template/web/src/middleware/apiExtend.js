function apiExtend(ctx) {
    ctx.apiSuccess = function(data = {}) {
        ctx.set("Content-Type", "application/json;charset=utf-8");
        data = data.retcode ? (data.data || {}) : data;
        ctx.response.body = {
            retcode: 2000,
            info: {
                errCode: 2000,
                msg: '请求成功',
                tip: 'success'
            },
            data: data || null
        };
    };

    ctx.apiFail = function(data = {}) {
        let err = data.info || data;
        ctx.set("Content-Type", "application/json;charset=utf-8");
        ctx.response.body = {
            retcode: 5000,
            info: {
                errCode: +err.errCode || 5000,
                msg: err.msg || '网络错误，请稍后重试: UNKNOWN',
                tip: !err ? '' : err.tip
            },
            data: data.data || null
        };
    };
}
module.exports = (ctx) => {
    apiExtend(ctx);
}