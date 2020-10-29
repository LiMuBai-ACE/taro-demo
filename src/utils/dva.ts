import Taro from '@tarojs/taro';

import { create } from "dva-core";

import { createLogger } from "redux-logger";

import createLoading from "dva-loading";

let app: {
    use: (arg0: { onError(err: any): void; }) => void;
    model: (arg0: any) => any;
    start: () => void;
    _store: any; getStore:
    () => any; dispatch: any;
};

let store: { dispatch: any; };

let dispatch: any;

let registered: boolean;

function createApp(opt: { onAction: any[]; enableLog: any; models: any[]; }) {

    // redux日志

    opt.onAction = []

    if (opt.enableLog) {

        opt.onAction.push(createLogger())

    }

    app = create(opt)

    app.use(createLoading())

    
    // 注入model

    if (!registered) {

        opt.models.forEach((model: any) => app.model(model));

    }

    registered = true;

    app.start()

    // 设置store

    store = app._store;

    app.getStore = () => store;

    app.use({

        onError(err: any) {
            Taro.showToast({ title: '服务器错误' });
            console.log(err, '----------->dva报错');
        }

    })

    // 设置dispatch

    dispatch = store.dispatch;

    app.dispatch = dispatch;

    return app;

}

export default {

    createApp,

    getDispatch() {

        return app.dispatch

    }

};
