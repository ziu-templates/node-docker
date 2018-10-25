const prjNum = think.config('prjNum'),
    moduleNum = '01',
    errObj = {
        moduleNum,
        name: '模块错误码',
        data: {
            [`3${prjNum}${moduleNum}001`]: {
                msg: '请求数据有误，请重试！',
                tip: 'check req data error!'
            }
        }
    };
module.exports = errObj;
