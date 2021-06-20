import { getSortedPostsData } from "@lib/posts";
import { NextPageContext } from "next";
import React from "react";

const blogPostsRssXml = (blogPosts) => {
  let latestPostDate: string = "";
  let rssItemsXml = "";
  blogPosts.forEach((post) => {
    const postDate = Date.parse(post.date);
    if (!latestPostDate || postDate > Date.parse(latestPostDate)) {
      latestPostDate = post.date;
    }
    rssItemsXml += `
      <item>
        <image><url>https://ljtech.ca/${post.src}</url><title>${post.alt}</title><link>https://ljtech.ca/${post.src}</link></image>
        <title>${post.title}</title>
        <link>https://ljtech.ca/blog/${post.id}</link>
        <date>${post.date}</date>
        <time>${post.time} to read</time>
        <description>${post.description}</description>
      </item>`;
  });
  return {
    rssItemsXml,
    latestPostDate,
  };
};

const getRssXml = (blogPosts) => {
  const { rssItemsXml, latestPostDate } = blogPostsRssXml(blogPosts);
  return `<?xml version="1.0" ?>
  <rss version="2.0">
    <channel>
        <image><url>https://i.imgur.com/fFwW1ad.png</url><title>ljtech.ca</title><link>https://ljtech.ca/blog</link></image>
        <title>ljtech Blog</title>
        <link>https://www.ljtech.ca</link>
        <language>en</language>
        <lastPostDate>${latestPostDate}</lastPostDate>
        ${rssItemsXml}
    </channel>
  </rss>`;
};

export default class Rss extends React.Component {
  static async getInitialProps({ res }: NextPageContext) {
    if (!res) {
      return;
    }
    const allPostsData = getSortedPostsData();
    res.setHeader("Content-Type", "text/xml");
    res.write(getRssXml(allPostsData));
    res.end();
  }
}
