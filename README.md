### 参考链接
1. [localStorage设置过期时间](https://blog.csdn.net/zhaoxiang66/article/details/86703438)
2. [prettier配置](https://www.cnblogs.com/linjunfu/p/10880381.html)
3. [Setting a backgroundImage With React Inline Styles](https://stackoverflow.com/questions/39195687/setting-a-backgroundimage-with-react-inline-styles)
> extends放在同级compilerOptions配置上，不然会报错
4. [create-react-app配置@路径](https://juejin.cn/post/6844904121821036551)
5. [tslint.json unknown compiler option 'extends'](https://sharepoint.stackexchange.com/questions/268790/tslint-json-unknown-compiler-option-extends)
```bash
"extends": "./paths.json"
yarn add @babel/plugin-proposal-decorators
```
6. [react通过state的数据显示style多个样式（三目运算）](https://blog.csdn.net/chensong8331/article/details/102938954)
7. [create-react-app 安装postcss-pxtorem的方法](https://blog.csdn.net/quhongqiang/article/details/95043246)
8. [Rem布局的原理解析](https://yanhaijing.com/css/2017/09/29/principle-of-rem-layout/)
> create-react-app默认dev/pro环境开启了sourcemap

> 开启 chrome-inspect-Setting-Sources-Enable Javascript source maps

> `yarn Build` 后利用 根目录.env，控制Pro环境 sourceMap `GENERATE_SOURCEMAP=false`
9. [利用 craco 非react-app-rewrired 配置 sourcemap，未验证](https://github.com/facebook/create-react-app/issues/5707#issuecomment-503614767)
10. [antd-moblie集成](https://mobile.ant.design/docs/react/use-with-create-react-app-cn)
11. [React默认脚手架新增Less支持](https://www.cnblogs.com/hunanzp/p/13179549.html)

### 注意事项




### TODO
- [ ] 1.yarn eject 配置 less 为何不成功？
- [ ] 2.非yarn eject 下 less-loader在5.0以上版本配置为何不成功？
- [x] 3.react的background-image引入不成功，非行内样式下： 
    - [x] a. https链接引入
    - [x] b. css文件引入
    - [ ] c. webpack build后路径引入问题
- [ ] 4.尝试自己配置 CRA 脚手架
- [x] 5.REM布局
- [x] 6.prettier 样式配置
- [x] 7.配置@src绝对文件路径
- [x] 8.webstorm 换行对齐
- [x] 9.添加 sourceMap 在development、production模式
- [x] 10.集成ant-design

### 好文思考
1. [React Hooks 还不如类？](https://www.infoq.cn/article/ltgmCtDsuts31qM1W20D)
1. [你不知道的 useCallback](https://segmentfault.com/a/1190000020108840)
1. [useRef与let变量在多实例中对比，let变量局限](https://codesandbox.io/s/zhijieshiyongchangliangtidai-useref-dejuxianxing-kyptw?file=/src/App.tsx)
1. [react-router-cache-route对路由状态的保存](https://github.com/CJY0208/react-router-cache-route)
1. [JavaScript 编译 - JIT (just-in-time) compiler 是怎么工作的？](https://zhuanlan.zhihu.com/p/99395691)
1. [JS引擎概览](https://segmentfault.com/a/1190000039288517)
1. [AOT vs JIT程序编译](https://blog.csdn.net/boardknight/article/details/103872554)
1. [【深入解析】跨端框架的核心技术到底是什么？](https://supercodepower.com/cross-platform-tech#4react-native%EF%BC%9Ajs-engine--native-renderpipeline)
1. [跨平台桌面应用开发选择QT还是ELECTRON？](https://cocozq.com/?p=121)
1. [Kotlin vs Flutter：谁将成为跨平台开发市场的最终统治者？](https://cloud.tencent.com/developer/news/586019)
1. [Kotlin Multiplatform Mobile 现已推出 Alpha 版本](https://blog.jetbrains.com/zh-hans/kotlin/2020/09/kotlin-multiplatform-mobile-alpha/)
1. [精读《设计模式 - Mediator 中介者模式》](https://zhuanlan.zhihu.com/p/348438972)