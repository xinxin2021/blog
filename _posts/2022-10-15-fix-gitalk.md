---
layout: post
title: 关于Gitalk评论区的修复
date: 2022-10-15
tags: [Others]
author: 鑫鑫
comments: true
---

最近我亲爱的[Gitalk](https://gitalk.github.io)评论区又双叒叕抽风了！！！

报了一个Network Error的错误，于是我就找到一篇帖子，使用Vercel搭建一个服务用来修复这个问题（原文不知道去哪了）

首先打开[这个GitHub项目地址](https://github.com/caibingcheng/proxy-vercel)，进去之后直接点击README中的Deploy图片进行部署，第一次使用需要登录，建议直接使用GitHub登录，登陆就不放图片了，可能还要授权一些权限，各位可以自己找一找。

![](https://s1.imagehub.cc/images/2022/10/15/clicktodeploy.png)

随后按照这样的格式填进去，`https://<vercel-domain>/github/login/oauth/access_token`，填到`proxy`一栏。

比如我的就是这样：

```yaml
gitalk:
  clientID: ***********
  clientSecret: ***********
  repo: blog
  owner: xinxin2021
  proxy: https://blog-proxy.xinxin2021.tk/github/login/oauth/access_token
```

随后你的Gitalk就不会出现这个问题了！

## 怎么绑定到自己的域名呢？

我绑定了两个域名，`blog-proxy.xinxin2021.tk`和`blog-proxy.macwinlin.ml`，如果各位想用我的也是可以的，别把我的服务搞崩就行了。两个域名可以交替使用，防止在域名解析出问题的时候无法使用。Vercel在国内好像被DNS污染了，所以导致`vercel.app`的域名无法使用（至少我的是这样），所以需要绑定域名。

### 第一步 添加DNS记录

首先去域名服务商添加一条CNAME记录，把一个域名设为`cname.vercel-dns.com`的别名，TTL建议选最大。

![](https://s1.imagehub.cc/images/2022/10/15/blog-proxy-cname.png)

### 第二步 添加域名

点开项目，`Settings->Domains`

随后直接输入域名，然后点`Add`。

![](https://s1.imagehub.cc/images/2022/10/15/vercel-settings-domain.png)

### 第三步 等待

随后等待Vercel自动部署和颁发证书即可。


