---
layout: post
title: Security Tools Benchmarking
---

>Just finished reading [Security Tools Benchmarking](http://sectooladdict.blogspot.co.il/). Interesting article explaining the results of various benchmark tests done to various web applciation scanners and different types of attack vectors. After looking at the results, it is clear that not a single tool is the "one-in-all" solution for scanning web applications. In addition, the article clearly presents the fact that open-source web vulnerability scanners can be, at times, more efficient than commercial but also that commercial can be, at times, better than open-source tools.

>So what now? I guess the best thing to do is to do what I do, run multiple tools against a single web application. Scanners can do the best they can to detect vulnerabilities in an automated way but nothing beats testing an application by manually modifying payloads and see how the application reacts.

>>It is always best to understand the application and what it is meant to do before executing the penetration test!

>So my suggested tools can be:

* IBM AppScan
* Accunetix WVS
* Burp Suite

>Open Source Tools? Sure!

* W3AF
* sqlmap
* IronWASP
* Skipfish

> Highly recommend the use of Burp Suite or any othe proxy tool to manually change payloads. Nothing beats the human mind when it comes to penetration tests. Be creative!
