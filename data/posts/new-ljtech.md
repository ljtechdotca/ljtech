---
alt: "ljtech logos"
author: "Landon Johnson"
date: "June 19, 2021"
description: "After weeks in the works I am excited to announce the launch of my brand new website. This post will go over its design and development process."
src: "logos.svg"
time: "4 minutes"
title: "Now Launching - ljtech.ca"
---

On May 1, 2021, I decided to rebuild my website **ljtech.ca**. This project took the total of 49 days from start till finish.

#### Goals

---

- Improve lead generation
- Improve user experience

#### Design

---

I knew from the beginning that my website was going to be very similar to its previous design.

With this in mind I decided against preparing mock-ups in programs like Adobe XD and Figma.

Some small changes did occur, for example; the previous website used green and purple as primary and secondary colors.

> As I write this post I am kicking myself for not taking screen shots as it would have been great to see a before and after comparison.

#### Development

---

Developing a project without planning is difficult. I knew my goals but not the process to reach them. I needed to decern what was absolutely necessary and what needed to go.

The first prototype included an authentication system using Firebase. My idea was to protect the contact form by checking for an active sign in on page load. On top of this I added the capability to update or delete user credentials and store submitted messages on a database.

For all intents and purposes this system was to be used as a line of communication between me and my clients.

I reconsidered this approach when I realized how bloated it was. Using other forms of communication was easier to access and manage for both parties and my goal was to improve lead generation, not increase bounce rate.

All Firebase features were scrapped.

#### Conclusion

---

In short the project took longer than expected due to over-engineering the contact page.

#### Tech Stack

---

**Client:** React, Next

**Server:** Node

#### Dependencies

---

- [@svgr/webpack](https://www.npmjs.com/package/@svgr/webpack)
- [gray-matter](https://www.npmjs.com/package/gray-matter)
- [next-seo](https://www.npmjs.com/package/next-seo)
- [node-sass](https://www.npmjs.com/package/node-sass)
- [react-ga](https://www.npmjs.com/package/react-ga)
- [remark](https://www.npmjs.com/package/remark)
- [remark-html](https://www.npmjs.com/package/remark-html)
- [remark-prism](https://www.npmjs.com/package/remark-prism)
