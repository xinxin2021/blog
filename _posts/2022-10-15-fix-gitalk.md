---
layout: post
title: 关于Gitalk评论区的修复
date: 2022-10-15
tags: [Others]
author: 鑫鑫
comments: true
---

**阅前提示**

~~本文章内容因ImageHub方未知原因，导致内容图片大量缺失，请谨慎阅读~~

已修复此问题，可放心阅读

---

最近我亲爱的[Gitalk](/goto?link=https://gitalk.github.io)评论区又双叒叕抽风了！！！

报了一个Network Error的错误，于是我就找到一篇帖子，使用Vercel搭建一个服务用来修复这个问题（原文不知道去哪了）

首先打开[这个GitHub项目地址](/goto?link=https://github.com/caibingcheng/proxy-vercel)，进去之后直接点击README中的Deploy图片进行部署，第一次使用需要登录，建议直接使用GitHub登录，登陆就不放图片了，可能还要授权一些权限，各位可以自己找一找。

![](https://s1.imagehub.cc/images/2022/12/21/94e24b1c6066cacb6ac5873a3afd3f3e.png)

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

![](https://s1.imagehub.cc/images/2022/12/21/6722e5a664a869d4fcce074ec6b0c5e7.png)

### 第二步 添加域名

点开项目，`Settings->Domains`

随后直接输入域名，然后点`Add`。

![](https://s1.imagehub.cc/images/2022/12/21/56407bc5110d6500b853ce9f23cc5503.png)

### 第三步 等待

随后等待Vercel自动部署和颁发证书即可。

---

[![](https://licensebuttons.net/l/by-nc-sa/3.0/88x31.png)](/goto?link=https://creativecommons.org/licenses/by-nc-sa/4.0)

本文章及其引用的图片(不包括引用的知识共享许可证徽章)采用[CC-BY-NC-SA 4.0](/goto?link=https://creativecommons.org/licenses/by-nc-sa/4.0/)协议进行许可。

[联系作者](mailto:blog@xinxin2021.tk) · [侵权联系](mailto:tort@xinxin2021.tk) —— 分享 · [QZone](/goto?link=https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=https%3A%2F%2Fblog.xinxin2021.tk%2Ffix-gitalk%2F&title=%E5%85%B3%E4%BA%8EGitalk%E8%AF%84%E8%AE%BA%E5%8C%BA%E7%9A%84%E4%BF%AE%E5%A4%8D&site=%E9%91%AB%E5%8D%9A%E5%AE%A2) · [Weibo](/goto?link=https://service.weibo.com/share/share.php?url=https%3A%2F%2Fblog.xinxin2021.tk%2Ffix-gitalk%2F&count=1&title=%E5%85%B3%E4%BA%8EGitalk%E8%AF%84%E8%AE%BA%E5%8C%BA%E7%9A%84%E4%BF%AE%E5%A4%8D&language=zh_cn)
