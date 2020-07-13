## NestJS 中 swagger 接口文档编写

### 安装 nest

- yarn global add @nestjs/cli 或者 npm i -g @nestjs/cli

### 创建项目

- nest new 项目名称

### 创建子应用

- nest g app 子应用名字

### 启动子项目

- nest start -w 项目名

### 创建新模块

- nest g lib 模块名
  - (default @app)默认别名 app -> 可修改@libs(@libs 为新别名)

### 安装 MongoDb 数据库(针对 ts)

- yarn add nestjs-typegoose @typegoose/typegoose

### 安装 mongoose

- yarn add mongoose @types/mongoose

### 子项目添加模块

- nest g module -p 子项目名 模块名

### 子项目添加模块对应的控制器

- nest g controller -p 子项目名 模块名

### 添加模块的 crud

- yarn add nestjs-mongoose-crud

### 接口文档依赖

- yarn add @nestjs/swagger swagger-ui-express

### 策略配置

- 策略包安装 yarn add @nestjs/passport passport passport-jwt passport-local
  - @nestjs/passport nestJS 支持
  - passport nodeJS 支持
  - passport-jwt jst 策略
  - passport-local local 本地策略
- bcryptjs/passport/passport-jwt/passport-local TS 语法提示支持
  yarn add -D @types/bcryptjs @types/passport @types/passport-jwt @types/passport-local
