# 这个是库用来测试Hexo构建个人网站

构建静态网页的。

下完node.js之后

## 安装Hexo

```
npm install -g hexo-cli
```

## 初始化

```text
hexo init myBlog
```

进入myBlog然后打开

```text
hexo s
```

文章导入的位置

[位置](myBlog\source\_posts)

myBlog\ source\ _posts

可以直接把md格式的文章导入_posts文件夹中、

## 创建文章

```text
hexo new [layout] <title>
```

可以指定文章的位置（layout），默认为 `post`，可以改`_config.yml` 中的 `default_layout` 参数重置默认位置。

## 生成网页

```text
hexo generate
```

简写

```text
hexo generate
```

## 生成服务器

```text
hexo server
```

简写

```text
hexo s
```

改端口

```text
hexo s -p 5000
```

# 部署到服务器

```text
hexo deploy
```

简写

```text
hexo d
```

部署之前要在_config.yml中 修改 type
